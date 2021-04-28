import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ColumnLayout from '../components/containers/column-layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test-view',
    name: 'TestViewRoot',
    component: () => import('../views/TestViewHome.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/TestView.vue'),
        name: 'TestView',
      }
    ],
  },
  {
    path: '/containers',
    name: 'containers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Containers.vue'),
    component: () => import('../views/ContainersHome.vue'),
    children: [
      {
        path: '/containers/column-layout',
        component: ColumnLayout,
        name: 'containers-column-layout',
      }
    ],
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
