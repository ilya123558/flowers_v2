import { THistory } from "../types/history";

export const historyList: THistory[] = [
  {
    title: 'Октябрь 2025',
    items: [
      {
        type: 'product',
        product: {
          date: '12 октября 2025, 14:11',
          title: 'Осенний воздух',
          size: "L",
          subscription: {
            premium_delivery: true,
            subscription: {
              delivery_date: 'Каждую неделю',
              period: "1 месяц",
              day: 'Понедельник',
              time: '10: 00 - 11: 00',
            }
          },
          delivery_status: {
            current: 2,
            tital: 12
          },
          price: 102000
        }
      },
      {
        type: 'product',
        product: {
          date: '12 октября 2025, 14:11',
          title: 'Осенний воздух',
          size: "XS",
          subscription: {
            premium_delivery: true,
            subscription: {
              delivery_date: 'Каждую неделю',
              period: "1 месяц",
              day: 'Понедельник',
              time: '10: 00 - 11: 00',
            }
          },
          delivery_status: {
            current: 2,
            tital: 12
          },
          price: 57365
        }
      },
      {
        type: 'bonus',
        bonus: {
          points: 10000,
          price: 1000,
          title: 'Бонус за покупку'
        }
      },
      {
        type: 'product',
        product: {
          date: '12 октября 2025, 14:11',
          title: 'Осенний воздух',
          size: "XS",
          subscription: {
            premium_delivery: true,
            subscription: {
              delivery_date: 'Каждую неделю',
              period: "1 месяц",
              day: 'Понедельник',
              time: '10: 00 - 11: 00',
            }
          },
          delivery_status: {
            current: 2,
            tital: 12
          },
          price: 57365
        }
      },
      {
        type: 'bonus',
        bonus: {
          points: 10000,
          price: 1000,
          title: 'Бонус за покупку'
        }
      },
      {
        type: 'bonus',
        bonus: {
          points: 10000,
          price: 1000,
          title: 'Бонус за покупку'
        }
      },
    ]
  }
]