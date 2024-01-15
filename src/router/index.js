import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoubleInsideView from '../views/DoubleInsideView.vue'
import DoriaView from '../views/DoriaView.vue'
import CashSotieView from '../views/CashSotieView.vue'
import PrincetonView from '../views/PrincetonView.vue'
import TwentyOneView from '../views/TwentyOneView.vue'
import FloodStrandView from '../views/FloodStrandView.vue'
import BoueyView from '../views/BoueyView.vue'
import NiagaraView from '../views/NiagaraView.vue'
import PittView from '../views/PittView.vue'
import ZamboniView from '../views/ZamboniView.vue'
import TestingLocationView from '../views/TestingLocationView.vue'

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
  },
  {
    path: '/princeton',
    name: 'princeton',
    component: PrincetonView
  },
  {
    path: '/twenty-one',
    name: 'twenty-one',
    component: TwentyOneView
  },
  {
    path: '/flood-strand',
    name: 'flood-strand',
    component: FloodStrandView
  },
  {
    path: '/bouey',
    name: 'bouey',
    component: BoueyView
  },
  {
    path: '/niagara',
    name: 'niagara',
    component: NiagaraView
  },
  {
    path: '/pitt',
    name: 'pitt',
    component: PittView
  },
  {
    path: '/zamboni',
    name: 'zamboni',
    component: ZamboniView
  },
  {
    path: '/testing-location',
    name: 'testing-location',
    component: TestingLocationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
