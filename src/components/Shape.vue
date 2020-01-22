<template>
  <div class="shape">
    <div>{{ shape.weight }}kg</div>
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

<style scoped>
.shape {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: top left;
}
</style>
