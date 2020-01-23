<template>
  <div class="teeter-totter">
    <div class="board">
      <!-- Left shapes -->
      <!-- Right shapes -->
    </div>
    <!-- Bottom center triangle -->
    <div class="foundation"></div>
  </div>
</template>

<script>
export default {};
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
  transition: 400ms ease-in;
}
.foundation {
  width: 0;
  height: 0;
  border-left: 3rem solid transparent;
  border-right: 3rem solid transparent;
  border-bottom: 8rem solid #921919;
}
</style>
