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



//构造全局守卫
router.beforeEach((to, from, next) => {
  //alert("全局守卫");
  //next(); //放行：只有登录成功的才放行

  //************************ 让ajax携带cookie证书********************************
  axios.defaults.withCredentials=true;

  //发起ajax到后端路由获取cookie，cookie存在就放行，否则去登录页面
  axios.get("http://127.0.0.1:9090/user/getCookie").then(result=>{
    console.log("验证的结果",result);
    //如果登录成或者是访问的页面时登录页面就放行
    if(result.data.isOk || to.path=="/denglu"){
      next(); //录成功放行
    }
    //否则就跳转到登录页面
    else{
      //console.log("to",to);
      next("/denglu");
    }
  }).catch(err=>{
    console.error("错误了!"+err.message);
  });
});

Vue.config.productionTip = false

 



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
