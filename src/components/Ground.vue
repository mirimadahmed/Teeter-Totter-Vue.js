<template>
  <div class="ground">
    <FallingShapes />
    <Board />
  </div>
</template>

<script>
import FallingShapes from '@/components/FallingShapes.vue';
import Board from '@/components/Board.vue';

export default {
  components: {
    FallingShapes,
    Board,
  },
};
</script>

<style lang="scss" scoped>

</style>
