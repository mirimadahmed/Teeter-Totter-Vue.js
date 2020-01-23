<template>
  <div class="ground">
    <FallingShapes />
    <Board />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import FallingShapes from '@/components/FallingShapes.vue';
import Board from '@/components/Board.vue';

export default {
  components: {
    FallingShapes,
    Board,
  },
  created() {
    this.startGame();
  },
  methods: {
    ...mapActions(['startGame']),
  },
};
</script>

<style lang="scss" scoped>
.ground {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  min-width: 500px;
  width: 70%;
  margin: 0 auto;
  padding-bottom: 10rem;
}
</style>
