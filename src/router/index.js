import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LottoMainView',
    component: () => import(/* webpackChunkName: "lottomainview" */ '../views/LottoMainView.vue')
  },
  {
    path: '/rsp',
    name: 'RspMainView',
    component: () => import(/* webpackChunkName: "rspmainview" */ '../views/RspMainView.vue')
  },
  {
    path: '/board',
    name: 'BoardMainView',
    component: () => import(/* webpackChunkName: "boardmainview" */ '../views/BoardMainView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router