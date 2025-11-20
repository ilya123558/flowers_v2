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
    <BoxWrapper className="w-full sm:p-[16px_24px] rounded-[14px] overflow-hidden">
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
          <div className="relative w-full overflow-hidden">
            <FullscreenLoopVideo srcMp4="/images/home/video-block/flowers-movie.mp4" />
            <div className="absolute top-[20%] left-0 w-full">
              <div className="relative w-full h-[225px]">
                <DeliveryCardsSlider />
                <div className="absolute flex-center left-0 bottom-[-60px] w-full">
                  <div className="p-[5px_9px] bg-yellow rounded-[8px] roboto-serif">
                    <p className="text-[#202020] text-[25px] leading-[100%] font-bold">2 500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimationHeightWrapper>
      </SmShow>
    </BoxWrapper>
  );
};