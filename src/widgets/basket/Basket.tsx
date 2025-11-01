'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { BasketServicesList } from '@/features/basket-services-list/BasketServicesList'
import { Button } from '@/shared/button/Button'
import { setCloseBasket, useAppDispatch, useAppSelector } from '@/views/store'
import { formatPrice } from '@/utils/libs/formatPrice'

export const Basket = () => {
  const dispatch = useAppDispatch()
  const basketIsOpen = useAppSelector((state) => state.basket.isOpen)

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
            <div className="p-[24px] roboto">
              <div className="flex items-center justify-between text-secondary mb-[25px]">
                <h4>Корзина</h4>
                <Button onClick={() => dispatch(setCloseBasket())} className='roboto-flex'>
                  <p className="underline">Закрыть</p>
                </Button>
              </div>

              <BasketServicesList />

              <div className="mt-[25px] text-[#D9D9D9]">
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-medium">Итого за весь заказ</p>
                  <p className="text-[14px] font-bold">{formatPrice(61655)} ₽</p>
                </div>

                <Button
                  onClick={() => {}}
                  className="mt-[12px] w-full h-[71px] bg-yellow active:scale-95 rounded-[11px]"
                >
                  <p className="text-[#202020] text-[20px] font-bold">
                    Оплатить 61 655 ₽
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
