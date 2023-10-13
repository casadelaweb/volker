import { iPageOffer } from 'src/store/db.types.ts'

export const headerQuickLinks = [
  {
    id: 'offers',
    url: '/offers/',
    title: 'Акции и предложения',
  },
  {
    id: 'delivery',
    url: '/delivery/',
    title: 'Доставка и оплата',
  },
  {
    id: 'contacts',
    url: '/contacts/',
    title: 'Контакты',
  },
]

export const reviews = [
  {
    body: 'Хорошая плитка, купил себе на дачу',
    rating: 4.33,
    author: 'Том Круз',
  },
  {
    body: 'Плохая плитка, лучше бы купил плащ',
    rating: 1.5,
    author: 'Бэтмен',
  },
  {
    body: 'Очень удобный расчёт - приехал, оплатил картой, забрал поребрики.',
    rating: 4.7,
    author: 'Александр Х.',
  },
  {
    body: 'Отличная плитка, очень высокое качество. ',
    rating: 3.66,
    author: 'Аноним',
  },
  {
    body: 'Супер качество',
    rating: 4.17,
    author: 'Михаил Андреевич',
  },
]

export const offers: iPageOffer[] = [
  {
    id: 'offer-15123',
    url: '/offers/offer-15123',
    title: 'Приведи друга',
    description: {
      short: 'Обязательное краткое описание статьи для Яндекса длиной от 50 до 150 символов.',
      full: 'Обязательное подробное описание статьи для Яндекса длиной до 512 символов.'
    },
    keywords: ['акция'],
    activity: 'все лето',
    preview: {
      url: '/vite.svg',
      alt: 'img',
    },
    date: {
      published: '2019-04-22',
      modified: '2019-04-22',
    }
  },
  {
    id: 'offer-4325425',
    url: '/offers/offer-4325425',
    title: 'Предложение или акция с достаточно длинным названием',
    description: {
      short: 'Обязательное краткое описание статьи для Яндекса длиной от 50 до 150 символов.',
      full: 'Обязательное подробное описание статьи для Яндекса длиной до 512 символов.'
    },
    keywords: ['акция'],
    activity: '',
    preview: {
      url: '/vite.svg',
      alt: 'img',
    },
    date: {
      published: '2019-04-22',
      modified: '2019-04-22',
    }
  },
  {
    id: 'offer-12345',
    url: '/offers/offer-12345',
    title: 'Приведи друга',
    description: {
      short: 'Обязательное краткое описание статьи для Яндекса длиной от 50 до 150 символов.',
      full: 'Обязательное подробное описание статьи для Яндекса длиной до 512 символов.'
    },
    keywords: ['акция'],
    activity: 'все лето',
    preview: {
      url: '/vite.svg',
      alt: 'img',
    },
    date: {
      published: '2019-04-22',
      modified: '2019-04-22',
    }
  },
  {
    id: 'offer-1234',
    url: '/offers/offer-1234',
    title: 'Приведи друга',
    description: {
      short: 'Обязательное краткое описание статьи для Яндекса длиной от 50 до 150 символов.',
      full: 'Обязательное подробное описание статьи для Яндекса длиной до 512 символов.'
    },
    keywords: ['акция'],
    activity: 'все лето',
    preview: {
      url: '/vite.svg',
      alt: 'img',
    },
    date: {
      published: '2019-04-22',
      modified: '2019-04-22',
    }
  },
]
