'use client'
import { HeaderLogo } from "@/features/header-logo/HeaderLogo";
import { HeaderNav } from "@/features/header-nav/HeaderNav";
import { HeaderProfile } from "@/features/header-profile/HeaderProfile";
import { Container } from "@/shared/container/Container";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export const Header = () => {
  const [isShowTop, setIsShowTop] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsShowTop(latest <= 0)
  })

  return (
    <header className="">
      <div className="bg-black roboto w-screen left-0 fixed right-0 z-20 top-0">
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
          <div className="flex justify-between items-center lg:h-[74px] h-[60px]">
            <HeaderLogo />
            <LgHidden>
              <HeaderNav />
            </LgHidden>
            <HeaderProfile />
          </div>
        </Container>
      </div>
      <div className="lg:h-[74px] h-[60px]"></div>
    </header>
  );
};