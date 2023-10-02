import 'src/styles/main.scss'
import { createApp } from 'vue'
import App from 'src/components/app.vue'
import router from 'src/router/router'
import store from 'src/store/store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')







