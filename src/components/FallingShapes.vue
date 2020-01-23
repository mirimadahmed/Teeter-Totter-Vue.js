<template>
  <div class="falling-shapes">
    <!-- Shapes that are currently falling here -->
    <Shape
      v-for="shape in droppingShapes"
      :key="shape.id"
      :shape="shape"
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
  computed: {
    ...mapGetters(['boardAngle', 'isBoardValid']),
    ...mapState(['droppingShapes', 'gamePaused']),
  },
  methods: {
    ...mapMutations(['getShape', 'toggleSimulation', 'addLeftShape']),
  },
};
</script>

<style lang="scss" scoped>
.falling-shapes {
  position: relative;
  flex: 1 1 50%;
}
</style>
