import Vue from "vue";
import Router from "vue-router"
import Home from '@/views/Home.vue'
import Login from '@/views/Login/Login.vue'
Vue.use(Router)
const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]
export default new Router({
  mode: 'history',
  routes
})
