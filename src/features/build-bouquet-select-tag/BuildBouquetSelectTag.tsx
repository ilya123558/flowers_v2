'use client'
import { Button } from "@/shared/button/Button";
import { Tooltip } from "@/shared/tooltip/Tooltip";
import { AnimationHeightWrapper } from "@/shared/wrappers/AnimationHeightWrapper";
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
  },
  {
    imgSrc: '/images/catalog/emotion-2.png',
    title: 'Восхищаюсь',
  },
  {
    imgSrc: '/images/catalog/emotion-3.png',
    title: 'Горжусь',
  },
  {
    imgSrc: '/images/catalog/emotion-4.png',
    title: 'Уважаю',
  },
  {
    imgSrc: '/images/catalog/emotion-5.png',
    title: 'Люблю',
  },
  {
    imgSrc: '/images/catalog/emotion-6.png',
    title: 'Скучаю',
  },
  {
    imgSrc: '/images/catalog/emotion-7.png',
    title: 'Поддерживаю',
  },
  {
    imgSrc: '/images/catalog/emotion-8.png',
    title: 'Прошу прощения',
  },
  {
    imgSrc: '/images/catalog/emotion-9.png',
    title: 'Ценю',
  },
]

export const BuildBouquetSelectTag = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(0)
  const [isShow, setIsShow] = useState(true)

  const handleClick = (index: number) => {
    if(index === activeIndex) {
      setActiveIndex(null)
    }
    else{
      setActiveIndex(index)
    }
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
        <div className="flex justify-between items-center px-[16px]">
          <p className="uppercase text-[#EBEBEB] text-[32px] font-extrabold leading-[100%] max-w-[85%]">ВЫБЕРИТЕ ЭМОЦИЮ</p>
          <Button onClick={() => setIsShow(!isShow)} className="aspect-square active:scale-95">
            <svg className={clsx("transition-all", isShow && "rotate-180")} width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.707 10.9141L10.207 1.41406L0.707031 10.9141" stroke="#ADADAD" strokeWidth="2"/>
            </svg>
          </Button>
        </div>
        <p className="text-[#B7B7B7] text-[22px] leading-[100%] mt-[19px] px-[16px]">И букет сам подстроится под ваше состояние</p>
        <AnimationHeightWrapper isOpen={isShow}>
          <div className="flex flex-col gap-[8px] mt-[41px]">
            {Array.from({ length: Math.ceil(list.length / 2) }).map((_, rowIndex) => {
              const startIndex = rowIndex * 2;
              const rowItems = list.slice(startIndex, startIndex + 2);

              return (
                <div key={rowIndex} className="overflow-x-auto px-[16px] scrollbar-hide">
                  <div className="flex gap-[8px] min-w-max">
                    {rowItems.map(({imgSrc, title}, itemIndex) => {
                      const index = startIndex + itemIndex;
                      return (
                        <Button
                          key={index}
                          onClick={() => handleClick(index)}
                          className="active:scale-[0.98] relative"
                        >
                          <DashedWrapper
                            className={`rounded-[19px] flex items-center gap-[9.5px] h-full whitespace-nowrap ${activeIndex === index ? '!border-solid !border-[3px] !border-yellow p-[4.5px_12.7px]': 'p-[6.5px_14.7px]'}`}
                          >
                            <div className="h-full flex-center">
                              <Image src={imgSrc} alt="type-img" width={69} height={69} className="min-w-[69px]"/>
                            </div>
                            <h5 className={clsx("text-[17.5px] transition-all", activeIndex === index && 'text-yellow')}>{title}</h5>
                          </DashedWrapper>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimationHeightWrapper>
      </LgShow>
    </div>
  );
};