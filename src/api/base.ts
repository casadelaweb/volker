export interface iBase {
  /** Уникальный id */
  id: string | number,
}

export interface iPage extends iBase {
  /** Заголовок страницы */
  title: string,
  /** Краткое описание страницы */
  description: string,
  /** Ссылка на страницу */
  url: string,
  /** Основной контент страницы */
  body?: string,
}

export interface iImage {
  url: string,
  alt?: string,
}

export interface iPagePromo extends iPage {
  image: iImage,
}

export type iPagesPromos = Array<iPagePromo>

export interface iPageCatalog extends iPage {
  image: iImage,
}

export interface iPageCategory extends iPage {
  image: iImage,
}

export type iPagesCategories = Array<iPageCategory>
export type iPagesProducts = Array<iPageProduct>

export interface iParameter {
  title: string,
  value: string | number,
}

/** структура для страницы товара */
export interface iPageProduct extends iPage {
  isNew?: boolean,
  images: iImage[],
  price?: number | string,
  priceOld?: number | string,
  currency?: string,
  parameters: iParameter[],
}

export const PlaceholderProduct: iPageProduct = {
  body: '',
  currency: '',
  description: '',
  id: 0,
  images: [{ url: '', alt: '', }],
  isNew: false,
  parameters: [],
  price: 0,
  priceOld: 0,
  title: '',
  url: ''
}

export const PlaceholderProducts: iPagesProducts = [
  {
    body: '',
    currency: '',
    description: '',
    id: 0,
    images: [{ url: '', alt: '', }],
    isNew: false,
    parameters: [],
    price: 0,
    priceOld: 0,
    title: '',
    url: '',
  },
  {
    body: '',
    currency: '',
    description: '',
    id: 1,
    images: [{ url: '', alt: '', }],
    isNew: false,
    parameters: [],
    price: 0,
    priceOld: 0,
    title: '',
    url: '',
  },
  {
    body: '',
    currency: '',
    description: '',
    id: 2,
    images: [{ url: '', alt: '', }],
    isNew: false,
    parameters: [],
    price: 0,
    priceOld: 0,
    title: '',
    url: '',
  },
  {
    body: '',
    currency: '',
    description: '',
    id: 3,
    images: [{ url: '', alt: '', }],
    isNew: false,
    parameters: [],
    price: 0,
    priceOld: 0,
    title: '',
    url: '',
  },
]

export const PlaceholderCategory: iPageCategory = {
  id: 0,
  url: '',
  title: '',
  description: '',
  image: {
    url: '',
    alt: '',
  }
}
export const PlaceholderCategories: iPagesCategories = [
  {
    id: 0,
    url: '',
    title: '',
    description: '',
    image: {
      url: '',
      alt: '',
    }
  },
  {
    id: 1,
    url: '',
    title: '',
    description: '',
    image: {
      url: '',
      alt: '',
    }
  },
  {
    id: 2,
    url: '',
    title: '',
    description: '',
    image: {
      url: '',
      alt: '',
    }
  },
  {
    id: 3,
    url: '',
    title: '',
    description: '',
    image: {
      url: '',
      alt: '',
    }
  },
]

export const PlaceholderPromo: iPagePromo = {
  id: 0,
  url: '',
  title: '',
  description: '',
  body: '',
  image: {
    url: '',
    alt: '',
  }
}

export const PlaceholderPromos: iPagesPromos = [
  {
    id: 0,
    url: '',
    title: '',
    description: '',
    body: '',
    image: {
      url: '',
      alt: '',
    },
  },
  {
    id: 1,
    url: '',
    title: '',
    description: '',
    body: '',
    image: {
      url: '',
      alt: '',
    },
  },
  {
    id: 2,
    url: '',
    title: '',
    description: '',
    body: '',
    image: {
      url: '',
      alt: '',
    },
  },
  {
    id: 3,
    url: '',
    title: '',
    description: '',
    body: '',
    image: {
      url: '',
      alt: '',
    },
  },
]
