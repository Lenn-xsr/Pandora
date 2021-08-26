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
    getUserInfos() {
      api.get("/user").then((res) => {
        if (res.data.tag) this.updateUser(res.data);
      });
    },
    checkRoute() {
      if (this.$route.path != "/") this.$router.push("/");
    },
  },
  async created() {
    await this.checkRoute();
    this.getUserInfos();
  },
};
</script>
