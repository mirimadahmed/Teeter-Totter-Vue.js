<template>
  <div class="teeter-totter">
    <div class="board" :style="boardStyling">
      <!-- Left shapes -->
      <Shape
        v-for="shape in leftShapes"
        :key="shape.id"
        :shape="shape"
        is-on-board
      />

      <!-- Right shapes -->
      <Shape
        v-for="shape in rightShapes"
        :key="shape.id"
        :shape="shape"
        is-on-board
        place-randomly
      />
    </div>
    <!-- Bottom center triangle -->
    <div class="foundation"></div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import Shape from '@/components/Shape.vue';

export default {
  components: {
    Shape,
  },
  computed: {
    ...mapGetters(['boardAngle', 'isBoardValid']),
    ...mapState(['leftShapes', 'rightShapes']),
    boardStyling() {
      return {
        transform: `rotate(${this.boardAngle / 2}deg)`,
        transition: `${Math.abs(this.boardAngle / 2) * 10}ms ease-in`,
      };
    },
    leftMore() {
      return this.leftShapes.length === this.rightShapes.length;
    },
  },
  watch: {
    leftMore(val) {
      if (val && this.isBoardValid) {
        // get new shape for right side
        this.getShape(true);
      }
    },
  },
  methods: {
    ...mapMutations(['getShape']),
  },
};
</script>

<style lang="scss" scoped>
.teeter-totter {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.board {
  position: relative;
  height: 10px;
  width: 100%;
  background-color: #0e24a0;
}
.foundation {
  width: 0;
  height: 0;
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  border-bottom: 8rem solid #921919;
}
</style>
