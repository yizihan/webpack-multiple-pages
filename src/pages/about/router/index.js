import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/about/Home'
import Main from '@/components/about/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vue',
      name: 'vue',
      component: Main
    },
    {
      path: '/webpack',
      name: 'webpack',
      component: Main
    }
  ]
})
