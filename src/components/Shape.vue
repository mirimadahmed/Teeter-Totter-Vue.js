<template>
  <div class="shape" :class="shapeClass">
    <div class="weight">{{ shape.weight }}kg</div>
  </div>
</template>

<script>
export default {
  props: {
    shape: {
      type: Object,
      required: true,
    },
  },
  computed: {
    shapeClass() {
      const { type } = this.shape;
      return {
        square: type === 'SQUARE',
        triangle: type === 'TRIANGLE',
        circle: type === 'CIRCLE',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.shape {
  background: green;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: top left;
  .weight {
    font-size: 10px;
    font-weight: 500;
    color: #fff;
  }
}
.square,
.circle {
  width  : 3rem;
  height : 3rem;
}

.circle {
  border-radius: 50%;
}
</style>
