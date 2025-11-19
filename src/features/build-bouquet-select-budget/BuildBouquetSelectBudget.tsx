'use client'
import { Button } from "@/shared/button/Button";
import { Checkbox } from "@/shared/checkbox/Checkbox";
import { PriceSlider } from "@/shared/price-slider/PriceSlider";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { DashedWrapper } from "@/shared/wrappers/DashedWrapper";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
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

export const BuildBouquetSelectBudget = () => {
  const [includeServiceCost, setIncludeServiceCost] = useState(false)
  const [minValue, setMinValue] = useState(3000)
  const [maxValue, setMaxValue] = useState(8000)

  return (
    <div className="">
      <LgHidden>
        <div className="flex justify-between items-center">
          <Title23px>
            Каков ваш бюджет
          </Title23px>
          <Checkbox isChecked={includeServiceCost} setIsChecked={setIncludeServiceCost}>
            <p className="text-[#8C8C8C]">Включить стоимость сервиса</p>
          </Checkbox>
        </div>
      </LgHidden>
      <LgShow>
        <div className="flex items-center gap-[47px] px-[36px]">
          <div className="">
            <Checkbox isChecked={includeServiceCost} setIsChecked={setIncludeServiceCost} className="!rounded-[8px] !w-[25px]"/>
          </div>
          <div className="flex flex-col gap-[7px] w-fit roboto">
            <p className="text-[#D9D9D9] text-[16px] leading-[118%]">Включить стоимость сервиса </p>
            <Button onClick={() => {}} className="p-[6px] w-full border-[1px] border-yellow rounded-[8px] active:scale-[0.98]">
              <p className="text-yellow text-[14px] leading-[100%]">Что я оплачиваю?</p>
            </Button>
          </div>
        </div>
      </LgShow>
      <PriceSlider
        minValue={minValue}
        maxValue={maxValue}
        setMinValue={setMinValue}
        setMaxValue={setMaxValue}
        minLimit={0}
        maxLimit={20000}
      />
    </div>
  );
};