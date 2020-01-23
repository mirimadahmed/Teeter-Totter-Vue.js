<template>
  <div class="falling-shapes">
    <!-- Shapes that are currently falling here -->
    <Shape
      v-for="shape in droppingShapes"
      :key="shape.id"
      :shape="shape"
      :id="`falling-shape-${shape.id}`"
    />
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import Shape from '@/components/Shape.vue';

export default {
  components: {
    Shape,
  },
  data() {
    return {
      intervalId: null,
      shapeBottomLimit: null,
    };
  },
  computed: {
    ...mapGetters(['boardAngle', 'isBoardValid']),
    ...mapState(['droppingShapes', 'gamePaused']),
    currentFallingShape() {
      const { id } = this.droppingShapes[0];
      return document.getElementById(`falling-shape-${id}`);
    },
  },
  watch: {
    gamePaused: {
      handler(current) {
        if (current) {
          clearInterval(this.intervalId);
        } else {
          this.getShapeBottomLimit();
          this.animateShape();
        }
      },
    },
  },
  methods: {
    ...mapMutations(['getShape', 'toggleSimulation', 'addLeftShape', 'moveDroppingShape', 'updateVelocity']),
    moveShape({ keyCode }) {
      const isArrowPressed = [37, 39].includes(keyCode);
      if (this.gamePaused || !isArrowPressed) return;
      const shapeWidth = this.currentFallingShape.getBoundingClientRect().width;
      const areaWidth = document.querySelector('.falling-shapes').getBoundingClientRect().width;

      this.moveDroppingShape({
        moveLeft: keyCode === 37,
        width: (shapeWidth / areaWidth) * 100,
      });

      this.$nextTick(this.getShapeBottomLimit);
    },
    animateShape() {
      this.intervalId = setInterval(() => {
        if (this.droppingShapes[0].top >= this.shapeBottomLimit) {
          const droppedShape = this.droppingShapes.shift();

          clearInterval(this.intervalId);

          this.addLeftShape(droppedShape);
          this.updateVelocity();
          this.getShape();
          this.animateShape();
        } else {
          this.droppingShapes[0].top += 1;
          this.currentFallingShape.style.top = `${this.droppingShapes[0].top}px`;
        }
      }, this.fallingIntervalGap);
    },
    getShapeBottomLimit() {
      const boardBounds = document.querySelector('.board').getBoundingClientRect();
      const panelBounds = document.querySelector('.hud').getBoundingClientRect();
      const shapeBounds = this.currentFallingShape.getBoundingClientRect();

      // Similarity of triangles
      const totterCathet = boardBounds.bottom - boardBounds.top - 10;
      const similarCathet = (this.droppingShapes[0].left * totterCathet) / 100;

      this.shapeBottomLimit = this.boardAngle >= 0
        ? boardBounds.top + similarCathet - shapeBounds.height - panelBounds.height
        : boardBounds.bottom - similarCathet - shapeBounds.height - panelBounds.height;
    },
    handleBoardTransitionEnd() {
      if (this.gamePaused) return;

      if (this.isBoardValid) {
        this.getShapeBottomLimit();
      } else {
        this.toggleSimulation();
      }
    },
  },
  mounted() {
    const boardEl = document.querySelector('.board');
    boardEl.addEventListener('transitionend', this.handleBoardTransitionEnd);
    window.addEventListener('keydown', this.moveShape);
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('keydown', this.moveShape);
      boardEl.removeEventListener('transitionend', this.handleBoardTransitionEnd);
    });
  },
};
</script>

<style lang="scss" scoped>
.falling-shapes {
  position: relative;
  flex: 1 1 50%;
}
</style>
