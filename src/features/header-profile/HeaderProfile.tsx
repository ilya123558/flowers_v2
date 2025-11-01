'use client'
import { Button } from "@/shared/button/Button";
import { setOpenBasket, useAppDispatch } from "@/views/store";
import Image from "next/image";

export const HeaderProfile = () => {
  const dispatch = useAppDispatch()
  const isAuth = true
  const userData = {
    name: 'Лиля',
    img_url: '/images/main/user-img.png',
  }
  
  const basketCount = 3

  return (
    <div className="">
      {isAuth
        ? (
          <div className="flex-center">
            <Button onClick={() => dispatch(setOpenBasket())} className="relative active:scale-95">
              <div className="w-[50px] aspect-square rounded-full bg-button-light-bg flex-center">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7823 9.1875V5.25C13.7823 4.37976 13.4366 3.54516 12.8212 2.92981C12.2059 2.31445 11.3713 1.96875 10.5011 1.96875C9.63081 1.96875 8.79621 2.31445 8.18086 2.92981C7.56551 3.54516 7.2198 4.37976 7.2198 5.25V9.1875M17.1563 7.44362L18.2614 17.9436C18.3227 18.5255 17.8677 19.0312 17.2823 19.0312H3.7198C3.58174 19.0314 3.44518 19.0025 3.31901 18.9464C3.19284 18.8904 3.07987 18.8084 2.98745 18.7058C2.89503 18.6032 2.82522 18.4824 2.78255 18.3511C2.73989 18.2197 2.72532 18.0809 2.73981 17.9436L3.84581 7.44362C3.87132 7.20174 3.98548 6.97786 4.16627 6.81516C4.34707 6.65246 4.5817 6.56246 4.82493 6.5625H16.1772C16.6812 6.5625 17.1038 6.94312 17.1563 7.44362ZM7.54793 9.1875C7.54793 9.27452 7.51336 9.35798 7.45182 9.41952C7.39029 9.48106 7.30683 9.51562 7.2198 9.51562C7.13278 9.51562 7.04932 9.48106 6.98779 9.41952C6.92625 9.35798 6.89168 9.27452 6.89168 9.1875C6.89168 9.10048 6.92625 9.01702 6.98779 8.95548C7.04932 8.89394 7.13278 8.85938 7.2198 8.85938C7.30683 8.85938 7.39029 8.89394 7.45182 8.95548C7.51336 9.01702 7.54793 9.10048 7.54793 9.1875ZM14.1104 9.1875C14.1104 9.27452 14.0759 9.35798 14.0143 9.41952C13.9528 9.48106 13.8693 9.51562 13.7823 9.51562C13.6953 9.51562 13.6118 9.48106 13.5503 9.41952C13.4887 9.35798 13.4542 9.27452 13.4542 9.1875C13.4542 9.10048 13.4887 9.01702 13.5503 8.95548C13.6118 8.89394 13.6953 8.85938 13.7823 8.85938C13.8693 8.85938 13.9528 8.89394 14.0143 8.95548C14.0759 9.01702 14.1104 9.10048 14.1104 9.1875Z" stroke="#875541" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="absolute border-button-light-bg border-[1px] rounded-full max-h-[20px] h-full aspect-square flex-center bg-dark-blue top-[-2px] right-[-2px]">
                  <p className="text-[15px]">{basketCount}</p>
                </div>
              </div>
            </Button>
            <div className="relative w-[50px] h-[50px] ml-[17px] mr-[14px]">
              <Image src={userData.img_url} alt={'user-img'} fill/>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[12px] font-medium text-secondary-opasity-gray">Доброе утро!</p>
              <p className="text-[16px] font-semibold text-gray mt-[7px]">{userData.name}</p>
            </div>
          </div>
        )
        : (
          <button>
            <p className="text-light-pink text-[15px] font-medium">Войти</p>
          </button>
        )
      }
    </div>
  );
};