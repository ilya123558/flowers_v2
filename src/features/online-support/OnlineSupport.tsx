'use client'
import { SocialButton } from "@/shared/social-button/SocialButton";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface IProps {
  hiddenPage?: string
  isComponent?: boolean
}

export const OnlineSupport = ({ hiddenPage, isComponent }: IProps) => {
  const isHidden = hiddenPage ? usePathname().includes(hiddenPage) : false
  const [isVisible, setIsVisible] = useState(true)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isComponent) return

    const handleScroll = () => {
      setIsVisible(false)

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [isComponent])

  const handleWhatsappClick = () => {
    // window.open('https://wa.me/79280000000', '_blank');
  };

  const handleTelegramClick = () => {
    // window.open('https://t.me/yourusername', '_blank');
  };

  if(isHidden) {
    return null
  }

  if(isComponent) {
    return (
      <div className="bg-[#000000B2] rounded-[10px] rounded-t-[10px] p-[13.2px_15px] flex items-center sm:justify-center justify-between gap-[7.5px] shadow-lg sm:m-0 m-[0px_13px_13px]">
        <SocialButton type="whatsapp" size="small" onClick={handleWhatsappClick} />

        <div className="text-[#E4E4E4] text-center leading-[120%] text-[15px]">
          <p className="text-[18px]">Мы онлайн 24/7</p>
          <p className="text-[14px]">реальные люди, не бот</p>
        </div>

        <SocialButton type="telegram" size="small" onClick={handleTelegramClick} />
      </div>
    )
  }

  return (
    <div
      className={`fixed sm:block hidden sm:bottom-[32px] sm:right-[32px] bottom-0 left-0 right-0 sm:left-auto z-40 roboto transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="bg-[#000000B2] rounded-[10px] rounded-t-[10px] p-[13.2px_15px] flex items-center sm:justify-center justify-between gap-[7.5px] shadow-lg sm:m-0 m-[0px_13px_13px]">
        <SocialButton type="whatsapp" size="small" onClick={handleWhatsappClick} />

        <div className="text-[#E4E4E4] text-center leading-[120%] text-[15px]">
          <p className="text-[18px]">Мы онлайн 24/7</p>
          <p className="text-[14px]">реальные люди, не бот</p>
        </div>

        <SocialButton type="telegram" size="small" onClick={handleTelegramClick} />
      </div>
    </div>
  );
};
