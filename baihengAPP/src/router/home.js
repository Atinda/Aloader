const homeRouter = [
    {
        path: '/Home',                // 首页
        name: 'Home',
        component: resolve =>require(['@/components/home'],resolve),
        children: [
        {
          path: '/',                // 默认进入主页
          // name: 'Homepage',
          component: resolve =>require(['@/components/homepage/homepage'],resolve)
        },
        {
          path: '/homepage',          // 主页
          // name: 'Homepage',           
          component: resolve =>require(['@/components/homepage/homepage'],resolve),
        },
        {
          path: '/Information',       // 聊天信息
          name: 'Information',
          component: resolve =>require(['@/components/information/information'],resolve)
        },
        {
          path: '/Mailist',             // 通讯录
          name: 'Mailist',
          component: resolve =>require(['@/components/mailist/mailist'],resolve)
        },
        {
          path: '/User',                // 个人中心
          name: 'User',
          component: resolve =>require(['@/components/user/user'],resolve)
        },
      ]
      },
];

export default homeRouter;