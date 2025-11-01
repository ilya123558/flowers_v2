'use client'
import { formatPrice } from "@/utils/libs/formatPrice";
import { InfoWithToggle } from "../info-with-toggle/InfoWithToggle";
import { ISelectItem, Select } from "../select/Select";
import { Button } from "../button/Button";
import { useState } from "react";
import { selectDeliveryList, selectSubscribeDateList, selectDayList, selectTimeList } from "@/utils/const/selectList";
import { AnimationHeightWrapper } from "../wrappers/AnimationHeightWrapper";

export const BasketServicesItemSettingSub = () => {
  const [activeDeliveryItem, setActiveDeliveryItem] = useState<ISelectItem>(selectDeliveryList[0]);
  const [activeSubscribeDateItem, setActiveSubscribeDateItem] = useState<ISelectItem>(selectSubscribeDateList[0]);
  const [activeDayItem, setActiveDayItem] = useState<ISelectItem>(selectDayList[0]);
  const [activeTimeItem, setActiveTimeItem] = useState<ISelectItem>(selectTimeList[0]);
  const [toggle, setToggle] = useState(false)
  const [isChangeTime, setIsChangeTime] = useState(false)

  const handleDeliveryItemChange = (item: ISelectItem) => {
    setActiveDeliveryItem(item);
  };

  const handleSubscribeDateItemChange = (item: ISelectItem) => {
    setActiveSubscribeDateItem(item);
  };

  const handleDayItemChange = (item: ISelectItem) => {
    setActiveDayItem(item);
  };

  const handleTimeItemChange = (item: ISelectItem) => {
    setActiveTimeItem(item);
  };

  return (
    <div className="border-border-gray pb-[16px] border-b-[1px] border-dashed mt-[16px]">
      <InfoWithToggle
        text="Курьер в костюме и белых перчатках вручит букет по этикету. Согласуем время и после пришлём отчёт с реакцией."
        title="Настроить подписку"
        toggle={toggle}
        setToggle={setToggle}
      >
        <div className="pt-[11px]">
          <div className="relative z-[14]">
            <Select
              bgColor="#38362D"
              selectList={selectDeliveryList} 
              activeItem={activeDeliveryItem}
              handleChange={handleDeliveryItemChange} 
              classNameText="!mb-[11px]"
            >
              Как часто доставлять
            </Select>
          </div>
          <div className="relative z-[13]">
            <Select 
              bgColor="#38362D"
              selectList={selectSubscribeDateList} 
              activeItem={activeSubscribeDateItem}
              handleChange={handleSubscribeDateItemChange} 
              classNameText="!mb-[11px]"
              className="mt-[11px]"
            >
              Срок подписки
            </Select>
          </div>
          <div className="mt-[11px] flex justify-between items-center leading-[151%]">
            <p className="text-[14px] text-[#D9D9D9]">Подписка</p>
            <div className="flex gap-[11px] items-center text-[14px] font-semibold">
              <p className="line-through">{formatPrice(51480)} ₽</p>
              <p className="text-green">-15%</p>
              <p>{formatPrice(43758)} ₽</p>
            </div>
          </div>
          <AnimationHeightWrapper isOpen={!isChangeTime}>
            <div className="pt-[11px]">
              <p className="leading-[151%] text-[#8C8C8C] text-[16px]">Доставка по понедельникам с 8:00 до 9:00.</p>
              <Button onClick={() => setIsChangeTime(true)}><p className="text-[#8C8C8C] text-[16px] leading-[151%] underline active:scale-95">Изменить</p></Button>
            </div>
          </AnimationHeightWrapper>
          <AnimationHeightWrapper isOpen={isChangeTime} withoutOverflowHidden>
            <div className="pt-[11px]">
              <div className="relative z-[11]">
                <Select
                  bgColor="#38362D"
                  selectList={selectDayList} 
                  activeItem={activeDayItem}
                  handleChange={handleDayItemChange} 
                  classNameText="!mb-[11px]"
                >
                  День доставки
                </Select>
              </div>
              <div className="mt-[11px]">
                <Select
                  bgColor="#38362D"
                  selectList={selectTimeList} 
                  activeItem={activeTimeItem}
                  handleChange={handleTimeItemChange} 
                  classNameText="!mb-[11px]"
                >
                  Время доставки
                </Select>
              </div>
            </div>
          </AnimationHeightWrapper>
        </div>
      </InfoWithToggle>
    </div>
  );
};