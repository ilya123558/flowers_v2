'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '@/views/store'
import { setOpenBasket } from '@/views/store/basket.slice'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { SmShow } from '@/shared/wrappers/SizeShow'

export const MobileMenu = () => {
  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const basketCount = useAppSelector(state => state.basket.count)
  const prevBasketCount = useRef(basketCount)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (basketCount > prevBasketCount.current) {
      setShouldAnimate(true)
    } else {
      setShouldAnimate(false)
    }
    prevBasketCount.current = basketCount
  }, [basketCount])

  const menuItems = [
    {
      title: 'Букеты',
      link: '/product-type',
      icon: (isActive: boolean) => (
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3134 5.54755C13.3134 4.88922 13.5086 4.24568 13.8743 3.6983C14.2401 3.15093 14.7599 2.7243 15.3681 2.47237C15.9763 2.22044 16.6456 2.15452 17.2913 2.28295C17.9369 2.41139 18.53 2.7284 18.9955 3.19391C19.4611 3.65941 19.7781 4.2525 19.9065 4.89818C20.0349 5.54385 19.969 6.21312 19.7171 6.82133C19.4652 7.42954 19.0385 7.94939 18.4911 8.31514C17.9438 8.68088 17.3002 8.8761 16.6419 8.8761M13.3134 5.54755C13.3134 4.88922 13.1181 4.24568 12.7524 3.6983C12.3866 3.15093 11.8668 2.7243 11.2586 2.47237C10.6504 2.22044 9.98111 2.15452 9.33543 2.28295C8.68976 2.41139 8.09667 2.7284 7.63116 3.19391C7.16566 3.65941 6.84864 4.2525 6.72021 4.89818C6.59178 5.54385 6.65769 6.21312 6.90962 6.82133C7.16155 7.42954 7.58818 7.94939 8.13556 8.31514C8.68294 8.68088 9.32648 8.8761 9.9848 8.8761M13.3134 5.54755V6.65706M16.6419 8.8761C17.3002 8.8761 17.9438 9.07131 18.4911 9.43706C19.0385 9.80281 19.4652 10.3227 19.7171 10.9309C19.969 11.5391 20.0349 12.2083 19.9065 12.854C19.7781 13.4997 19.4611 14.0928 18.9955 14.5583C18.53 15.0238 17.9369 15.3408 17.2913 15.4692C16.6456 15.5977 15.9763 15.5318 15.3681 15.2798C14.7599 15.0279 14.2401 14.6013 13.8743 14.0539C13.5086 13.5065 13.3134 12.863 13.3134 12.2046M16.6419 8.8761H15.5324M9.9848 8.8761C9.32648 8.8761 8.68294 9.07131 8.13556 9.43706C7.58818 9.80281 7.16155 10.3227 6.90962 10.9309C6.65769 11.5391 6.59178 12.2083 6.72021 12.854C6.84864 13.4997 7.16566 14.0928 7.63116 14.5583C8.09667 15.0238 8.68976 15.3408 9.33543 15.4692C9.98111 15.5977 10.6504 15.5318 11.2586 15.2798C11.8668 15.0279 12.3866 14.6013 12.7524 14.0539C13.1181 13.5065 13.3134 12.863 13.3134 12.2046M9.9848 8.8761H11.0943M13.3134 12.2046V11.0951" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="2.77379" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3167 11.0952C14.5422 11.0952 15.5357 10.1017 15.5357 8.87614C15.5357 7.6506 14.5422 6.6571 13.3167 6.6571C12.0912 6.6571 11.0977 7.6506 11.0977 8.87614C11.0977 10.1017 12.0912 11.0952 13.3167 11.0952Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="2.77379" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3125 11.0951V24.4093" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="2.77379" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3125 24.4094C17.9725 24.4094 21.0791 22.5598 21.0791 18.8618C16.4191 18.8618 13.3125 20.7114 13.3125 24.4094Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="2.77379" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3135 24.4094C8.65352 24.4094 5.54688 22.5598 5.54688 18.8618C10.2068 18.8618 13.3135 20.7114 13.3135 24.4094Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="2.77379" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Каталог',
      link: '/catalog',
      icon: (isActive: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.9797 2.99573H3.98685C3.43536 2.99573 2.98828 3.4428 2.98828 3.9943V8.98715C2.98828 9.53864 3.43536 9.98572 3.98685 9.98572H8.9797C9.53119 9.98572 9.97827 9.53864 9.97827 8.98715V3.9943C9.97827 3.4428 9.53119 2.99573 8.9797 2.99573Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="1.99714" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.968 2.99573H14.9751C14.4236 2.99573 13.9766 3.4428 13.9766 3.9943V8.98715C13.9766 9.53864 14.4236 9.98572 14.9751 9.98572H19.968C20.5195 9.98572 20.9666 9.53864 20.9666 8.98715V3.9943C20.9666 3.4428 20.5195 2.99573 19.968 2.99573Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="1.99714" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.968 13.98H14.9751C14.4236 13.98 13.9766 14.4271 13.9766 14.9786V19.9714C13.9766 20.5229 14.4236 20.97 14.9751 20.97H19.968C20.5195 20.97 20.9666 20.5229 20.9666 19.9714V14.9786C20.9666 14.4271 20.5195 13.98 19.968 13.98Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="1.99714" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.9797 13.98H3.98685C3.43536 13.98 2.98828 14.4271 2.98828 14.9786V19.9714C2.98828 20.5229 3.43536 20.97 3.98685 20.97H8.9797C9.53119 20.97 9.97827 20.5229 9.97827 19.9714V14.9786C9.97827 14.4271 9.53119 13.98 8.9797 13.98Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="1.99714" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Корзина',
      link: null,
      onClick: () => dispatch(setOpenBasket()),
      icon: (isActive: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.7512 10.5004V6.00037C15.7512 5.0058 15.3561 4.05198 14.6529 3.34872C13.9496 2.64545 12.9958 2.25037 12.0012 2.25037C11.0066 2.25037 10.0528 2.64545 9.34956 3.34872C8.64629 4.05198 8.25121 5.0058 8.25121 6.00037V10.5004M19.6072 8.50737L20.8702 20.5074C20.9402 21.1724 20.4202 21.7504 19.7512 21.7504H4.25121C4.09341 21.7505 3.93735 21.7175 3.79315 21.6534C3.64896 21.5894 3.51985 21.4957 3.41423 21.3784C3.3086 21.2612 3.22882 21.1231 3.18006 20.973C3.1313 20.8229 3.11466 20.6643 3.13121 20.5074L4.39521 8.50737C4.42436 8.23093 4.55483 7.97507 4.76146 7.78912C4.96808 7.60318 5.23623 7.50032 5.51421 7.50037H18.4882C19.0642 7.50037 19.5472 7.93537 19.6072 8.50737ZM8.62621 10.5004C8.62621 10.5998 8.5867 10.6952 8.51637 10.7655C8.44605 10.8359 8.35066 10.8754 8.25121 10.8754C8.15175 10.8754 8.05637 10.8359 7.98604 10.7655C7.91572 10.6952 7.87621 10.5998 7.87621 10.5004C7.87621 10.4009 7.91572 10.3055 7.98604 10.2352C8.05637 10.1649 8.15175 10.1254 8.25121 10.1254C8.35066 10.1254 8.44605 10.1649 8.51637 10.2352C8.5867 10.3055 8.62621 10.4009 8.62621 10.5004ZM16.1262 10.5004C16.1262 10.5998 16.0867 10.6952 16.0164 10.7655C15.946 10.8359 15.8507 10.8754 15.7512 10.8754C15.6518 10.8754 15.5564 10.8359 15.486 10.7655C15.4157 10.6952 15.3762 10.5998 15.3762 10.5004C15.3762 10.4009 15.4157 10.3055 15.486 10.2352C15.5564 10.1649 15.6518 10.1254 15.7512 10.1254C15.8507 10.1254 15.946 10.1649 16.0164 10.2352C16.0867 10.3055 16.1262 10.4009 16.1262 10.5004Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Мой кабинет',
      link: '/profile',
      icon: (isActive: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.9683 20.9699V18.9728C18.9683 17.9134 18.5474 16.8975 17.7984 16.1484C17.0493 15.3993 16.0333 14.9785 14.974 14.9785H8.98256C7.92321 14.9785 6.90725 15.3993 6.15818 16.1484C5.40911 16.8975 4.98828 17.9134 4.98828 18.9728V20.9699" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="1.99714" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.9747 10.9843C14.1807 10.9843 15.969 9.19599 15.969 6.99001C15.969 4.78403 14.1807 2.99573 11.9747 2.99573C9.76877 2.99573 7.98047 4.78403 7.98047 6.99001C7.98047 9.19599 9.76877 10.9843 11.9747 10.9843Z" stroke={isActive ? 'white' : '#9B9B9B'} strokeWidth="1.99714" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <SmShow>
      <nav className="lg:hidden fixed bottom-[10px] left-0 right-0  z-30 px-[12px]">
        <div 
          style={{background: 'linear-gradient(180deg, #2E2E2E 0%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.2) 100%)'}} 
          className='border-[1px] border-[#3E3E3E] rounded-[18px] overflow-hidden backdrop-blur-[5px] h-full px-[2px]'
        >
          <div className="flex justify-between items-center h-[78px]">
            {menuItems.map((item, index) => {
              const isActive = item.link ? (item.link === '/' ? pathname === '/' : pathname.startsWith(item.link)) : false

              const content = (
                <>
                  {item.title === 'Корзина' ? (
                    <div className={"relative w-[24px] h-[24px] flex items-center justify-center"}>
                      {/* Эффект падающего товара */}
                      {shouldAnimate && (
                        <motion.div
                          key={`drop-${basketCount}`}
                          initial={{ y: -40, opacity: 1, scale: 0.5 }}
                          animate={{
                            y: 0,
                            opacity: 0,
                            scale: 0.3
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.34, 1.56, 0.64, 1]
                          }}
                          className="absolute top-0 left-1/2 -translate-x-1/2"
                        >
                          <div className="w-[8px] h-[8px] rounded-full bg-[#EDBF81]" />
                        </motion.div>
                      )}

                      {/* Пульсирующее кольцо */}
                      {shouldAnimate && (
                        <motion.div
                          key={`ring-${basketCount}`}
                          initial={{ scale: 0.8, opacity: 0.8 }}
                          animate={{
                            scale: [0.8, 1.5, 2],
                            opacity: [0.8, 0.4, 0]
                          }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut"
                          }}
                          className="absolute inset-0 rounded-full border-2 border-[#EDBF81]"
                        />
                      )}

                      {/* Иконка корзины с анимацией */}
                      <motion.div
                        key={`basket-${basketCount}`}
                        initial={{ scale: 1 }}
                        animate={shouldAnimate ? {
                          scale: [1, 0.9, 1.1, 1],
                          y: [0, 2, -2, 0]
                        } : {}}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          times: [0, 0.3, 0.6, 1]
                        }}
                        className="relative z-10"
                      >
                        <motion.div
                          key={`color-${basketCount}`}
                          initial={{ filter: 'brightness(1)' }}
                          animate={shouldAnimate ? {
                            filter: [
                              'brightness(1) drop-shadow(0 0 0px rgba(237, 191, 129, 0))',
                              'brightness(1.5) drop-shadow(0 0 8px rgba(237, 191, 129, 0.8))',
                              'brightness(1.5) drop-shadow(0 0 8px rgba(237, 191, 129, 0.8))',
                              'brightness(1) drop-shadow(0 0 0px rgba(237, 191, 129, 0))'
                            ]
                          } : {}}
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.7, 1]
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                              key={`path-${basketCount}`}
                              d="M15.7512 10.5004V6.00037C15.7512 5.0058 15.3561 4.05198 14.6529 3.34872C13.9496 2.64545 12.9958 2.25037 12.0012 2.25037C11.0066 2.25037 10.0528 2.64545 9.34956 3.34872C8.64629 4.05198 8.25121 5.0058 8.25121 6.00037V10.5004M19.6072 8.50737L20.8702 20.5074C20.9402 21.1724 20.4202 21.7504 19.7512 21.7504H4.25121C4.09341 21.7505 3.93735 21.7175 3.79315 21.6534C3.64896 21.5894 3.51985 21.4957 3.41423 21.3784C3.3086 21.2612 3.22882 21.1231 3.18006 20.973C3.1313 20.8229 3.11466 20.6643 3.13121 20.5074L4.39521 8.50737C4.42436 8.23093 4.55483 7.97507 4.76146 7.78912C4.96808 7.60318 5.23623 7.50032 5.51421 7.50037H18.4882C19.0642 7.50037 19.5472 7.93537 19.6072 8.50737ZM8.62621 10.5004C8.62621 10.5998 8.5867 10.6952 8.51637 10.7655C8.44605 10.8359 8.35066 10.8754 8.25121 10.8754C8.15175 10.8754 8.05637 10.8359 7.98604 10.7655C7.91572 10.6952 7.87621 10.5998 7.87621 10.5004C7.87621 10.4009 7.91572 10.3055 7.98604 10.2352C8.05637 10.1649 8.15175 10.1254 8.25121 10.1254C8.35066 10.1254 8.44605 10.1649 8.51637 10.2352C8.5867 10.3055 8.62621 10.4009 8.62621 10.5004ZM16.1262 10.5004C16.1262 10.5998 16.0867 10.6952 16.0164 10.7655C15.946 10.8359 15.8507 10.8754 15.7512 10.8754C15.6518 10.8754 15.5564 10.8359 15.486 10.7655C15.4157 10.6952 15.3762 10.5998 15.3762 10.5004C15.3762 10.4009 15.4157 10.3055 15.486 10.2352C15.5564 10.1649 15.6518 10.1254 15.7512 10.1254C15.8507 10.1254 15.946 10.1649 16.0164 10.2352C16.0867 10.3055 16.1262 10.4009 16.1262 10.5004Z"
                              initial={{ stroke: isActive ? 'white' : '#9B9B9B' }}
                              animate={shouldAnimate ? {
                                stroke: [
                                  isActive ? 'white' : '#9B9B9B',
                                  '#EDBF81',
                                  '#EDBF81',
                                  isActive ? 'white' : '#9B9B9B'
                                ]
                              } : {}}
                              transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                times: [0, 0.3, 0.7, 1]
                              }}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                  ) : (
                    <div className="w-[24px] h-[24px] flex items-center justify-center">
                      {item.icon(isActive)}
                    </div>
                  )}
                  <span className={clsx(
                    'text-[14px] font-normal roboto mt-[8.5px]',
                    isActive ? 'text-white' : 'text-[#9B9B9B]'
                  )}>
                    {item.title}
                  </span>
                </>
              )

              if (item.link) {
                return (
                  <div className="w-full h-full p-[5px_3px]">
                    <Link
                      key={index}
                      href={item.link}
                      style={{
                        background: isActive ? "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)" : "transparent",
                        transition: 'all 0.3'
                      }}
                      className={`flex flex-col items-center justify-center h-full transition-all w-full border-[1px] border-transparent rounded-[17.8px] p-[2px] text-center ${isActive && "!border-border-gray"}`}
                    >
                      {content}
                    </Link>
                  </div>
                )
              } else {
                return (
                  <div className="w-full h-full">
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="flex flex-col items-center justify-center transition-all w-full rounded-[17.8px] h-full"
                    >
                      {content}
                    </button>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </nav>
    </SmShow>
  )
}
