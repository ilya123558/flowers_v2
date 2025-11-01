'use client'
import { Button } from "@/shared/button/Button";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { ModalWrapper } from "@/shared/wrappers/ModalWrapper";
import { TClassName } from "@/utils/types/main";
import { SelectSize } from "../select-size/SelectSize";
import { useState } from "react";
import Image from "next/image";

type TProps = TClassName<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}>

export const ProductSizeModal = (props: TProps) => {
  const [activeSizeIndex, setActiveSizeIndex] = useState(0)
  const sizesList = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <ModalWrapper {...props} className="aspect-[376/617] w-[376px]">
      <div className="text-[#D9D9D9]">
        <div className="flex items-center justify-between">
          <h5 className="text-[18px] font-bold">Оцените размер букета</h5>
          <Button 
            onClick={() => props.setIsOpen(false)} 
            className="text-[14px] font-medium underline active:scale-95"
          >
              Закрыть
          </Button>
        </div>
        <div className="mt-[25px]">
          <Title16px>Выберите размер:</Title16px>
          <SelectSize activeSizeIndex={activeSizeIndex} setActiveSizeIndex={setActiveSizeIndex} sizesList={sizesList}/>
        </div>
        <div className="mt-[8px] relative w-full aspect-[328/428]">
          <Image src={`/images/product/flowers-size-${sizesList[activeSizeIndex]}.png`} alt="flowers-size" quality={100} fill />
        </div>
      </div>
    </ModalWrapper>
  );
};