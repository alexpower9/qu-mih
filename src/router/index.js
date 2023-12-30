import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoubleInsideView from '../views/DoubleInsideView.vue'
import DoriaView from '../views/DoriaView.vue'
import CashSotieView from '../views/CashSotieView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/double-inside',
    name: 'double-inside',
    component: DoubleInsideView
  },
  {
    path: '/doria',
    name: 'doria',
    component: DoriaView
  },
  {
    path: '/cash-sotie',
    name: 'cash-sotie',
    component: CashSotieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
