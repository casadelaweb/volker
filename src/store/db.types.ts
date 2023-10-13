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
}

/** структура для страницы товара */
export interface iPageProduct extends iPage {
  preview: iImage,
  images: iImage[],
  discount: number,
  parameters: any[],
  recommend: boolean,
}

/** структура для страницы категории */
export interface iCategory extends iPage {
  preview: iImage,
  products: iPageProduct[],
}

export type iCatalog = iCategory[]

export interface iPageOffer extends iPage {
  preview: iImage,
  activity: string,
  date: {
    published: string,
    modified: string,
  }
}

