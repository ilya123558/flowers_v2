'use client'
import { useState } from "react";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { BoxWrapper } from "../wrappers/BoxWrapper";
import { ISelectItem, Select } from "../select/Select";
import { AnimationHeightWrapper } from "../wrappers/AnimationHeightWrapper";
import { selectDeliveryList, selectSubscribeDateList } from "@/utils/const/selectList";
import { InfoWithToggle } from "../info-with-toggle/InfoWithToggle";
import { BasketButton } from "../button/BasketButton";

export const AdditionaServicesSubscribe = () => {
  const [isCheckedSubscribe, setIsCheckedSubscribe] = useState(false);
  const [activeDeliveryItem, setActiveDeliveryItem] = useState<ISelectItem>(selectDeliveryList[0]);
  const [activeSubscribeDateItem, setActiveSubscribeDateItem] = useState<ISelectItem>(selectSubscribeDateList[0]);

  const handleDeliveryItemChange = (item: ISelectItem) => {
    setActiveDeliveryItem(item);
  };

  const handleSubscribeDateItemChange = (item: ISelectItem) => {
    setActiveSubscribeDateItem(item);
  };

  return (
    <BoxWrapper className="w-full p-[16px_24px] rounded-[14px]">
      <InfoWithToggle 
        toggle={isCheckedSubscribe} 
        setToggle={setIsCheckedSubscribe} 
        text="Курьер в костюме и белых перчатках вручит букет по этикету. Согласуем время и после пришлём отчёт с реакцией." 
        title="Настроить подписку" 
      />

      <AnimationHeightWrapper isOpen={isCheckedSubscribe} withoutOverflowHidden className="">
        <p className="pt-[16px] text-[16px] text-secondary">
          Подпишитесь — и цветы будут приходить тогда, когда хочется.
        </p>
        <div className="flex sm:flex-row flex-col gap-[11px] pt-[16px]">
          <Select 
            selectList={selectDeliveryList} 
            activeItem={activeDeliveryItem}
            handleChange={handleDeliveryItemChange} 
            className="z-[12]"
            bgColor="#111111"
          >
            Как часто доставлять
          </Select>
          <Select 
            selectList={selectSubscribeDateList} 
            activeItem={activeSubscribeDateItem}
            handleChange={handleSubscribeDateItemChange} 
            bgColor="#111111"
          >
            Срок подписки
          </Select>
        </div>
              <div className="sm:mt-[16px] mt-[30px] w-full flex items-center justify-between h-[40px]">
        <div className="flex sm:items-center justify-center sm:flex-row flex-col gap-[8px] text-[14px] font-semibold">
          <p className="line-through">51 480 ₽</p>
          <p className="text-green">скидка -15% за подписку</p>
          <p>43 758 ₽</p>
        </div>
        <BasketButton handleClick={() => {}} className="!p-[0px]"/>
      </div>
      </AnimationHeightWrapper>

    </BoxWrapper>
  );
};
