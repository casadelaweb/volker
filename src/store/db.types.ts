export interface iImage {
  url: string,
  alt?: string,
}

/** обязательные поля для всех страниц */
export interface iPage {
  id: string,
  title: string,
  description: {
    short: string,
    full: string,
  },
  url: string,
  keywords: string[],
  parent: iPage,
}

interface iProductParameter {
  key: string,
  value: string,
}

/** структура для страницы товара */
export interface iPageProduct extends iPage {
  preview: iImage,
  images: iImage[],
  discount: false | number,
  parameters: iProductParameter[],
  recommend: boolean,
  price: number | string,
  currency: string,
  category: {
    id: string,
    title: string,
  }
}

/** структура для страницы категории */
export interface iCategory extends iPage {
  preview: iImage,
  products: iPageProduct[],
}

export type iCatalog = iCategory[]

export interface iPagePromo extends iPage {
  preview: iImage,
  activity: string,
  date: {
    published: string,
    modified: string,
  }
}

