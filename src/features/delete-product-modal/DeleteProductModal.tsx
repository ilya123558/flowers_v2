'use client'
import { Button } from "@/shared/button/Button";
import { ModalWrapper } from "@/shared/wrappers/ModalWrapper";
import { TClassName } from "@/utils/types/main";
import Image from "next/image";

type TProps = TClassName<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  handleDelete: () => void
}>

export const DeleteProductModal = (props: TProps) => {
  return (
    <ModalWrapper {...props} className="aspect-[305/410] w-[305px] !bg-[#2B2A24] !p-[24px]">
      <h5 className="text-[20px] font-bold text-white roboto-flex leading-[100%]"><span>Уверены, что хотите удалить?</span></h5>
      <div className="mt-[25px] relative w-full aspect-[257/183] overflow-hidden rounded-[17px]">
        <Image src={'/images/product/product-main.png'} alt="flowers-img" fill className="object-cover"/>
      </div>
      <div className="mt-[8px]">
        <h6 className="text-[#C8C8C8] text-[18px] font-bold roboto"><span>Солнечный день</span></h6>
        <p className="mt-[8px] text-[16px] text-[#B9BBBF]">Жёлтые тюльпаны и герберы</p>
      </div>
      <div className="mt-[25px] flex justify-end gap-[11px] text-white roboto">
        <Button onClick={() => props.handleDelete()} className="rounded-[8px] p-[13.5px_25.5px] leading-[100%] bg-[#252525] active:scale-95">
          <p className="text-[14px] font-medium">Да</p>
        </Button>
        <Button onClick={() => props.setIsOpen(false)} className="rounded-[8px] p-[13.5px_10px] leading-[100%] bg-[#252525] active:scale-95 border-[1px] border-yellow">
          <p className="text-[14px] font-medium">Отменить</p>
        </Button>
      </div>
    </ModalWrapper>
  );
};