<template>
  <div id="app">
    <h1>Welcome to teeter totter game.</h1>
    <Hud />
    <Ground />
  </div>
</template>

<script>
import Hud from '@/components/Hud.vue';
import Ground from '@/components/Ground.vue';

export default {
  name: 'app',
  components: {
    Hud,
    Ground,
  },
};
</script>

<style>
html, body, #app {
  width  : 100%;
  height : 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
