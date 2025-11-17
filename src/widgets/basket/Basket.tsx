'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { setCloseBasket, useAppDispatch, useAppSelector } from '@/views/store'
import { BasketContant } from '../basket-contant/BasketContant'

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
            className="h-screen fixed top-0 right-0 sm:w-[421px] w-full bg-[#000000] z-50 overflow-y-scroll shadow-xl"
          >
            <BasketContant />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
