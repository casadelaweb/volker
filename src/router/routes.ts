import Home from 'src/views/pages/Home.vue'
import Catalog from 'src/views/pages/Catalog.vue'
import Category from 'src/views/pages/Category.vue'
import Product from 'src/views/pages/Product.vue'
import Text from 'src/views/pages/Text.vue'

export const routes = [
  {
    name: 'Главная страница',
    path: '/',
    component: Home,
  },
  {
    name: 'Каталог',
    path: '/catalog/',
    component: Catalog
  },
  {
    name: 'Каталог или страница категории в каталоге',
    path: '/catalog/:category?',
    component: Category,
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
    path: '/product/:id',
    component: Product,
  },
  {
    name: 'Custom Shop',
    path: '/custom/',
    component: Text,
  },
  {
    name: 'Доставка',
    path: '/shipping/',
    component: Text,
  },
  {
    name: 'О компании',
    path: '/about/',
    component: Text,
  },
  {
    name: 'Политика конфиденциальности',
    path: '/privacy-policy/',
    component: Text,
  },
  {
    name: 'Пользовательское соглашение',
    path: '/user-agreement/',
    component: Text,
  },
]
