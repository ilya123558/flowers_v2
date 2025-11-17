'use client'

import { AdditionaServices } from "@/features/additiona-services/AdditionaServices";
import { ProductServiceInfoModal } from "@/features/product-service-info-modal/ProductServiceInfoModal";
import { ProductSizeModal } from "@/features/product-size-modal/ProductSizeModal";
import { ProductTagModal } from "@/features/product-tag-modal/ProductTagModal";
import { SelectSize } from "@/features/select-size/SelectSize";
import { BasketButton } from "@/shared/button/BasketButton";
import { Button } from "@/shared/button/Button";
import { Title16px } from "@/shared/text/title16px/Title16px";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { emotionsList } from "@/utils/const/main";
import { incCount, useAppDispatch } from "@/views/store";
import Image from "next/image";
import { useState } from "react";

const flowersList = [
  {
    title: 'Красный тюльпан',
    src: '/images/product/flower-1.png',
  },
  {
    title: 'Роза',
    src: '/images/product/flower-2.png',
  },
  {
    title: 'Жёлтый тюльпан',
    src: '/images/product/flower-3.png',
  },
  {
    title: 'Оранжевая роза',
    src: '/images/product/flower-4.png',
  },
  {
    title: '3 клопа',
    src: '/images/product/flower-1.png',
  },
  {
    title: '1 гусеница',
    src: '/images/product/flower-1.png',
  },
]

export const ProductInfo = () => {
  const dispatch = useAppDispatch()
  const [activeSizeIndex, setActiveSizeIndex] = useState(0)
  const [isOpenProductSizeModal, setIsOpenProductSizeModal] = useState(false)
  const [isOpenProductTagModal, setIsOpenProductTagModal] = useState(false)
  const [isOpenProductServiceInfoModal, setIsOpenProductServiceInfoModal] = useState(false)
  

  return (
    <div className=" w-full col-span-7">
      <ProductSizeModal isOpen={isOpenProductSizeModal} setIsOpen={setIsOpenProductSizeModal} />
      <ProductTagModal isOpen={isOpenProductTagModal} setIsOpen={setIsOpenProductTagModal} />
      <ProductServiceInfoModal isOpen={isOpenProductServiceInfoModal} setIsOpen={setIsOpenProductServiceInfoModal} />
      <div className="flex justify-between items-center">
        <h4 className="text-[28px] font-bold">Солнечный день</h4>
        <div className="h-[34px] flex items-center gap-[13px]">
          <Button onClick={() => {}} className="h-full active:scale-95">
            <BoxWrapper className="h-full p-[0px_10px]">
              <div className="flex items-center gap-[7px] h-full">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z" stroke="#D46F77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-red">109</p>
              </div>
            </BoxWrapper>
          </Button>
          {/* <Button onClick={() => {}} className="h-full active:scale-95">
            <BoxWrapper className="h-full p-[0px_7px] flex-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6608 2.76765C15.5775 2.87432 16.25 3.66515 16.25 4.58848V17.4993L10 14.3743L3.75 17.4993V4.58848C3.75 3.66515 4.42167 2.87432 5.33917 2.76765C8.43599 2.40818 11.564 2.40818 14.6608 2.76765Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </BoxWrapper>
          </Button> */}
          <Button onClick={() => {}} className="h-full active:scale-95">
            <BoxWrapper className="h-full p-[0px_7px] flex-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.0139 9.08891C5.81212 8.72584 5.49549 8.44005 5.11371 8.2764C4.73193 8.11275 4.30662 8.08051 3.90453 8.18473C3.50245 8.28895 3.14635 8.52375 2.89214 8.85225C2.63793 9.18075 2.5 9.58437 2.5 9.99975C2.5 10.4151 2.63793 10.8187 2.89214 11.1472C3.14635 11.4757 3.50245 11.7105 3.90453 11.8148C4.30662 11.919 4.73193 11.8867 5.11371 11.7231C5.49549 11.5594 5.81212 11.2737 6.0139 10.9106M6.0139 9.08891C6.1639 9.35891 6.24974 9.66891 6.24974 9.99975C6.24974 10.3306 6.1639 10.6414 6.0139 10.9106M6.0139 9.08891L13.9856 4.66058M6.0139 10.9106L13.9856 15.3389M13.9856 4.66058C14.1025 4.8807 14.262 5.0753 14.455 5.23302C14.648 5.39074 14.8704 5.50841 15.1094 5.57914C15.3484 5.64988 15.5991 5.67227 15.8468 5.64499C16.0945 5.61772 16.3343 5.54133 16.5522 5.4203C16.77 5.29927 16.9616 5.13602 17.1156 4.94009C17.2696 4.74417 17.3831 4.5195 17.4493 4.27923C17.5154 4.03896 17.5331 3.78791 17.5011 3.54074C17.4691 3.29358 17.3882 3.05527 17.2631 2.83975C17.0165 2.41503 16.6131 2.10403 16.1396 1.97359C15.6661 1.84316 15.1603 1.9037 14.731 2.14221C14.3017 2.38072 13.9831 2.77815 13.8437 3.24908C13.7043 3.72 13.7552 4.22682 13.9856 4.66058ZM13.9856 15.3389C13.866 15.5542 13.7899 15.791 13.7618 16.0357C13.7337 16.2804 13.7541 16.5282 13.8217 16.7651C13.8894 17.0019 14.0031 17.2231 14.1562 17.416C14.3094 17.6089 14.499 17.7697 14.7143 17.8893C14.9296 18.0089 15.1664 18.085 15.4111 18.1131C15.6558 18.1412 15.9036 18.1208 16.1405 18.0532C16.3773 17.9855 16.5985 17.8718 16.7914 17.7187C16.9843 17.5655 17.1451 17.3759 17.2647 17.1606C17.5063 16.7257 17.5652 16.2127 17.4286 15.7344C17.2919 15.2561 16.9708 14.8517 16.536 14.6102C16.1011 14.3686 15.5881 14.3097 15.1099 14.4463C14.6316 14.583 14.2271 14.9041 13.9856 15.3389Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </BoxWrapper>
          </Button>
        </div>
      </div>
      <p className="mt-[8px] text-[16px] text-title-gray">Жёлтые тюльпаны и герберы</p>
      <ul className="mt-[16px] flex gap-[8px] overflow-x-scroll">
        {emotionsList.map((emotion, index) => (
          <li key={index}>
            <BoxWrapper className="p-[8px_12px] w-fit">
              <p className="text-title-gray text-[14px] font-semibold text-nowrap">{emotion}</p>
            </BoxWrapper>
          </li>
        ))}
      </ul>
      <Title16px className="mt-[16px]">Из чего состоит букет:</Title16px>
      <ul className="mt-[8px] flex gap-[8px] overflow-x-scroll">
        {flowersList.map(({title, src}, index, arr) => {
          if(arr.length > 4 && index > 3) {
            if(index === arr.length - 1) {
              return (
                <li key={index}>
                  <Button onClick={() => setIsOpenProductTagModal(true)} className="active:scale-95 h-full">
                    <BoxWrapper className="p-[5.5px_10px] w-fit flex gap-[4px] items-center h-full">
                      <p className="text-title-gray text-[14px] font-semibold text-nowrap">...</p>
                    </BoxWrapper>
                  </Button>
                </li>
              )
            }
            return (
              <></>
            )
          }
          
          return (
            <li key={index}>
              <Button onClick={() => setIsOpenProductTagModal(true)} className="active:scale-95 h-full">
                <BoxWrapper className="p-[5.5px_10px] w-fit flex gap-[4px] items-center">
                  <div className="relative w-[32px] aspect-square">
                    <Image src={src} alt="flower" fill />
                  </div>
                  <p className="text-title-gray text-[14px] font-semibold text-nowrap">{title}</p>
                </BoxWrapper>
              </Button>
            </li>
          )
        })}
      </ul>
      <div className="w-full bg-box-gray h-[1px] mt-[24px]"></div>
      <div className="flex justify-between">
        <Title16px className="mt-[16px]">Выберите размер:</Title16px>
        <Button onClick={() => setIsOpenProductSizeModal(true)}>
          <Title16px className="mt-[16px] underline">Оценить размер</Title16px>
        </Button>
      </div>
      <SelectSize activeSizeIndex={activeSizeIndex} setActiveSizeIndex={setActiveSizeIndex}/>
      <div className="w-full bg-box-gray h-[1px] mt-[24px]"></div>
      <div className="mt-[24px] flex sm:flex-row flex-col gap-[20px] sm:items-center">
        <div className="flex gap-[20px] items-center">
          <h5 className="text-[34px] font-semibold">2 390 ₽</h5>
          <Button onClick={() => setIsOpenProductServiceInfoModal(true)} className="flex-center gap-[5px] w-fit active:scale-95">
            <p className="text-[14px] font-medium">+ 1 900 ₽ за сервис</p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM7.5 10.375C7.5 10.4438 7.44375 10.5 7.375 10.5H6.625C6.55625 10.5 6.5 10.4438 6.5 10.375V6.125C6.5 6.05625 6.55625 6 6.625 6H7.375C7.44375 6 7.5 6.05625 7.5 6.125V10.375ZM7 5C6.80374 4.99599 6.61687 4.91522 6.47948 4.775C6.3421 4.63478 6.26515 4.4463 6.26515 4.25C6.26515 4.0537 6.3421 3.86522 6.47948 3.725C6.61687 3.58478 6.80374 3.50401 7 3.5C7.19626 3.50401 7.38313 3.58478 7.52052 3.725C7.6579 3.86522 7.73485 4.0537 7.73485 4.25C7.73485 4.4463 7.6579 4.63478 7.52052 4.775C7.38313 4.91522 7.19626 4.99599 7 5Z" fill="#8C8C8C"/>
            </svg>
          </Button>
        </div>
        <div className="p-[8px_12px] flex gap-[4px] items-center bg-dark rounded-[10px]">
          <div className="relative w-[16px] aspect-square">
            <Image src={'/images/product/coins.png'} alt="coins" fill />
          </div>
          <p className="text-[14px] font-semibold text-gray">вы получите 135 балла</p>
        </div>
      </div>
      <div className="sm:mt-[12px] mt-[8px] flex sm:flex-row flex-col gap-[8px] sm:items-center text-gray">
        <div className="p-[12px] flex gap-[4px] items-center bg-dark rounded-[10px]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5.5C14 3.84333 12.6007 2.5 10.8747 2.5C9.58467 2.5 8.47667 3.25067 8 4.322C7.52333 3.25067 6.41533 2.5 5.12467 2.5C3.4 2.5 2 3.84333 2 5.5C2 10.3133 8 13.5 8 13.5C8 13.5 14 10.3133 14 5.5Z" fill="#B3B3B3"/>
          </svg>
          <p className="text-[14px] font-semibold">
            <span className="text-green">3,200 </span>
            покупателей добавили в Избранное
          </p>
        </div>
        <Button onClick={() => {}} className="p-[12px] flex gap-[4px] items-center bg-dark rounded-[10px] active:scale-95">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5.5C14 3.84333 12.6007 2.5 10.8747 2.5C9.58467 2.5 8.47667 3.25067 8 4.322C7.52333 3.25067 6.41533 2.5 5.12467 2.5C3.4 2.5 2 3.84333 2 5.5C2 10.3133 8 13.5 8 13.5C8 13.5 14 10.3133 14 5.5Z" fill="#B3B3B3"/>
          </svg>
          <p className="text-[14px] font-semibold">67 отзывов. <span className="underline">Посмотреть</span></p>
        </Button>
      </div>
      <div className="flex items-center gap-[16px] sm:h-[71px] h-[50px] mt-[24px]">
        <Button onClick={() => {}} className="bg-yellow flex-center gap-[8px] h-full sm:p-[0px_26px] p-[0px_12px] rounded-[11px] active:scale-95 sm:w-fit w-full">
          <div className="relative w-[21px] aspect-square">
            <Image src={'/images/product/lightning.png'} alt="lightning" fill />
          </div>
          <p className="text-black font-bold sm:text-[20px] text-[16px] text-nowrap">Купить сейчас</p>
        </Button>
        <BasketButton handleClick={() => dispatch(incCount())} withBorder className="sm:w-fit w-full"/>
      </div>
      <AdditionaServices />
    </div>
  );
};