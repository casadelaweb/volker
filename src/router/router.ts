import { createRouter, createWebHistory } from 'vue-router'
import { routesMain } from 'src/router/routesMain.ts'
import { routesCatalog } from 'src/router/routesCatalog'
import { routesPersonal } from 'src/router/routesPersonal.ts'
//import { routesLegacy } from 'src/router/routesLegacy.ts'

const router = createRouter({
  routes: [
    ...routesMain,
    ...routesCatalog,
    ...routesPersonal,
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
