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
export interface iProduct extends iPage {
  images: iImage[],
  parameters: any[],
  recommend: boolean,
  discount: number,
}

/** структура для страницы категории */
export interface iCategory extends iPage {
  products: iProduct[]
}

export type iCatalog = iCategory[]

