<template>
  <router-view />
</template>

<script>
import signupActions from "@/mixins/signupActions.js";
import { api } from "@/services.js";

export default {
  name: "Signup",
  mixins: [signupActions],
  methods: {
    async getUserInfos() {
      api.get("/userinfo").then((res) => {
        if (res.data.tag) this.user = { ...res.data };
      });
    },
  },
  created() {
    this.getUserInfos();
  },
};
</script>
