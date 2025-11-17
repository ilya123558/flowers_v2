'use client'
import { Button } from "@/shared/button/Button";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { AnimationHeightWrapper } from "@/shared/wrappers/AnimationHeightWrapper";
import { DashedWrapper } from "@/shared/wrappers/DashedWrapper";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const list = [
  {
    imgSrc: '/images/home/select-types/img-1.png',
    title: 'Монобукеты',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-2.png',
    title: 'Авторские',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-3.png',
    title: 'Авторские',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-4.png',
    title: 'В коробке',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: true
  },
  {
    imgSrc: '/images/home/select-types/img-5.png',
    title: 'Коллекции',
    subtitle: 'Букеты созданные из сезонных цветов',
    isNew: false
  },
]

export const BuildBouquetSelectType = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isShow, setIsShow] = useState(true)

  return (
    <div className="">
      <LgHidden>
        <Title23px>
          Выберите тип букета
        </Title23px>
        <ul className="grid grid-cols-5 gap-[16px] h-[125px] mt-[16px]">
          {list.map(({imgSrc, subtitle, title, isNew}, index) => (
            <Button key={index} onClick={() => setActiveIndex(index)} className="active:scale-95">
              <DashedWrapper 
                className={`w-full rounded-[19px] flex items-center justify-between h-full gap-[9.6px] ${activeIndex === index ? '!border-solid !border-[3px] !border-yellow p-[13.25px_11px]': 'p-[14.25px_12.7px]'}`}
              >
                <div className="h-full flex-center relative">
                  {isNew && (
                    <div className="absolute top-0 left-0 w-full p-[4px] bg-[#50AF19] roboto rounded-[0px_6px_6px_6px]">
                      <p className="text-[12px] font-semibold leading-[100%] text-[#252525]">Новинка</p>
                    </div>
                  )}
                  <Image src={imgSrc} alt="type-img" width={62} height={62} className="min-w-[62px]"/>
                </div>
                <div className="text-start">
                  <h5 className={clsx("text-[17.5px] font-black transition-all", activeIndex === index && 'text-yellow')}>{title}</h5>
                  <p className={clsx("mt-[10px] text-[12.7px] text-gray transition-all", activeIndex === index && 'text-yellow')}>{subtitle}</p>
                </div>
              </DashedWrapper>
            </Button>
          ))}
        </ul>
      </LgHidden>
      
      <LgShow>
        <div className="flex justify-between items-center px-[16px]">
          <p className="text-[#EBEBEB] text-[30px] font-extrabold leading-[100%] max-w-[85%]">Выберите тип букета</p>
          <Button onClick={() => setIsShow(!isShow)} className="aspect-square active:scale-95">
            <svg className={clsx("transition-all", isShow && "rotate-180")} width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.707 10.9141L10.207 1.41406L0.707031 10.9141" stroke="#ADADAD" strokeWidth="2"/>
            </svg>
          </Button>
        </div>
        <AnimationHeightWrapper isOpen={isShow}>
          <ul className="mt-[24px] flex flex-col gap-[8px] overflow-x-scroll px-[16px]">
            {list.map(({imgSrc, subtitle, title, isNew}, index) => (
              <Button key={index} onClick={() => setActiveIndex(index)} className="active:scale-[0.99]">
                <div 
                  className={`relative rounded-[19px] flex items-center gap-[9.6px] w-full p-[0px_16px] h-[108px] border-[3px] border-transparent ${activeIndex === index ? '!border-yellow': 'bg-[#2E2E2E]'}`}
                >
                  <div className="h-full flex-center">
                    <Image src={imgSrc} alt="type-img" width={62} height={62} className="max-w-[70px]"/>
                  </div>
                  <div className="text-start">
                    <h5 className={clsx("text-[17.5px] font-black transition-all", activeIndex === index && 'text-yellow')}>{title}</h5>
                    <p className={clsx("mt-[10px] text-[12.7px] text-gray transition-all", activeIndex === index && 'text-yellow')}>{subtitle}</p>
                  </div>
                  {isNew && (
                    <div className="absolute top-[10px] left-[16px] p-[3px] bg-[#50AF19] roboto rounded-[0px_5px_5px_5px]">
                      <p className="text-[12px] font-semibold leading-[100%] text-[#252525]">Новинка</p>
                    </div>
                  )}
                </div>
              </Button>
            ))}
          </ul>
        </AnimationHeightWrapper>
      </LgShow>

    </div>
  );
};