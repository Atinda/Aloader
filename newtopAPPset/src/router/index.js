import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'

import homepage from '@/components/homepage/homepage'
import information from '@/components/information/information'
import vchat from '@/components/information/children/vchat'
import mailist from '@/components/mailist/mailist'
import user from '@/components/user/user'
import userinfo from '@/components/user/children/userInfo'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{                          // 默认首先进入登陆页面
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',                  // 主页
      component: home,
      children: [{
          path: '/',
          name: 'homepage',           // 默认进入首页
          component: homepage
        },
        {
          path: '/homepage',
          name: 'homepage',           // 首页
          component: homepage
        },
        {
          path: '/information',       // 消息  
          name: 'information',    
          component: information,
        },
        {
          path: '/mailist',           // 通讯录
          name: 'mailist',
          component: mailist
        },
        {
          path: '/user',              // 我的
          name: 'user',
          component: user,
        }
      ]
    },
    {
      path: '/vchat',                 // 通讯页面
      name: 'vchat',
      component: vchat
    },
    {
      path: '/userinfo',              // 个人中心
      name: 'userinfo',
      component: userinfo
    }
  ]
})
