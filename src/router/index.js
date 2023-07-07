import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Orders from '../views/Orders.vue'
import Catalog from '../views/Catalog.vue'
import Declaration from '../views/Declaration.vue'
import Services from '../views/Services.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/declaration',
      name: 'declaration',
      component: Declaration
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
  ]
})

export default router
