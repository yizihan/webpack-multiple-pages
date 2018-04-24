import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Main from '@/components/home/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/main',
      component: Main
    }
  ]
})
