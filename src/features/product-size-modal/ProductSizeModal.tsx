'use client'
import { Button } from "@/shared/button/Button";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { ModalWrapper } from "@/shared/wrappers/ModalWrapper";
import { TClassName } from "@/utils/types/main";
import { SelectSize } from "../select-size/SelectSize";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { sizesList } from "@/utils/const/main";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

type TProps = TClassName<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}>

export const ProductSizeModal = (props: TProps) => {
  const [activeSizeIndex, setActiveSizeIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSizeIndex(swiper.activeIndex)
  }

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.activeIndex !== activeSizeIndex) {
      swiperRef.current.slideTo(activeSizeIndex)
    }
  }, [activeSizeIndex])

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const isFirstSlide = activeSizeIndex === 0
  const isLastSlide = activeSizeIndex === sizesList.length - 1

  return (
    <ModalWrapper {...props} className="aspect-[376/617] sm:w-[376px] w-[330px]">
      <div className="text-[#D9D9D9]">
        <div className="flex items-center justify-between">
          <h5 className="text-[18px] font-bold">Оцените размер букета</h5>
          <Button
            onClick={() => props.setIsOpen(false)}
            className="text-[14px] font-medium underline active:scale-95"
          >
              Закрыть
          </Button>
        </div>
        <div className="mt-[25px]">
          <Title16px>Выберите размер:</Title16px>
          <SelectSize activeSizeIndex={activeSizeIndex} setActiveSizeIndex={setActiveSizeIndex}/>
        </div>
        <div className="mt-[8px] relative w-full aspect-[328/428] z-[1]">
          <Swiper
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            initialSlide={activeSizeIndex}
          >
            {sizesList.map((size, index) => {
              const scale = 1 + (index * 0.1);

              return (
                <SwiperSlide key={size}>
                  <div className="relative w-full aspect-[328/428]">
                    <Image src={`/images/product/flowers-size-bg.png`} alt="flowers-size" quality={100} fill />
                    <div
                      className="absolute top-[25%] aspect-[248/212] w-[80%] left-1/2 -translate-x-[55%] z-[10]"
                      style={{ transform: `translateX(-55%) scale(${scale})` }}
                    >
                      <Image src={`/images/product/flowers-size-${size}.png`} alt={`flowers-size-${size}`} quality={100} fill />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {!isFirstSlide && (
            <button
              onClick={handlePrevSlide}
              className="absolute left-[-10px] top-[40%] -translate-y-1/2 z-20 active:scale-95 transition-transform"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {!isLastSlide && (
            <button
              onClick={handleNextSlide}
              className="absolute right-[-10px] top-[40%] -translate-y-1/2 z-20 active:scale-95 transition-transform"
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </ModalWrapper>
  );
};