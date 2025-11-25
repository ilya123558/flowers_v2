'use client'
import { HeaderLogo } from "@/features/header-logo/HeaderLogo";
import { HeaderNav } from "@/features/header-nav/HeaderNav";
import { HeaderProfile } from "@/features/header-profile/HeaderProfile";
import { Container } from "@/shared/container/Container";
import { LgHidden, SmHidden } from "@/shared/wrappers/SizeHidden";
import { useDevice } from "@/utils/hooks/useDevice";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
  // const isProductPage = usePathname().includes('product')
  // const [isShowTop, setIsShowTop] = useState(true)
  // const { scrollY } = useScroll()

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setIsShowTop(latest <= 0)
  // })
  const device = useDevice().getDevice()
  const [isVisible, setIsVisible] = useState(true)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false)

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true)
      }, 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])


  return (
    <header>
      <div className={clsx("bg-black transition-all duration-500 roboto w-screen left-0 fixed right-0 z-20 top-0", device === 'mobile' && (isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'))}>
        {/* <LgHidden>
          <div className="flex-center h-[38px] text-[15px] font-medium text-white-opasity bg-secondary-bg">
            Доставка день-в-день по Южно-Сахалинску при заказе до 18:00
          </div>
        </LgHidden> */}
        {/* <LgShow>
          <AnimationHeightWrapper isOpen={isShowTop} >
            <div className="flex-center text-center px-[16px] h-[38px] text-[15px] font-medium text-white-opasity bg-secondary-bg">
              Доставка день-в-день по Южно-Сахалинску при заказе до 18:00
            </div>
          </AnimationHeightWrapper>
        </LgShow> */}
        <Container>
          <div className="flex sm:justify-between justify-center items-center lg:h-[74px] h-[60px]">
            <HeaderLogo />
            <LgHidden>
              <HeaderNav />
            </LgHidden>
            <SmHidden>
              <HeaderProfile />
            </SmHidden>
          </div>
        </Container>
      </div>
      <div className="lg:h-[74px] h-[60px]"></div>
    </header>
  );
};