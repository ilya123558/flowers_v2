'use client'
import { Button } from "@/shared/button/Button";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { Toggle } from "@/shared/toggle/Toggle";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { SmHidden } from "@/shared/wrappers/SizeHidden";
import { SmShow } from "@/shared/wrappers/SizeShow";
import clsx from "clsx";
import { useState } from "react";

export const CategoryForPoints = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const categoryList = ['Все', 'Открытки', 'Аромамасла', 'Свечи', 'Шоколад', 'Мягкие игрушки', 'Украшения', 'Фоторамка', 'Сертификаты в СПА']

  return (
    <div className="mt-[27px]">
      <SmHidden>
        <Title23px>Выберите категорию</Title23px>
        <ul className="mt-[16px] h-[43px] flex gap-[11px] overflow-x-scroll">
          {categoryList.map((item, index) => (
            <li key={index} className="h-full">
              <Button onClick={() => setActiveIndex(index)} className="h-full active:scale-95">
                <BoxWrapper className={clsx("flex-center gap-[8px] h-full p-[0px_10px] border-[1px] border-box-gray", activeIndex === index && '!border-yellow')}>
                  <Toggle isToggle={activeIndex === index} />
                  <p className="text-[14px] font-medium text-nowrap">{item}</p>
                </BoxWrapper>
              </Button>
            </li>
          ))}
        </ul>
      </SmHidden>
      <SmShow>
        <div className="mt-[16px] flex flex-col gap-[11px]">
          {Array.from({ length: Math.ceil(categoryList.length / 4) }, (_, rowIndex) => (
            <ul key={rowIndex} className="flex gap-[11px] overflow-x-auto px-[16px]">
              {categoryList.slice(rowIndex * 4, rowIndex * 4 + 4).map((item, index) => {
                const actualIndex = rowIndex * 4 + index;
                return (
                  <li key={actualIndex} className="h-[43px]">
                    <Button onClick={() => setActiveIndex(actualIndex)} className="h-full active:scale-95">
                      <BoxWrapper className={clsx("flex-center gap-[8px] h-full p-[0px_10px] border-[1px] border-box-gray", activeIndex === actualIndex && '!border-yellow')}>
                        <p className="text-[14px] font-medium text-nowrap">{item}</p>
                      </BoxWrapper>
                    </Button>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </SmShow>
    </div>
  );
};