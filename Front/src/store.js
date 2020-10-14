import Vue from 'vue'
import Vuex from 'vuex'

let tag, avatar;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      language: "BR",
      categories: [],
      color: "",
      tag: tag,
      avatar: avatar
    }
  }
})