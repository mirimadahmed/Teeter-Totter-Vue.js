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
    <div class="controls">
      <button @click="toggleSimulation">{{ buttonText }}</button>
      <button v-if="gamePaused" @click="toggleSimulation('auto')">Auto Mode</button>
      <button @click="resetGame">Reset</button>
    </div>
    <div class="auto-shapes-stats">
      <div>
        Total weight: {{ rightShapesWeight }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([
      'leftShapes',
      'rightShapes',
      'droppingShapes',
      'currentSpeed',
      'gamePaused',
    ]),
    leftShapesWeight() {
      return this.totalWeight(this.leftShapes);
    },
    rightShapesWeight() {
      return this.totalWeight(this.rightShapes);
    },
    buttonText() {
      return this.gamePaused ? 'Play' : 'Pause';
    },
  },
  methods: {
    ...mapMutations(['toggleSimulation']),
    ...mapActions(['startGame']),
    resetGame() {
      window.history.go();
    },
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
.controls button {
  padding: 5px;
  margin: 5px;
  font-size: 14px;
}
</style>
