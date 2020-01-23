import Vue from 'vue';
import Vuex from 'vuex';

import helpers from '@/utils/helpers';

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
  getters: {
    boardAngle({ leftShapesSum, rightShapesSum }) {
      let angle = 0;

      // calculate the angle of the board
      const diff = Math.abs(leftShapesSum, rightShapesSum);
      angle = leftShapesSum > rightShapesSum
        ? diff / leftShapesSum * -50
        : diff / rightShapesSum * 50;

      return angle;
    },
    isBoardValid({ boardAngle }) {
      return boardAngle > -30 && boardAngle < 30;
    },
    leftShapesSum({ leftShapes }) {
      return helpers.getShapesSum(leftShapes, true);
    },
    rightShapesSum({ rightShapes }) {
      return helpers.getShapesSum(rightShapes, false);
    },
  },
  actions: {
  },
  modules: {
  },
});
