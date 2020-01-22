<template>
  <div class="shape">
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
};
</script>

<style lang="scss" scoped>
.shape {
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
</style>
