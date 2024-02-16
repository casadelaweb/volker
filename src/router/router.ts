import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'src/router/routes.js'

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
})

export default router
