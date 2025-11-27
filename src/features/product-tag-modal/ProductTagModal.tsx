'use client'
import { Button } from "@/shared/button/Button";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { ModalWrapper } from "@/shared/wrappers/ModalWrapper";
import { TClassName } from "@/utils/types/main";
import { SelectSize } from "../select-size/SelectSize";
import { useState } from "react";
import Image from "next/image";
import { SliderWrapper } from "@/shared/wrappers/SliderWrapper";
import { SwiperSlide } from "swiper/react";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import clsx from "clsx";

type TProps = TClassName<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}>

export const ProductTagModal = (props: TProps) => {
  const [activeFlowersIndex, setActiveFlowersIndex] = useState(0)
  const flowersList = ['Красный тюльпан', 'Роза', 'Жёлтый тюльпан', 'Оранжевая роза', 'Роза', 'Красный тюльпан', 'Роза', 'Жёлтый тюльпан', 'Оранжевая роза', 'Роза',]

  return (
    <ModalWrapper {...props} className="aspect-[562/472] sm:w-[562px] w-[340px]">
      <div className="text-[#D9D9D9]">
        <div className="flex items-center justify-between">
          <h5 className="sm:text-[18px] text-[14px] font-bold">Цветы в букете Солнечный день</h5>
          <Button 
            onClick={() => props.setIsOpen(false)} 
            className="text-[14px] font-medium underline active:scale-95"
          >
              Закрыть
          </Button>
        </div>
        <div className="grid grid-cols-12 sm:gap-[25px] gap-[10px] w-full h-full mt-[25px]">
          <div className="col-span-8 w-full aspect-square">
            <SliderWrapper 
              slidesPerView={1} 
              prevButton={(
                <Button onClick={() => {}} className="absolute top-[50%] left-[14px] z-[1] active:scale-95">
                  <svg className="rotate-180" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              )}
              nextButton={(
                <Button onClick={() => {}} className="absolute top-[50%] right-[14px] z-[1] active:scale-95">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              )}
            >
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image src={'/images/product/flower.png'} alt="flower" quality={100} fill />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-full">
                  <Image src={'/images/product/flower.png'} alt="flower" quality={100} fill />
                </div>
              </SwiperSlide>
            </SliderWrapper>
          </div>
          <div className="col-span-4 w-full sm:aspect-[140/336] aspect-[140/310] overflow-hidden overflow-y-scroll pb-[30px]">
            <ul className="flex flex-col gap-[11px]">
              {flowersList.map((flowers, index) => (
                <li key={index}>
                  <Button onClick={() => setActiveFlowersIndex(index)} className="sm:active:scale-95 active:scale-[0.98]">
                    <BoxWrapper className={clsx("w-fit p-[12px_10px] rounded-[8px] border-[1px] border-transparent", activeFlowersIndex === index && '!border-yellow')}>
                      <p className="text-white text-[14px] font-medium">{flowers}</p>
                    </BoxWrapper>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};