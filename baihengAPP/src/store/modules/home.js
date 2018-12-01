export default {
    state: {
        tabbarBtnShow:null        // 返回到哪个底部按钮中的标识
    },
    getters: {

    },
    mutations: {            // 同步操作（不可异步操作）
        showActive:(state,v)=>{
            consoele.log(state,v)
        }
    },
    actions: {              // 异步操作

    }
};