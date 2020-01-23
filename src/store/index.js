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
    currentSpeed: 10, // velocity of coming down
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
    getShape({ droppingShapes, rightShapes }, right = false) {
      const weight = helpers.generateRandomNumber(1, 10 - 1);
      const type = helpers.generateRandomNumber(1, 2);
      const left = helpers.generateRandomNumber(0, 40);
      const color = helpers.generateRandomColor();
      const top = 0;
      const scale = 1 + 0.08 * (weight - 1);
      const id = helpers.getRandomID.next().value;

      const shape = {
        id, color, type, weight, top, left, scale,
      };
      if (right) {
        rightShapes.push(shape);
      } else {
        droppingShapes.push(shape);
      }
    },
    moveDroppingShape({ droppingShapes }, { moveLeft, width }) {
      const shape = droppingShapes[0];

      const canMoveLeft = shape.left - 1 >= 0;
      const canMoveRight = shape.left + width + 1 <= 45;

      if (moveLeft && canMoveLeft) {
        shape.left -= 1;
      } else if (canMoveRight) {
        shape.left += 1;
      }
    },
    updateVelocity(state, reset = false) {
      if (reset) {
        state.currentSpeed = 10;
      } else if (state.currentSpeed > 5) {
        state.currentSpeed -= 1;
      }
    },
  },
  getters: {
    boardAngle(state, { leftShapesSum, rightShapesSum }) {
      let angle = 0;
      const diff = Math.abs(leftShapesSum - rightShapesSum);
      angle = leftShapesSum > rightShapesSum
        ? diff / leftShapesSum * -50
        : diff / rightShapesSum * 50;
      return angle;
    },
    isBoardValid(state, { boardAngle }) {
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
    startGame({ commit, state }) {
      if (!state.gamePaused) { commit('toggleSimulation'); }
      commit('resetGame');
      commit('updateVelocity', true);

      // initial setup one shape for user one for right side
      commit('getShape');
      commit('getShape');
      commit('getShape', true);
    },
  },
});
