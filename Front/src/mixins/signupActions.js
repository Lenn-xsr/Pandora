import { mapMutations } from "vuex";

export default {
  comuted: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set(object) {
        this.UPDATE_USER(object);
      },
    },
  },
  methods: {
    ...mapMutations(["UPDATE_USER"]),
  },
};
