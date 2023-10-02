import 'restyle.css'
import 'restyle.css/dist/checkboxes.css'
import 'restyle.css/dist/scrollbar.css'
import 'src/styles/fonts.scss'
import 'src/styles/iconfont.scss'
import Modals from 'src/scripts/modals'

import { createApp } from 'vue'
import App from 'src/components/app.vue'
import router from 'src/router/router'
import store from 'src/store/store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

import 'src/styles/main.scss'





