'use client'
import { Button } from "@/shared/button/Button";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { AnimationHeightWrapper } from "@/shared/wrappers/AnimationHeightWrapper";
import { AnimationWidthWrapper } from "@/shared/wrappers/AnimationWidthWrapper";
import { DashedWrapper } from "@/shared/wrappers/DashedWrapper";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const list = [
  {
    imgSrc: '/images/home/select-types/img-1.png',
    title: 'В коробке',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-2.png',
    title: 'Охапки',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-3.png',
    title: 'Монобукеты',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-4.png',
    title: 'Авторские',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: true
  },
  {
    imgSrc: '/images/home/select-types/img-5.png',
    title: 'Сезонные коллекции',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
]

export const BuildBouquetSelectType = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const [isShow, setIsShow] = useState(true)

  const handleClick = (index: number) => {
    if(index === activeIndex) {
      setActiveIndex(null)
    }
    else{
      setActiveIndex(index)
    }

    setIsShow(false)
  }

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
        <div className="flex items-start justify-between px-[16px] w-full">
          <div className="flex">
            <AnimationWidthWrapper isOpen={activeIndex !== null}>
              <div 
                onClick={() => {
                  setActiveIndex(null)
                  setIsShow(true)
                }} 
                className={clsx("mr-[17px] relative", activeIndex === null && "opacity-0")}
              >
                <div className="absolute top-0 right-0 flex-center p-[5px_2.5px] rounded-[12.5px] bg-[#A6A6A64D] w-fit">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5771 4.99972L8.50679 1.50753C8.55589 1.4495 8.5146 1.36133 8.43871 1.36133H7.54808C7.49563 1.36133 7.4454 1.38477 7.4108 1.42494L4.99451 4.30552L2.57821 1.42494C2.54473 1.38477 2.49451 1.36133 2.44094 1.36133H1.55031C1.47442 1.36133 1.43313 1.4495 1.48223 1.50753L4.41192 4.99972L1.48223 8.49191C1.47123 8.50484 1.46417 8.52067 1.4619 8.53749C1.45962 8.55432 1.46222 8.57145 1.46939 8.58684C1.47656 8.60224 1.48799 8.61525 1.50234 8.62434C1.51668 8.63343 1.53333 8.63821 1.55031 8.63811H2.44094C2.49339 8.63811 2.54362 8.61468 2.57821 8.5745L4.99451 5.69392L7.4108 8.5745C7.44429 8.61468 7.49451 8.63811 7.54808 8.63811H8.43871C8.5146 8.63811 8.55589 8.54994 8.50679 8.49191L5.5771 4.99972Z" fill="white"/>
                  </svg>
                </div>
                <Button
                  onClick={() => {}}
                  className={clsx("active:scale-[0.98] relative")}
                >
                  <div
                    className={`rounded-[8px] p-[9.3px_4px] flex flex-col border-[3px] border-transparent gap-[9px] h-full`}
                  >
                    <div className="h-full flex-center">
                      <img src={list[activeIndex || 0].imgSrc} alt="emotion-icon" width={400} height={400} className="w-[58px] h-[56px]"/>
                    </div>
                  </div>
                </Button>
              </div>
            </AnimationWidthWrapper>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#EBEBEB] text-[28px] font-extrabold leading-[100%] max-w-[85%] uppercase">ВЫБЕРИТЕ ТИП БУКЕТА</p>
              <p className="text-[#B7B7B7] text-[16px] leading-[100%] mt-[8px]">{activeIndex !== null ? `${list[activeIndex].title}`: "Не выбрано"}</p>
            </div>
          </div>
          <Button 
            onClick={() => {
              setActiveIndex(null); 
              setIsShow(!isShow)
            }} 
            className="aspect-square active:scale-95 mt-[0px]"
          >
            <svg className={clsx("transition-all", isShow && "rotate-180")} width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.707 10.9141L10.207 1.41406L0.707031 10.9141" stroke="#ADADAD" strokeWidth="2"/>
            </svg>
          </Button>
        </div>
        <AnimationHeightWrapper isOpen={isShow}>
          <ul className="mt-[24px] flex flex-col gap-[17px] px-[16px]">
            {list.map(({imgSrc, subtitle, title, isNew}, index) => (
              <Button key={index} onClick={() => handleClick(index)} className={`active:scale-[0.99] border-[1px] border-transparent relative w-full rounded-[16px] p-[16px_10px] ${activeIndex === index && "bg-[#1E1D1A] border-yellow" }`}>
                <div className="flex items-center gap-[20px]">
                  <div className="h-full flex-center">
                    <img src={imgSrc} alt="type-img" width={80} height={80} className="max-w-[70px]"/>
                  </div>
                  <div className={`flex flex-col text-start roboto ${activeIndex === index ? "text-yellow": "text-white"}`}>
                    <p className="text-[18px] leading-[100%] font-black">{title}</p>
                    <p className="text-[14px] leading-[134%] text-[#FFFFFFCC] mt-[7px]">{subtitle}</p>
                  </div>
                </div>
              </Button>
            ))}
          </ul>
        </AnimationHeightWrapper>
      </LgShow>

    </div>
  );
};