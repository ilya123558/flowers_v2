import { daysList, emotionsList, flowersList, sizesList, deliveryDateList, periodList, timeList, socialList } from "../const/main";

export type TSizes = typeof sizesList
export type TSize = TSizes[number]

export type TEmotions = typeof emotionsList
export type TEmotion = TEmotions[number]

export type TFlowers = typeof flowersList
export type TFlower = TFlowers[number]

export type TDeliveryDates = typeof deliveryDateList
export type TDeliveryDate = TDeliveryDates[number]

export type TPeriods = typeof periodList
export type TPeriod = TPeriods[number]

export type TDays = typeof daysList
export type TDay = TDays[number]

export type TTimes = typeof timeList
export type TTime = TTimes[number]

export type TSocials = typeof socialList
export type TSocial = TSocials[number]

export type TDeliveryStatus = {
  current: number
  tital: number
}

  