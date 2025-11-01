'use client'
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useState } from "react";
import { Button } from "@/shared/button/Button";
import clsx from "clsx";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";

const imageList = [
  '/images/product/product-main.png', 
  '/images/product/product-main.png', 
  '/images/product/product-main.png', 
  '/images/product/product-main.png', 
  '/images/product/product-main.png', 
  '/images/product/product-main.png', 
  '/images/product/product-main.png', 
  '/images/product/product-main.png', 
] 

export const ProductSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperRef>(null)
 
  return (
    <div className="col-span-5 select-none">
      <div className="w-full aspect-[494/574] relative overflow-hidden border-[1px] border-[#414141] rounded-[17px]">
        <Image src={imageList[activeIndex]} alt="product-img" quality={100} fill/>
      </div>
      <div className="relative flex-center mt-[16px] w-full">
        <Swiper
          ref={swiperRef}
          spaceBetween={8}
          slidesPerView={4}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-[94%]"
        >
          {imageList.map((src, index) => (
            <SwiperSlide key={index}>
              <Button 
                onClick={() => setActiveIndex(index)} 
                className={clsx(
                  "aspect-[105/89] relative w-[105px] rounded-[14px] !transition-none overflow-hidden border-[#3a4980] flex items-center justify-center", 
                  activeIndex === index ? 'border-[3px]' : 'border-[0px]'
                )}
              >
                <Image src={src} alt="product-img" quality={100} fill className="object-cover object-center" />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button onClick={() => swiperRef.current?.swiper.slidePrev()} className="absolute top-[50%] translate-y-[-50%] left-[-10px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 4.5L8.25 12L15.75 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        <Button onClick={() => swiperRef.current?.swiper.slideNext()} className="absolute top-[50%] translate-y-[-50%] right-[-10px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
      <BoxWrapper className="mt-[16px] w-full h-[96px] flex items-center justify-between p-[0px_54px_0px_24px]">
        <div className="flex-center gap-[8px]">
          <div className="relative w-[40px] h-[32.5px]">
            <Image src={'/images/product/question.png'} alt="question" fill />
          </div>
          <p className="w-[220px] text-secondary text-[14px] leading-[100%]">Трудно определиться? Понимаем. Поэтому мы всегда на связи для консультаций</p>
        </div>
        <Button onClick={() => {}}>
          <p className="underline text-nowrap text-light-gray text-[14px] font-medium">Открыть Телеграм</p>
        </Button>
      </BoxWrapper>
    </div>
  );
};