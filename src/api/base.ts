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

export interface iPageCatalog extends iPage {
  image: iImage,
}

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
