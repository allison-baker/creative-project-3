import Vue from "vue";
import VueRouter from "vue-router";
import Generator from "../views/Generator.vue";
import Quotes from "../views/Quotes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Generator",
    component: Generator
  },
  {
    path: "/quotes",
    name: "Quotes",
    component: Quotes
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
