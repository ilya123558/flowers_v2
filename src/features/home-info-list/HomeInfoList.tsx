'use client'
import { useEffect, useRef } from 'react'
import styles from './HomeInfoList.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

export const HomeInfoList = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const cards = Array.from(
        document.getElementsByClassName(styles.card)
      ) as HTMLElement[]

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const list = [
    { icon: '/images/home/info/icon-1.png', title: 'Доставка за 90 мин', text: 'Букет прибудет точно вовремя, мы используем доставку от Яндекс' },
    { icon: '/images/home/info/icon-2.png', title: 'Подписка на цветы', text: 'Новый букет каждый месяц прямо к вашему столу. Выбирайте даты и поводы в календаре' },
    { icon: '/images/home/info/icon-3.png', title: 'Цветы с водой', text: 'Каждый букет едет в упаковке с водой — чтобы радовал дольше.' },
    { icon: '/images/home/info/icon-4.png', title: 'Тайный друг', text: 'Сделайте сюрприз анонимно — пусть радость придёт без раскрытия имени' },
    { icon: '/images/home/info/icon-5.png', title: 'Оформление мероприятий', text: 'Красиво, стильно и в срок — от корпоративов до семейных праздников' },
    { icon: '/images/home/info/icon-6.png', title: 'Календарь событий ', text: 'Telegram, WhatsApp, звонок — всегда на связи для консультаций и заказов' },
  ]

  return (
    <div ref={containerRef} className="lg:grid flex lg:px-[0px] px-[16px] grid-cols-3 gap-[16px] lg:mt-[60px] mt-[16px] roboto cursor-pointer select-none lg:overflow-x-auto overflow-x-scroll">
      {list.map(({icon, text, title}, i) => (
        <div key={i} className={clsx('lg:min-w-full min-w-[250px] p-[17.25px_16px] bg-[#1E1D1A] relative transition-all rounded-[24px]', styles.card)}>
          <div className="relative w-[84px] aspect-square">
            <Image src={icon} alt='icon' fill />
          </div>
          <p className='text-[22px] font-black mt-[16px]'>{title}</p>
          <p className='text-[#909191] text-[16px] mt-[16px] leading-[134%]'>{text}</p>
        </div>
      ))}
    </div>
  )
}
