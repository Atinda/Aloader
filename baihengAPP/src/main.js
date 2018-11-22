import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'font-awesome/css/font-awesome.css';
import { Divider ,Group,XInput,Cell,XButton,Tabbar,TabbarItem,XHeader,
   Tab,TabItem,Flow, FlowState, FlowLine,Loading,LoadingPlugin,
   Flexbox,FlexboxItem,
  } from 'vux';

Vue.component('divider', Divider);
Vue.component('group', Group);
Vue.component('x-input', XInput);
Vue.component('cell', Cell);
Vue.component('x-button', XButton);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
Vue.component('x-header', XHeader);
Vue.component('tab', Tab);
Vue.component('tab-item', TabItem);
Vue.component('flow', Flow);
Vue.component('flow-state', FlowState);
Vue.component('flow-line', FlowLine);
Vue.component('loading', Loading);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);


Vue.use(LoadingPlugin)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
