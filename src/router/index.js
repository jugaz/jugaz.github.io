import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "Home" */'@/views/HomeView.vue')
    },
    {
      path: '/tendencias',
      name: 'tendencias',
      component: () => import( /* webpackChunkName: "Home" */'@/views/TendenciasView.vue')
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ]
})

export default router
