import 'src/styles/main.scss'
import { createApp } from 'vue'
import router from 'src/router/router'
import App from 'src/views/App.vue'
// import { Details } from 'src/modules/details/details.ts'
// import { modalsGlobal } from 'src/scripts/modalsGlobal.ts'

document.addEventListener('DOMContentLoaded', () => {
  // const details = new Details()
  // details.init()
  //
  // modalsGlobal.init()
  
  const app = createApp(App)
  app.use(router)
//app.use(store)
  app.mount('#app')
}, { passive: true, once: true, })








