import Vue from "vue";
import VueRouter from "vue-router";
import WelcomeView from "@/views/WelcomeView.vue";
import OnBoarding from "@/views/OnBoarding.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
    children: [
    ],
  },
  {
    path: "/onboarding",
    name: "OnBoarding",
    component: OnBoarding,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
