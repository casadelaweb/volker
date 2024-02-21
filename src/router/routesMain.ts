import Home from 'src/views/pages/Home.vue'
import Contacts from 'src/views/pages/Contacts.vue'
import Posts from 'src/views/pages/Posts.vue'
import Post from 'src/views/pages/Post.vue'
import Promos from 'src/views/pages/Promos.vue'
import Promo from 'src/views/pages/Promo.vue'

export const routesMain = [
  {
    name: 'Главная страница',
    path: '/',
    component: Home,
  },
  {
    name: 'Контакты',
    path: '/contacts/',
    component: Contacts,
  },
  {
    name: 'Акции',
    path: '/promos/',
    component: Promos,
  },
  {
    name: 'Какая-то акция',
    path: '/promo/:id',
    component: Promo,
  },
  {
    name: 'Посты',
    path: '/posts/',
    components: Posts,
  },
  {
    name: 'Какой-то пост',
    path: '/post/:id',
    component: Post,
  },
  {
    name: 'Custom Shop',
    path: '/custom/',
    component: Post,
  },
  {
    name: 'Доставка',
    path: '/shipping/',
    component: Post,
  },
  {
    name: 'О компании',
    path: '/about/',
    component: Post,
  },
  {
    name: 'Политика конфиденциальности',
    path: '/privacy-policy/',
    component: Post,
  },
  {
    name: 'Пользовательское соглашение',
    path: '/user-agreement/',
    component: Post,
  },
]
