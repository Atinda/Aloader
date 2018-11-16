import Vue from 'vue';
import vuex from 'vuex';
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import login from './modules/login.js';
import home from './modules/home.js';


Vue.use(vuex);

export default new vuex.Store({
    state,              // 存储状态
    getters,            // 派生状态
    mutations,          // 提交状态修改
    actions,            // 看接受异步操作的提交状态，和mutations类似
    modules:{           // store的子模块
        login,
        home
    }
});