import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import { routes } from 'src/router/routes.js'

const baseUrl = import.meta.env.BASE_URL
const history = import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl)

const router = createRouter({
  routes: routes,
  history: history,
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
})

export default router
