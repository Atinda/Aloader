import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'font-awesome/css/font-awesome.css';
import { Divider ,Group,XInput,Cell,XButton,Tabbar,TabbarItem,XHeader,
   Tab,TabItem,Flow, FlowState, FlowLine,Loading,LoadingPlugin,
   Flexbox,FlexboxItem,Rater ,Toast,Search,Panel,
   VChart, VLine, VArea, VBar, VPie, VPoint, VScale, VAxis, VGuide, VTooltip, VLegend,    //图表
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
Vue.component('rater', Rater);
Vue.component('toast', Toast);
Vue.component('search', Search);

Vue.component('v-chart', VChart)
Vue.component('v-line', VLine)
Vue.component('v-area', VArea)
Vue.component('v-bar', VBar)
Vue.component('v-pie', VPie)
Vue.component('v-point', VPoint)
Vue.component('v-scale', VScale)
Vue.component('v-axis', VAxis)
Vue.component('v-guide', VGuide)
Vue.component('v-tooltip', VTooltip)
Vue.component('v-legend', VLegend)
Vue.component('v-guide', VGuide)


Vue.use(LoadingPlugin)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
