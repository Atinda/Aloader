import Vue from 'vue';
import Router from 'vue-router';
import { resolve } from 'path';

import loginRouter from './login';
import homeRouter from './home';
import homepageRouter from './homepage';
import informationRouter from './information';
import mailistRouter from './mailist';
import userRouter from './user';

Vue.use(Router);

const routes = [
  // 使用扩展运算符展开引进router
  ...loginRouter,        
  ...homeRouter,        
  ...homepageRouter,        
  ...informationRouter,        
  ...mailistRouter,        
  ...userRouter,     
];

export default new Router({
  mode:'history',
  routes
});
