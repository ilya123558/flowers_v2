'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { BasketServicesList } from '@/features/basket-services-list/BasketServicesList'
import { Button } from '@/shared/button/Button'
import { setCloseBasket, useAppDispatch, useAppSelector } from '@/views/store'
import { formatPrice } from '@/utils/libs/formatPrice'
import { useState } from 'react'
import { IAdditionalServicesItem } from '@/shared/basket-services-item/BasketServicesItem'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

const initialServices: IAdditionalServicesItem[] = [
  {
    items: [{ id: 'item-1', title: 'Солнечный день', size: { title: 'XS', price: 2390 } }],
    premium_delivery: true,
    subscribe: { term: "3 мес", frequency: "Каждую неделю", price: 50575 },
  },
  {
    items: [{ id: 'item-2', title: 'Зимний вечер', size: { title: 'M', price: 2590 } }],
    premium_delivery: false,
    subscribe: { term: "6 мес", frequency: "Каждые 2 недели", price: 80575 },
  },
  {
    items: [{ id: 'item-3', title: 'Тёплое утро', size: { title: 'L', price: 3190 } }],
    premium_delivery: false,
    subscribe: { term: "1 мес", frequency: "Каждую неделю", price: 20575 },
  },
]

interface IProps {
  isOrder?: boolean
}

export const BasketContant = ({ isOrder }: IProps) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [servicesList, setServicesList] = useState<IAdditionalServicesItem[]>(initialServices)

  const handleDeleteItem = (id: string) => {
    const result = servicesList.map(service => {
      const newList = service.items.filter(item => item.id !== id)
      
      if(!newList || newList.length === 0) return []

      return {...service, items: newList}
    })
    setServicesList(result.flat())
  }

  const handleClick = () => {
    if(servicesList.length === 0) {
      router.push('/catalog')
      dispatch(setCloseBasket())
    }
  }

  return (
    <div className="relative w-full h-full">
      <div className={clsx("p-[24px] roboto", isOrder && "!p-0")}>
        <div className="flex items-center justify-between text-secondary mb-[25px]">
          <h4>Корзина</h4>
          {!isOrder && (
            <Button onClick={() => dispatch(setCloseBasket())} className='roboto-flex'>
              <p className="underline">Закрыть</p>
            </Button>
          )}
        </div>

        <BasketServicesList
          isOrder={isOrder} 
          servicesList={servicesList} 
          setServicesList={setServicesList}
          handleDeleteItem={handleDeleteItem} 
        />
      </div>
      {!isOrder && (
        <div className="mt-[25px] text-[#D9D9D9] fixed bottom-0 right-0 sm:w-[421px] w-full p-[8px_24px_24px] bg-[#2B2A24] z-[100]">
          {servicesList.length !== 0 && (
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-medium">Итого за весь заказ</p>
              <p className="text-[22px]">{formatPrice(61655)} ₽</p>
            </div>
          )}

          <Button
            onClick={handleClick}
            className="mt-[12px] w-full h-[71px] bg-yellow active:scale-95 rounded-[11px]"
          >
            <p className="text-[#202020] text-[20px] font-bold">
              {servicesList.length === 0 ? "Перейти в каталог" : "Оплатить 61 655 ₽"}
            </p>
          </Button>
        </div>
      )}
    </div>
  )
}
