import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  tag: 'li',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/algorithms',
      name: 'algorithms',
      component: () => import(/* webpackChunkName: "about" */ './views/Algorithms.vue'),
      children: [
        {
          path: 'binary-tree',
          component: () => import(/* webpackChunkName: "about" */ './components/BinaryTree.vue'),
        }
      ]
    },   
  ]
})
