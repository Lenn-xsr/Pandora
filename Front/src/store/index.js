import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      language: "BR",
      categories: [],
      color: "",
      tag: null,
      avatar: null,
    },
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
});
