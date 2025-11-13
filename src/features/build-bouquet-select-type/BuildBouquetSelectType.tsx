'use client'
import { Button } from "@/shared/button/Button";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { Title23px } from "@/shared/text/title23px/Title23px";
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
        <Title16px className="mt-[24px] pl-[16px]">
          Выберите тип букета
        </Title16px>
        <ul className="h-[108px] mt-[16px] flex gap-[8px] overflow-x-scroll px-[16px]">
          {list.map(({imgSrc, subtitle, title, isNew}, index) => (
            <Button key={index} onClick={() => setActiveIndex(index)} className="active:scale-[0.98]">
              <DashedWrapper 
                className={`w-[284px] relative rounded-[19px] flex items-center justify-between h-full gap-[9.6px] ${activeIndex === index ? '!border-solid !border-[3px] !border-yellow p-[13.25px_11px]': 'p-[14.25px_12.7px]'}`}
              >
                <div className="h-full flex-center">
                  <Image src={imgSrc} alt="type-img" width={62} height={62} className="min-w-[62px]"/>
                </div>
                <div className="text-start">
                  <h5 className={clsx("text-[17.5px] font-black transition-all", activeIndex === index && 'text-yellow')}>{title}</h5>
                  <p className={clsx("mt-[10px] text-[12.7px] text-gray transition-all", activeIndex === index && 'text-yellow')}>{subtitle}</p>
                </div>
                <div className={clsx("transition-all absolute bottom-[10px] right-[13px] opacity-0 pointer-events-none", activeIndex === index && "opacity-100")}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" fill="white" fillOpacity="0.01"/>
                    <path d="M15.1437 2.25H13.8955C13.7205 2.25 13.5544 2.33036 13.4473 2.46786L6.08478 11.7946L2.55442 7.32143C2.50101 7.25362 2.43294 7.1988 2.35531 7.16106C2.27768 7.12333 2.19252 7.10368 2.1062 7.10357H0.85799C0.738347 7.10357 0.672275 7.24107 0.74549 7.33393L5.63656 13.5304C5.86513 13.8196 6.30442 13.8196 6.53478 13.5304L15.2562 2.47857C15.3294 2.3875 15.2633 2.25 15.1437 2.25Z" fill="#FFCC00"/>
                  </svg>
                </div>
                {isNew && (
                  <div className="absolute top-[10px] right-[10px] p-[3px] bg-[#50AF19] roboto rounded-[0px_5px_5px_5px]">
                    <p className="text-[12px] font-semibold leading-[100%] text-[#252525]">Новинка</p>
                  </div>
                )}
              </DashedWrapper>
            </Button>
          ))}
        </ul>
      </LgShow>

    </div>
  );
};