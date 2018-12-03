export default {
    state: {
        tabbarBtnShow:"homepage"        // 显示按钮中的标识
    },
    getters: {
        h_getBtn:state=> {
            return state.tabbarBtnShow
        }
    },
    mutations: {                 // 同步操作（不可异步操作）
        h_showActive:(state,v)=>state.tabbarBtnShow = v
    },
    actions: {                   // 异步操作

    }
};