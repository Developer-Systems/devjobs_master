import Vue from "vue";
import VueRouter from "vue-router";
import Alert from "../views/Alert.vue";
import Autentication from "../views/Autentication.vue";
import JobList from "../views/JobList.vue";
import Home from '../views/Home.vue'
import newVacancy from '../views/newVacancy.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/vacancy",
    name: "New Vacancy",
    component: newVacancy
  },
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
  {
    path: "/jobs-list",
    name: "Jobs List",
    component: JobList,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
