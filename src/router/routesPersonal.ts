import Registration from 'src/views/pages/personal/Registration.vue'
import Login from 'src/views/pages/personal/Login.vue'

export const routesPersonal = [
  {
    name: 'Регистрация',
    path: '/auth/registration/',
    component: Registration
  },
  {
    name: 'Войти в личный кабинет',
    path: '/auth/login/',
    component: Login
  },
]
