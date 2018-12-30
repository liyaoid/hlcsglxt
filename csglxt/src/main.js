import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//引入home外部样式;
import "./assets/style/publick.css"

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
