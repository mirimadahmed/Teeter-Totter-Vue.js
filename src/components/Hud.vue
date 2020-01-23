<template>
  <div class="hud">
    <!-- Showing some controls for the game here -->
    <div class="user-shapes-stats">
      <div>
        Total weight: {{ leftShapesWeight  }}
      </div>
      <div>
        Momentum: {{ droppingShapes[0] && droppingShapes[0].weight * currentSpeed }}
      </div>
    </div>
    <div class="auto-shapes-stats">
      <div>
        Total weight: {{ rightShapesWeight }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'leftShapes',
      'rightShapes',
      'droppingShapes',
      'currentSpeed',
    ]),
    leftShapesWeight() {
      return this.totalWeight(this.leftShapes);
    },
    rightShapesWeight() {
      return this.totalWeight(this.rightShapes);
    },
  },
  methods: {
    totalWeight(shapes = []) {
      let total = 0;
      shapes.forEach((element) => {
        total += element.weight;
      });
      return total;
    },
  },
};
</script>

<style lang="scss" scoped>
.hud {
  display: flex;
  justify-content: space-between;
  flex: 0 0 6rem;
  padding: 0.5rem 1.5rem;
}
</style>
