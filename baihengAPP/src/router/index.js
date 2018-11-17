import Vue from 'vue';
import Router from 'vue-router';
import { resolve } from 'path';

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
    component: resolve =>require(['@/components/home'],resolve),
    children: [
      {
      path: '/',
      name: 'homepage',           // 默认进入首页
      component: resolve =>require(['@/components/homepage/homepage'],resolve),
    },
    {
      path: '/myTask',              // 我的任务
      name: 'myTask',
      component: resolve =>require(['@/components/homepage/children/myTask'],resolve),
    },
    {
      path: '/pReporting',              // 生产报工
      name: 'pReporting',
      component: resolve =>require(['@/components/homepage/children/pReporting'],resolve),
    },
    {
      path: '/pFeeding',              // 生产投料
      name: 'pFeeding',
      component: resolve =>require(['@/components/homepage/children/pFeeding'],resolve),
    },
    {
      path: '/pSchedule',              // 生产进度
      name: 'pSchedule',
      component: resolve =>require(['@/components/homepage/children/pSchedule'],resolve),
    },
    {
      path: '/pPlan',              // 生产计划
      name: 'pPlan',
      component: resolve =>require(['@/components/homepage/children/pPlan'],resolve),
    },
    {
      path: '/oManagement',              // 订单管理
      name: 'oManagement',
      component: resolve =>require(['@/components/homepage/children/oManagement'],resolve),
    },
    {
      path: '/mManagement',              // 机台管理
      name: 'mManagement',
      component: resolve =>require(['@/components/homepage/children/mManagement'],resolve),
    },
    {
      path: '/pManagement',              // 生产管理
      name: 'pManagement',
      component: resolve =>require(['@/components/homepage/children/pManagement'],resolve),
    },
    {
      path: '/qManagement',              // 品质管理
      name: 'qManagement',
      component: resolve =>require(['@/components/homepage/children/qManagement'],resolve),
    },
  ]
  }
];

export default new Router({
  mode:'history',
  routes
});
