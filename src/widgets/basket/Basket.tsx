'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { BasketServicesList } from '@/features/basket-services-list/BasketServicesList'
import { Button } from '@/shared/button/Button'
import { setCloseBasket, useAppDispatch, useAppSelector } from '@/views/store'
import { formatPrice } from '@/utils/libs/formatPrice'
import { useState } from 'react'
import { IAdditionalServicesItem } from '@/shared/basket-services-item/BasketServicesItem'
import { useRouter } from 'next/navigation'

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

export const Basket = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const basketIsOpen = useAppSelector((state) => state.basket.isOpen)
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
    <AnimatePresence>
      {basketIsOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => dispatch(setCloseBasket())}
          />
          <motion.div
            key="basket"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="h-screen fixed top-0 right-0 w-[421px] bg-[#2B2A24] z-50 overflow-y-scroll shadow-xl"
          >
            <div className="relative w-full h-full">
              <div className="p-[24px] roboto">
                <div className="flex items-center justify-between text-secondary mb-[25px]">
                  <h4>Корзина</h4>
                  <Button onClick={() => dispatch(setCloseBasket())} className='roboto-flex'>
                    <p className="underline">Закрыть</p>
                  </Button>
                </div>

                <BasketServicesList 
                  servicesList={servicesList} 
                  setServicesList={setServicesList}
                  handleDeleteItem={handleDeleteItem} 
                />
              </div>
              <div className="mt-[25px] text-[#D9D9D9] fixed bottom-0 right-0 w-[421px] p-[8px_24px_24px] bg-[#2B2A24] z-[100]">
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
