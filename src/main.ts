import 'src/styles/main.scss'
import { createApp } from 'vue'
import router from 'src/router/router'
import App from 'src/views/App.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}, { passive: true, once: true, })








