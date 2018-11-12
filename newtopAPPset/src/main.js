import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'

import bus from './common/eventBus'
import { 
  Field,
  Button,
  Spinner,
  Search,
  Tabbar,
  TabItem,
  Swipe,
  SwipeItem,
  Header,
  Badge
} from "mint-ui";

Vue.component(Field.name, Field);       // 按需引进ui组件
Vue.component(Button.name, Button);  
Vue.component(Spinner .name, Spinner);  
Vue.component(Search.name, Search);  
Vue.component(Tabbar.name, Tabbar);  
Vue.component(TabItem.name, TabItem);  
Vue.component(Swipe.name, Swipe);  
Vue.component(SwipeItem.name, SwipeItem);  
Vue.component(Header.name, Header);  
Vue.component(Badge.name, Badge);  

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    bus
  }
})
