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
  /** Основной контент страницу */
  body: string,
}

export interface iImage {
  url: string,
  alt?: string,
}

export interface iPagePromo extends iPage {
  image: iImage
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

