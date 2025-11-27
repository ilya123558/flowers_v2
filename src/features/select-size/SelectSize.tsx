'use client'
import { Button } from "@/shared/button/Button";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { sizesList } from "@/utils/const/main";
import { TClassName } from "@/utils/types/main";
import clsx from "clsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useRef, useEffect } from 'react';

type TProps = TClassName<{
  activeSizeIndex: number
  setActiveSizeIndex: (activeSizeIndex: number) => void
}>

export const SelectSize = ({className, activeSizeIndex, setActiveSizeIndex}: TProps) => {
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeSizeIndex)
    }
  }, [activeSizeIndex])

  if (sizesList.length < 4) {
    return (
      <ul className={clsx("mt-[8px] flex sm:gap-[8px] gap-[11px]", className)}>
        {sizesList.map((size, index) => (
          <li key={index} className="sm:w-fit w-full">
            <Button onClick={() => setActiveSizeIndex(index)} className="active:scale-95 sm:w-fit w-full">
              <BoxWrapper className={clsx("sm:p-[9.5px_10px] p-[13.5px_26px] sm:w-fit w-full flex gap-[4px] items-center justify-center border-[1px] border-transparent transition-all", activeSizeIndex === index && "!border-yellow")}>
                <div className="relative w-[16px] aspect-square border-[1px] border-white rounded-full">
                  <div className={clsx("w-[70%] aspect-square absolute top-[15%] left-[15%] rounded-full bg-yellow transition-all", activeSizeIndex !== index && "opacity-0")}/>
                </div>
                <p className="text-title-gray text-[14px] font-medium uppercase">{size}</p>
              </BoxWrapper>
            </Button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={clsx("mt-[8px]", className)}>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={11}
        slidesPerView="auto"
        freeMode={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          640: {
            spaceBetween: 8,
          }
        }}
      >
        {sizesList.map((size, index) => (
          <SwiperSlide key={index} className="!w-auto">
            <Button onClick={() => setActiveSizeIndex(index)} className="active:scale-95 sm:w-fit w-full">
              <BoxWrapper className={clsx("sm:p-[9.5px_10px] p-[13.5px_26px] sm:w-fit w-full flex gap-[4px] items-center justify-center border-[1px] border-transparent transition-all", activeSizeIndex === index && "!border-yellow")}>
                <div className="relative w-[16px] aspect-square border-[1px] border-white rounded-full">
                  <div className={clsx("w-[70%] aspect-square absolute top-[15%] left-[15%] rounded-full bg-yellow transition-all", activeSizeIndex !== index && "opacity-0")}/>
                </div>
                <p className="text-title-gray text-[14px] font-medium uppercase">{size}</p>
              </BoxWrapper>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};