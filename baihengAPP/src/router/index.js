import Vue from 'vue';
import Router from 'vue-router';
// import { resolve } from 'path';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: resolve =>require(['@/components/login'],resolve)
  },
  {
    path: '/Home',
    name: 'Home',
    component: resolve =>require(['@/components/home'],resolve)
  }
];

export default new Router({
  mode:'history',
  routes
});
