import { modelBase } from './modelBase'

export interface modelPost extends modelBase {
  description: string,
  body: string,
  image: {
    url: string,
    alt?: string,
  }
}
