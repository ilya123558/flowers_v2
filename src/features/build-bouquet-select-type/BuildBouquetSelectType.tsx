'use client'
import { Button } from "@/shared/button/Button";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { DashedWrapper } from "@/shared/wrappers/DashedWrapper";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const list = [
  {
    imgSrc: '/images/home/select-types/img-1.png',
    title: 'Монобукеты',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа'
  },
  {
    imgSrc: '/images/home/select-types/img-2.png',
    title: 'Авторские',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа'
  },
  {
    imgSrc: '/images/home/select-types/img-3.png',
    title: 'Авторские',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа'
  },
  {
    imgSrc: '/images/home/select-types/img-4.png',
    title: 'В коробке',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа'
  },
  {
    imgSrc: '/images/home/select-types/img-5.png',
    title: 'Коллекции',
    subtitle: 'Букеты созданные из сезонных цветов'
  },
]

export const BuildBouquetSelectType = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="">
      <Title23px>
        Выберите тип букета
      </Title23px>
      <ul className="grid grid-cols-5 gap-[16px] h-[125px] mt-[16px]">
        {list.map(({imgSrc, subtitle, title}, index) => (
          <Button key={index} onClick={() => setActiveIndex(index)} className="active:scale-95">
            <DashedWrapper 
              className={`w-full rounded-[19px] flex items-center justify-between h-full gap-[9.6px] ${activeIndex === index ? '!border-solid !border-[3px] !border-yellow p-[13.25px_11px]': 'p-[14.25px_12.7px]'}`}
            >
              <div className="h-full flex-center">
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
    </div>
  );
};