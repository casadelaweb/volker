import { createApp } from 'vue'
import router from 'src/router/router'
import { createPinia } from 'pinia'
import App from 'src/views/App.vue'
import 'src/styles/main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App)
  const store = createPinia()
  app.use(router)
  app.use(store)
  app.mount('#app')
}, {
  passive: true,
  once: true,
})








