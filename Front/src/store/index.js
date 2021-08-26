import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      language: null,
      categories: [],
      color: null,
      tag: null,
      avatar: null,
    },
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    updateUser(context, payload) {
      context.commit(`UPDATE_USER`, payload);
    },
  },
});
