import { TDeliveryStatus, TSize } from "."
import { TSubscription } from "./subscription"

export type THistoryBonusItem = {
  price: number
  points: number
  title: string
}

export type THistoryProductItem = {
  date: string
  title: string
  size: TSize
  subscription: TSubscription
  price: number
  delivery_status: TDeliveryStatus
}

type THistoryItem = (
  {
    type: 'product', 
    product: THistoryProductItem
  } | {
    type: 'bonus', 
    bonus: THistoryBonusItem
  }
)

export type THistory = {
  title: string
  items: THistoryItem[]
}