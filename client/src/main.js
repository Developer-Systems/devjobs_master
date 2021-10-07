import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as Bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import boxicons from './plugins/boxicons'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  Bootstrap,
  $,
  boxicons,
  render: (h) => h(App),
}).$mount("#app");
