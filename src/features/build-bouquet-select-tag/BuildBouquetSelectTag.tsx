'use client'
import { Button } from "@/shared/button/Button";
import { Tooltip } from "@/shared/tooltip/Tooltip";
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
    imgSrc: '/images/catalog/emotion-1.png',
    title: 'Благодарю',
    color: '#FEDB4666'
  },
  {
    imgSrc: '/images/catalog/emotion-2.png',
    title: 'Восхищаюсь',
    color: '#72539666'
  },
  {
    imgSrc: '/images/catalog/emotion-3.png',
    title: 'Горжусь',
    color: '#61A7A866'
  },
  {
    imgSrc: '/images/catalog/emotion-4.png',
    title: 'Уважаю',
    color: '#CA535466'
  },
  {
    imgSrc: '/images/catalog/emotion-5.png',
    title: 'Люблю',
    color: '#70539666'
  },
  {
    imgSrc: '/images/catalog/emotion-6.png',
    title: 'Скучаю',
    color: '#D7AC4366'
  },
  {
    imgSrc: '/images/catalog/emotion-7.png',
    title: 'Поддерживаю',
    color: '#41848166'
  },
  {
    imgSrc: '/images/catalog/emotion-8.png',
    title: 'Прошу прощения',
    color: '#C98F4E66'
  },
  {
    imgSrc: '/images/catalog/emotion-9.png',
    title: 'Ценю',
    color: '#D23B3866'
  },
]

export const BuildBouquetSelectTag = () => {
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
        <div className="max-w-fit">
          <Tooltip text="Курьер в костюме и белых перчатках вручит букет по этикету. Согласуем время и после пришлём отчёт с реакцией." classNameText="min-w-[103%]">
            <span className="text-[23px] font-medium text-title-gray !leading-[60%]">Выберите эмоцию — букет сам подстроится под ваше чувство</span>
          </Tooltip>
        </div>
        <ul className="flex flex-wrap gap-[16px] mt-[16px]">
          {list.map(({imgSrc, title}, index) => (
            <li key={index}>
              <Button onClick={() => handleClick(index)} className="active:scale-95">
                <DashedWrapper 
                  className={`w-fit rounded-[19px] flex items-center gap-[9.5px] h-full ${activeIndex === index ? '!border-solid !border-[3px] !border-yellow p-[4.5px_12.7px]': 'p-[6.5px_14.7px]'}`}
                >
                  <div className="h-full flex-center">
                    <Image src={imgSrc} alt="type-img" width={69} height={69} className="min-w-[69px]"/>
                  </div>
                  <h5 className={clsx("text-[17.5px] transition-all", activeIndex === index && 'text-yellow')}>{title}</h5>
                </DashedWrapper>
              </Button>
            </li>
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
                  onClick={() => handleClick(activeIndex || 0)}
                  className={clsx("active:scale-[0.98] relative")}
                >
                  <div
                    style={{background: list[activeIndex || 0].color}}
                    className={`rounded-[8px] p-[9.3px_4px] flex flex-col border-[3px] border-transparent gap-[9px] h-full`}
                  >
                    <div className="h-full flex-center">
                      <img src={list[activeIndex || 0].imgSrc} alt="emotion-icon" width={400} height={400} className="w-[58px] h-[56px]"/>
                    </div>
                    <h5 className={clsx("text-[9px] transition-all")}>{list[activeIndex || 0].title}</h5>
                  </div>
                </Button>
              </div>
            </AnimationWidthWrapper>
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#EBEBEB] text-[28px] font-extrabold leading-[100%] max-w-[85%] uppercase">Выберите<br/> эмоцию</p>
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
          <div className="grid grid-cols-3 gap-[7px] mt-[10px] px-[16px]">
            {list.map(({color, imgSrc, title}, index) => (
              <Button
                key={index}
                onClick={() => handleClick(index)}
                className={clsx("active:scale-[0.98] relative")}
              >
                <div className={clsx("absolute top-[7px] right-[7px] transition-all opacity-0", activeIndex === index && "opacity-100")}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" fill="white" fillOpacity="0.01"/>
                    <path d="M15.1437 2.25H13.8955C13.7205 2.25 13.5544 2.33036 13.4473 2.46786L6.08478 11.7946L2.55442 7.32143C2.50101 7.25362 2.43294 7.1988 2.35531 7.16106C2.27768 7.12333 2.19252 7.10368 2.1062 7.10357H0.85799C0.738347 7.10357 0.672275 7.24107 0.74549 7.33393L5.63656 13.5304C5.86513 13.8196 6.30442 13.8196 6.53478 13.5304L15.2562 2.47857C15.3294 2.3875 15.2633 2.25 15.1437 2.25Z" fill="#FFCC00"/>
                  </svg>
                </div>
                <div
                  style={{background: color}}
                  className={`rounded-[8px] p-[16px_10px_21px] flex flex-col border-[3px] border-transparent gap-[14px] h-full ${activeIndex === index
                    ? '!border-yellow'
                    : ''
                  }`}
                >
                  <div className="h-full flex-center">
                    <img src={imgSrc} alt="emotion-icon" width={400} height={400} className="w-[100px]"/>
                  </div>
                  <h5 className={clsx("text-[17.5px] transition-all", activeIndex === index && 'text-yellow')}>{title}</h5>
                </div>
              </Button>
            ))}
          </div>
        </AnimationHeightWrapper>
      </LgShow>
    </div>
  );
};