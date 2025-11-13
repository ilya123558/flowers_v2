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
import { formatPrice } from "@/utils/libs/formatPrice";

type TProps = TClassName<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}>

export const ProductServiceInfoModal = (props: TProps) => {
  const infoList = [
    {imgSrc: '/images/product/service-info-1.png', price: 1900, text: 'за средний букет размера S до 3000 ₽'},
    {imgSrc: '/images/product/service-info-2.png', price: 2400, text: 'за средний букет размера M до 9000 ₽'},
    {imgSrc: '/images/product/service-info-3.png', price: 4000, text: 'за большой букет размера L до 21000 ₽'},
    {imgSrc: '/images/product/service-info-4.png', price: 5500, text: 'за большой букет размера XL от 21000 ₽'},
  ]

  return (
    <ModalWrapper {...props} className="lg:w-[1064px] sm:w-[600px] w-[340px] lg:h-[460px] p-[30px_40px]">
      <div className="text-[#D9D9D9]">
        <div className="flex items-center justify-between">
          <h5 className="sm:text-[24px] text-[14px] font-bold">Цветы в букете Солнечный день</h5>
          <Button 
            onClick={() => props.setIsOpen(false)} 
            className="text-[14px] font-medium underline active:scale-95"
          >
              Закрыть
          </Button>
        </div>
        <p className="lg:text-[18px] text-[14px] leading-[100%] sm:mt-[25px] mt-[10px]">
          Профессиональный подбор свежих цветов, создание композиции флористом, надёжная упаковка, бесплатная доставка, возможность персонализировать букет, фото перед отправкой и полный контроль качества на каждом этапе.
        </p>
        <div className="mt-[25px] flex justify-between text-[#D7D7D7] overflow-y-scroll">
          {infoList.map(({imgSrc, price, text}, index) => (
            <div key={index} className="flex flex-col gap-[16px] min-w-[174px] overflow-hidden">
              <div className="relative aspect-square overflow-hidden rounded-full w-[150px]">
                <Image src={imgSrc} alt="service-info" fill quality={100} />
              </div>
              <div className="flex flex-col">
                <p className="text-[16px]">за сервис</p>
                <p className="font-extrabold text-[29px] mt-[8px]">{formatPrice(price)} ₽</p>
              </div>
              <p className="leading-[100%] text-[16px] max-w-[50%]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </ModalWrapper>
  );
};