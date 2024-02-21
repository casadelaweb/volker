import { createRouter, createWebHistory } from 'vue-router'
import { routesMain } from 'src/router/routesMain.ts'
import { routesCatalog } from 'src/router/routesCatalog'

const router = createRouter({
  routes: [
    ...routesMain,
    ...routesCatalog,
  ],
  history: createWebHistory(),
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
})

export default router
