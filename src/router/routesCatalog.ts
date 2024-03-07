import Catalog from 'src/views/pages/catalog/Catalog.vue'
import Category from 'src/views/pages/catalog/Category.vue'
import Product from 'src/views/pages/catalog/Product.vue'

export const routesCatalog = [
  {
    name: 'Каталог',
    path: '/catalog/',
    component: Catalog
  },
  {
    name: 'Страница категории в каталоге',
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
]
