import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cart: [],
    parts: null,
  },
  getters: {
    itemsOnSale(state) {
      return state.cart.filter((robot) => robot.head.onSale);
    },
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then(((result) => commit('updateParts', result.data)))
        .catch(console.error);
    },
  },
});
