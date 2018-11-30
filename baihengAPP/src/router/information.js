const informationRouter = [
    {
        path: '/vchat',              // 聊天
        name: 'Vchat',
        component: resolve =>require(['@/components/information/children/vchat'],resolve),
    },
];

export default informationRouter;