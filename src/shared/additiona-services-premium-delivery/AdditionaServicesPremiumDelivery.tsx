'use client'
import { useState } from "react";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { BoxWrapper } from "../wrappers/BoxWrapper";
import { BasketButton } from "../button/BasketButton";
import { AnimationHeightWrapper } from "../wrappers/AnimationHeightWrapper";
import { InfoWithToggle } from "../info-with-toggle/InfoWithToggle";
import { formatPrice } from "@/utils/libs/formatPrice";
import { SmHidden } from "../wrappers/SizeHidden";
import { SmShow } from "../wrappers/SizeShow";
import { DeliveryCardsSlider } from "@/features/delivery-cards-slider/DeliveryCardsSlider";
import { FullscreenLoopVideo } from "../fullscreen-loop-video/FullscreenLoopVideo";

export const AdditionaServicesPremiumDelivery = () => {
  const [isShow, setIsShow] = useState(true)

  return (
    <BoxWrapper className="w-full sm:p-[16px_24px] rounded-[14px]">
      <div className="sm:p-[0px] p-[16px_24px]">
        <InfoWithToggle
          toggle={isShow} 
          setToggle={setIsShow} 
          text="Курьер в костюме и белых перчатках вручит букет по этикету. Согласуем время и после пришлём отчёт с реакцией." 
          title="Выбрать премиум доставку" 
        />
      </div>
      <SmHidden>
        <div className="mt-[8px] text-[#D9D9D9] text-[14px] leading-[151%] roboto">
          {isShow
            ? (
              <div className="flex justify-between items-center">
                <p>Премиум-вручение с фотоотчётом</p>
                <p className="font-semibold text-nowrap">от {formatPrice(2500)} ₽</p>
              </div>
            )
            : (
              <div className="flex justify-between items-center">
                <p>Выбрана стандартная доставка Яндексом</p>
                <p className="font-semibold text-nowrap">от {formatPrice(120)} ₽</p>
              </div>
            )
          }
        </div>
      </SmHidden>
      <SmShow>
        <AnimationHeightWrapper isOpen={isShow} >
          <div className="relative w-full overflow-hidden z-[1]">
            <FullscreenLoopVideo srcMp4="/images/home/video-block/flowers-movie.mp4" />
            <div 
              style={{background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 20.65%, rgba(0, 0, 0, 0.8) 100%)"}} 
              className="absolute bottom-0 left-0 h-[30%] w-full" 
            />
            <div className="absolute top-[10%] left-0 w-full">
              <div className="relative w-full h-[225px]">
                <DeliveryCardsSlider />
              </div>
            </div>
            <div className="absolute flex items-center justify-between left-0 bottom-[15px] w-full px-[16px]">
              <div className="flex gap-[8px] h-[32px]">
                <Button onClick={() => {}} className="h-full active:scale-95 roboto-flex">
                  <BoxWrapper className="h-full p-[0px_10px] !bg-[#181818]">
                    <div className="flex items-center gap-[7px] h-full">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z" stroke="#D46F77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-red">109</p>
                    </div>
                  </BoxWrapper>
                </Button>
                <div className="bg-[#181818] p-[7px_8px] top-[9px] left-[8px] rounded-[9px] flex-center gap-[4px]">
                  <div className="relative w-[16px] aspect-square">
                    <img src="/images/product/coins.png" alt="points" className="w-full h-full object-contain"/>
                  </div>
                  <p className="text-[#B3B3B3] text-[14px]">135</p>
                </div>
              </div>
              <div className="roboto">
                <p className="text-end text-[34px] text-white font-semibold leading-[100%] underline underline-offset-4">2 390</p>
              </div>
            </div>
          </div>
        </AnimationHeightWrapper>
      </SmShow>
    </BoxWrapper>
  );
};