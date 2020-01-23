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

</style>
