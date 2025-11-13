import { TMySubscription } from "../types/subscription";

export const myActiveSubscriptionList: TMySubscription[] = [
  {
    id: '1',
    date: '23 августа 2025, 09:57',
    delivery_status: {
      current: 2,
      tital: 12
    },
    items: [
      {
        id: 'product-1',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
      {
        id: 'product-2',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
    ],
    subscription: {
      premium_delivery: true,
      subscription: {
        delivery_date: 'Каждую неделю',
        period: "1 месяц",
        day: 'Понедельник',
        time: '10: 00 - 11: 00',
      }
    },
    recipient: {
      fullname: 'Миронов Мирон Олегович',
      address: 'Южно-Сахалинск, ул. Ленина, 45, кв. 12',
    }
  },

  {
    id: '2',
    date: '23 августа 2025, 09:57',
    delivery_status: {
      current: 2,
      tital: 12
    },
    items: [
      {
        id: 'product-3',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
      {
        id: 'product-4',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
    ],
    subscription: {
      premium_delivery: true,
      subscription: {
        delivery_date: 'Каждую неделю',
        period: "1 месяц",
        day: 'Понедельник',
        time: '10: 00 - 11: 00',
      }
    },
    recipient: {
      fullname: 'Миронов Мирон Олегович',
      address: 'Южно-Сахалинск, ул. Ленина, 45, кв. 12',
    }
  }
]

export const myUnactiveSubscriptionList: TMySubscription[] = [
  {
    id: '3',
    date: '23 августа 2025, 09:57',
    delivery_status: {
      current: 2,
      tital: 12
    },
    items: [
      {
        id: 'product-5',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
      {
        id: 'product-6',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
    ],
    subscription: {
      premium_delivery: true,
      subscription: {
        delivery_date: 'Каждую неделю',
        period: "1 месяц",
        day: 'Понедельник',
        time: '10: 00 - 11: 00',
      }
    },
    recipient: {
      fullname: 'Миронов Мирон Олегович',
      address: 'Южно-Сахалинск, ул. Ленина, 45, кв. 12',
    }
  },

  {
    id: '4',
    date: '23 августа 2025, 09:57',
    delivery_status: {
      current: 2,
      tital: 12
    },
    items: [
      {
        id: 'product-7',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
      {
        id: 'product-8',
        img: '/images/product/product-main.png',
        title: 'Солнечный день',
        size: 'XS',
        emotion: 'Люблю',
      },
    ],
    subscription: {
      premium_delivery: true,
      subscription: {
        delivery_date: 'Каждую неделю',
        period: "1 месяц",
        day: 'Понедельник',
        time: '10: 00 - 11: 00',
      }
    },
    recipient: {
      fullname: 'Миронов Мирон Олегович',
      address: 'Южно-Сахалинск, ул. Ленина, 45, кв. 12',
    }
  }
]