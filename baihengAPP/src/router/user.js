const userRouter = [
    {
        path: '/userInfo',                   // 个人信息
        name: 'userInfo',
        component: resolve =>require(['@/components/user/children/userInfo'],resolve),
    },
    {
        path: '/contact',                   // 联系方式
        name: 'contact',
        component: resolve =>require(['@/components/user/children/contact'],resolve),
    },
    {
        path: '/myQRcode',                   // 我的二维码
        name: 'myQRcode',
        component: resolve =>require(['@/components/user/children/myQRcode'],resolve),
    },
    {
        path: '/password',                   // 修改密码
        name: 'password',
        component: resolve =>require(['@/components/user/children/password'],resolve),
    },
    {
        path: '/newtop',                    // 关于新杰
        name: 'newtop',
        component: resolve =>require(['@/components/user/children/newtop'],resolve),
    },
    {
        path: '/setUp',                     // 设置
        name: 'setUp',
        component: resolve =>require(['@/components/user/children/setUp'],resolve),
    },
];

export default userRouter;