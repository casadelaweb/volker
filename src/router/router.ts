import { createRouter, createWebHistory } from 'vue-router'
import { routesMain } from 'src/router/routesMain.ts'
import { routesCatalog } from 'src/router/routesCatalog'
//import { routesLegacy } from 'src/router/routesLegacy.ts'

const router = createRouter({
  routes: [
    ...routesMain,
    ...routesCatalog,
    //...routesLegacy,
  ],
  history: createWebHistory(),
  scrollBehavior() {
    window.scrollTo(0, 0)
  },
  linkActiveClass: '_active',
  linkExactActiveClass: '_exact-active',
  sensitive: false,
  strict: false,
})

export default router
