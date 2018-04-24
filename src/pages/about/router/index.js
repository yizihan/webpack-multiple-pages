import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home'
import Page1 from '@/modules/page1/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/page1',
      name: 'page1',
      component: Page1
    }
  ]
})
