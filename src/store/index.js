import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: false,
  },
  mutations: {
    updateModal: (state, bool) => {
      state.modal = bool;
    },
  },
  actions: {
    openModal: ({ commit }) => {
      commit("updateModal", true);
    },
    closeModal: ({ commit }) => {
      commit("updateModal", false);
    },
  },
  modules: {},
});
