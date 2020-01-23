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
  },
  actions: {
  },
  modules: {
  },
});
