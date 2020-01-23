import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    leftShapes: [],
    rightShapes: [],
    droppingShapes: [],
    gamePaused: true, // initially game will be paused
  },
  mutations: {
    resetGame(state) {
      state.leftShapes = [];
      state.rightShapes = [];
      state.droppingShapes = [];
    },
    toggleSimulation(state) {
      state.gamePaused = !state.gamePaused;
    },
    addLeftShape(state, shape = {}) {
      state.leftShapes.push(shape);
    },
  },
  actions: {
  },
  modules: {
  },
});
