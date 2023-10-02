import index from 'src/pages/index.vue'
import contacts from 'src/pages/contacts.vue'
import catalog from 'src/pages/catalog.vue'
import catalogDetail from 'src/pages/catalog-detail.vue'
import offers from 'src/pages/offers.vue'
import offer from 'src/pages/offers-detail.vue'
import notFound from 'src/pages/not-found.vue'

export const routes = [
  {
    name: 'Главная страница',
    path: '/',
    component: index,
  },
  {
    name: 'Контакты',
    path: '/contacts/',
    component: contacts,
  },
  {
    name: 'Каталог или страница категории в каталоге',
    path: '/catalog/:category?',
    component: catalog,
    meta: {
      breadcrumbs: [
        {
          name: 'Главная страница',
          to: '/',
        },
        {
          name: 'Каталог',
          to: '/catalog/',
        },
      ],
    },
  },
  {
    name: 'Страница товара',
    path: '/catalog/:category/:id',
    component: catalogDetail,
  },
  {
    name: 'Акции и предложения',
    path: '/offers/',
    component: offers,
  },
  {
    name: 'Акция',
    path: '/offers/:id',
    component: offer,
  },
  {
    name: 'Страница 404',
    path: '/:pathMatch(.*)*',
    component: notFound,
  },
]
