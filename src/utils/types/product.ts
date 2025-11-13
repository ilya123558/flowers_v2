import { TEmotion, TFlower, TSize } from "."

export type TProduct = {
  imgList: string[]
  title: string
  emotion: TEmotion[]
  flowers_included: TFlower[]
  sizes: TSize[]
  price: number
  points: number
  favorites_count: number
  review_count: number
}