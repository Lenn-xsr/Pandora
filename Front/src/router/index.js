import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "@/views/Signup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    children: [
      {
        path: "",
        name: "Language",
        component: () =>
          import(
            /* webpackChunkName: "signup-group" */ "@/views/Signup/Steps/Language.vue"
          ),
      },
      {
        path: "category",
        name: "Category",
        component: () =>
          import(
            /* webpackChunkName: "signup-group" */ "@/views/Signup/Steps/Category.vue"
          ),
      },
      {
        path: "color",
        name: "Color",
        component: () =>
          import(
            /* webpackChunkName: "signup-group" */ "@/views/Signup/Steps/Color.vue"
          ),
      },
      {
        path: "finish",
        name: "Finish",
        component: () =>
          import(
            /* webpackChunkName: "signup-group" */ "@/views/Signup/Steps/Finish.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
