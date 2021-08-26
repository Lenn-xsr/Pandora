import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["updateUser"]),
  },
};
