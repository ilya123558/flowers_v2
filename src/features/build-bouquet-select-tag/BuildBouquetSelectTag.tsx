'use client'
import { Button } from "@/shared/button/Button";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { DashedWrapper } from "@/shared/wrappers/DashedWrapper";
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
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="">
      <Title23px>
        Выберите эмоцию — букет сам подстроится под ваше чувство
      </Title23px>
      <ul className="flex flex-wrap gap-[16px] mt-[16px]">
        {list.map(({imgSrc, title}, index) => (
          <li key={index}>
            <Button onClick={() => setActiveIndex(index)} className="active:scale-95">
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
    </div>
  );
};