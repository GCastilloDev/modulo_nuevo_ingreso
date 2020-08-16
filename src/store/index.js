import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: ""
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
  },
  modules: {}
});
