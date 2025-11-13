'use client'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import { TClassNameWithChildrenAndProps } from '@/utils/types/main';
import clsx from 'clsx';

type TProps = TClassNameWithChildrenAndProps<{
  prevButton?: JSX.Element,
  nextButton?: JSX.Element,
  spaceBetween?: number
  slidesPerView?: number 
}>

export const SliderWrapper = ({children, className, prevButton, nextButton, slidesPerView, spaceBetween}: TProps) => {
  const swiperRef = useRef<SwiperRef | null>(null)

  return (
    <div className={clsx("w-full h-full relative", className)}>
      <Swiper
        ref={swiperRef}
        spaceBetween={spaceBetween || 0}
        slidesPerView={slidesPerView || 3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='w-full h-full'
      >
        {children}
      </Swiper>
      {prevButton && <div onClick={() => swiperRef.current?.swiper.slidePrev()}>{prevButton}</div>}
      {nextButton && <div onClick={() => swiperRef.current?.swiper.slideNext()}>{nextButton}</div>}
    </div>
  );
};