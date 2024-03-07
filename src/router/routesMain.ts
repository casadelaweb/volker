import Home from 'src/views/pages/main/Home.vue'
import Contacts from 'src/views/pages/main/Contacts.vue'
import Posts from 'src/views/pages/main/Posts.vue'
import Post from 'src/views/pages/main/Post.vue'
import Promos from 'src/views/pages/catalog/Promos.vue'
import Promo from 'src/views/pages/catalog/Promo.vue'
import PageNotFound from 'src/views/pages/main/PageNotFound.vue'
import TestPage from 'src/views/pages/main/TestPage.vue'

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
  {
    //path: '/404/',
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/test-page/',
    name: 'TestPage',
    component: TestPage,
  },
  // {
  //   path: '/:catchAll(.*)',
  //   redirect: '404'
  // }
]
