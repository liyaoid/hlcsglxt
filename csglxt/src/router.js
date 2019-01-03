import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DengLu from"./views/DengLu.vue"
import UserAdd  from "../src/views/UserAdd.vue"
import  UserList from "../src/views/UserList.vue"
import Modify from "../src/views/Modify.vue"
import GoodsAdd from "../src/views/GoodsAdd.vue"
import GoodsList from "../src/views/GoodsList.vue"


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: DengLu
    },
    {
      path: '/useradd',
      name: 'useradd',
      component: UserAdd
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: UserList
    },
    {
      path: '/modify',
      name: 'modify',
      component: Modify
    },
    {
      path: '/goodsadd',
      name: 'goodsadd',
      component: GoodsAdd
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      component: GoodsList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
