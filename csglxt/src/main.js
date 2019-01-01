import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//引入home外部样式;
import "./assets/style/publick.css"
//引入axios;
import axios from "axios";
//引入qs 处理axios 的post参数;
import qs from 'qs';


Vue.config.productionTip = false
//把axios改在vue原型上, vue实例中就可以无限使用了;
Vue.prototype.axios=axios;
//挂在圆形方便后期使用;
Vue.prototype.qs=qs;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
