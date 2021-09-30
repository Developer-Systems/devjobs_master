import Vue from "vue";
import VueRouter from "vue-router";
import Alert from "../views/Alert.vue";
import Autentication from "../views/Autentication.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/alert",
    name: "Alert",
    component: Alert,
  },
  {
    path: "/autentication",
    name: "Autentication",
    component: Autentication,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
