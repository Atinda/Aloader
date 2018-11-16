import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'font-awesome/css/font-awesome.css';
import { Divider ,Group,XInput,Cell,XButton } from 'vux';

Vue.component('divider', Divider);
Vue.component('group', Group);
Vue.component('x-input', XInput);
Vue.component('cell', Cell);
Vue.component('x-button', XButton);


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
