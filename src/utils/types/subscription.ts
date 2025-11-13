import { TDay, TDeliveryDate, TDeliveryStatus, TEmotion, TPeriod, TSize, TTime } from "."

export type TSubscription = {
  premium_delivery: boolean
  subscription: null | {
    delivery_date: TDeliveryDate
    period: TPeriod
    day: TDay
    time: TTime
  }
}

export type TProductSubscibeInfo = {
  id: string
  img: string
  title: string
  size: TSize
  emotion: TEmotion
}

export type TMySubscription = {
  id: string
  date: string
  items: TProductSubscibeInfo[]
  delivery_status: TDeliveryStatus
  subscription: TSubscription
  recipient:  {
    fullname?: string
    address?: string
    contact?: string
    method_contact?: string
  }
}