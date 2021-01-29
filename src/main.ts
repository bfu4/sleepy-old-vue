import Vue from 'vue'
import VueRouter from "vue-router";
import router, { getComponent } from "@/routes";

Vue.use(VueRouter)
const bulma = require('bulma')

const app = new Vue({
  router,
  render: function(createElement) {
    return createElement(getComponent(window.location.pathname));
  }
}).$mount('#app');