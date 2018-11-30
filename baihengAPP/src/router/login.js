const loginRouter = [
    {
        path: '/',                    // 登陆
        name: 'Login',
        component: resolve =>require(['@/components/login'],resolve)
      }
];

export default loginRouter;