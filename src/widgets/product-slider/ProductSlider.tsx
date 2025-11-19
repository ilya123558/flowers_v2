'use client'
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from "react";
import { Button } from "@/shared/button/Button";
import clsx from "clsx";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { LgHidden, SmHidden } from "@/shared/wrappers/SizeHidden";
import { SmShow } from "@/shared/wrappers/SizeShow";
import { emotionsList } from "@/utils/const/main";

interface FlowerItem {
  title: string;
  src: string;
}

interface ProductSliderProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  imageList: string[];
  flowersList: FlowerItem[];
  setIsOpenProductTagModal: (isOpen: boolean) => void;
}

export const ProductSlider = ({ activeIndex, setActiveIndex, imageList, flowersList, setIsOpenProductTagModal }: ProductSliderProps) => {
  const swiperRef = useRef<SwiperRef>(null)
 
  return (
    <div className="col-span-5 select-none sm:mt-[0px] mt-[-80px]">
      <div className="w-full aspect-[494/574] relative border-[1px] border-[#414141] overflow-hidden sm:rounded-[17px] rounded-[0px_0px_17px_17px]">
        <SmShow>
          <div className="absolute bottom-[12px] left-0 w-full">
            <ul className="flex gap-[12px] overflow-x-scroll px-[16px] text-[#B3B3B3]">
              {emotionsList.map((emotion, index) => (
                <li key={index}>
                  <BoxWrapper className="p-[8px_12px] w-fit !bg-[#181818]">
                    <p className="text-title-gray text-[14px] font-semibold text-nowrap">{emotion}</p>
                  </BoxWrapper>
                </li>
              ))}
              <Button onClick={() => {}} className="p-[8px_12px] flex gap-[4px] items-center bg-[#181818] rounded-[10px] active:scale-95 w-fit">
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5.25C5 5.31631 4.97366 5.37989 4.92678 5.42678C4.87989 5.47366 4.8163 5.5 4.75 5.5C4.6837 5.5 4.62011 5.47366 4.57322 5.42678C4.52634 5.37989 4.5 5.31631 4.5 5.25C4.5 5.1837 4.52634 5.12011 4.57322 5.07322C4.62011 5.02634 4.6837 5 4.75 5C4.8163 5 4.87989 5.02634 4.92678 5.07322C4.97366 5.12011 5 5.1837 5 5.25ZM5 5.25H4.75M7.5 5.25C7.5 5.31631 7.47366 5.37989 7.42678 5.42678C7.37989 5.47366 7.3163 5.5 7.25 5.5C7.1837 5.5 7.12011 5.47366 7.07322 5.42678C7.02634 5.37989 7 5.31631 7 5.25C7 5.1837 7.02634 5.12011 7.07322 5.07322C7.12011 5.02634 7.1837 5 7.25 5C7.3163 5 7.37989 5.02634 7.42678 5.07322C7.47366 5.12011 7.5 5.1837 7.5 5.25ZM7.5 5.25H7.25M10 5.25C10 5.31631 9.97366 5.37989 9.92678 5.42678C9.87989 5.47366 9.8163 5.5 9.75 5.5C9.6837 5.5 9.62011 5.47366 9.57322 5.42678C9.52634 5.37989 9.5 5.31631 9.5 5.25C9.5 5.1837 9.52634 5.12011 9.57322 5.07322C9.62011 5.02634 9.6837 5 9.75 5C9.8163 5 9.87989 5.02634 9.92678 5.07322C9.97366 5.12011 10 5.1837 10 5.25ZM10 5.25H9.75M0.75 7.25667C0.75 8.32333 1.49867 9.25267 2.55467 9.408C3.27933 9.51467 4.01133 9.59667 4.75 9.654V12.75L7.53933 9.96133C7.67744 9.82377 7.86312 9.74453 8.058 9.74C9.35908 9.70799 10.657 9.59712 11.9447 9.408C13.0013 9.25267 13.75 8.324 13.75 7.256V3.244C13.75 2.176 13.0013 1.24733 11.9453 1.092C10.3906 0.863811 8.82135 0.749507 7.25 0.750002C5.65533 0.750002 4.08733 0.866668 2.55467 1.092C1.49867 1.24733 0.75 2.17667 0.75 3.244V7.256V7.25667Z" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[14px] font-semibold text-nowrap">67 отзывов</p>
              </Button>
            </ul>
            <ul className="mt-[11px] flex gap-[8px] overflow-x-scroll px-[16px]">
              {flowersList.map(({title, src}, index, arr) => {
                if(arr.length > 4 && index > 3) {
                  if(index === arr.length - 1) {
                    return (
                      <li key={index}>
                        <Button onClick={() => setIsOpenProductTagModal(true)} className="active:scale-95 h-full">
                          <BoxWrapper className="p-[5.5px_10px] w-fit flex gap-[4px] items-center h-full !bg-[#252525]">
                            <p className="text-title-gray text-[14px] font-semibold text-nowrap">...</p>
                          </BoxWrapper>
                        </Button>
                      </li>
                    )
                  }
                  return (
                    <></>
                  )
                }
                
                return (
                  <li key={index}>
                    <Button onClick={() => setIsOpenProductTagModal(true)} className="active:scale-95 h-full">
                      <BoxWrapper className="p-[5.5px_10px] w-fit flex gap-[4px] items-center !bg-[#252525]">
                        <div className="relative w-[32px] aspect-square">
                          <Image src={src} alt="flower" fill />
                        </div>
                        <p className="text-title-gray text-[14px] font-semibold text-nowrap">{title}</p>
                      </BoxWrapper>
                    </Button>
                  </li>
                )
              })}
            </ul>
          </div>
        </SmShow>
        <img src={imageList[activeIndex]} alt="product-img" className="object-cover object-center w-full h-full" />
      </div>
      <SmHidden>
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
                    "aspect-[105/89] relative w-full rounded-[14px] !transition-none overflow-hidden border-[#3a4980] flex items-center justify-center", 
                    activeIndex === index ? 'border-[3px]' : 'border-[0px]'
                  )}
                >
                  <img src={src} alt="product-img" className="object-cover object-center w-full h-full" />
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
          <SmHidden>
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
          </SmHidden>
        </div>
      </SmHidden>
      <LgHidden>
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
      </LgHidden>
    </div>
  );
};