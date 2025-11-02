'use client'
import { formatPrice } from "@/utils/libs/formatPrice"
import { DeleteButton } from "../button/DeleteButton"
import { Title16px } from "../text/title16px/Title16px"
import { AnimationHeightWrapper } from "../wrappers/AnimationHeightWrapper"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { ToggleDefault } from "../toggle/ToggleDefoult"
import { Tooltip } from "../tooltip/Tooltip"
import { InfoWithToggle } from "../info-with-toggle/InfoWithToggle"
import { ISelectItem, Select } from "../select/Select"
import { selectDeliveryList, selectSubscribeDateList } from "@/utils/const/selectList"
import { Button } from "../button/Button"
import { BasketServicesItemSettingSub } from "../basket-services-item-setting-sub/BasketServicesItemSettingSub"
import { AnimatePresence, motion } from "framer-motion"
import { DeleteProductModal } from "@/features/delete-product-modal/DeleteProductModal"

export interface IAdditionalServicesProductItem {
  id: string
  title: string, 
  size: {
    title: string,
    price: number
  }
}

export interface IAdditionalServicesItem {
  items: IAdditionalServicesProductItem[],
  premium_delivery: boolean,
  subscribe: {
    term: string,
    frequency: string,
    price: number
  }
}

type TProps = IAdditionalServicesItem & {
  isTarget?: boolean
  handleDeleteItem: (id: string) => void
}

export const BasketServicesItem = (props: TProps) => {
  const [data, setData] = useState<IAdditionalServicesProductItem[]>([])
  const [premiumDeliveryToggle, setPremiumDeliveryToggle] = useState(false)
  const [isOpenDeleteProductModal, setIsOpenDeleteProductModal] = useState(false)
  const service_price = 1900 
  const handleDeleteRef = useRef(() => {})

  const handleDelete = (id: string) => {
    handleDeleteRef.current = () => {
      setIsOpenDeleteProductModal(false)
      props.handleDeleteItem(id)
    }

    setIsOpenDeleteProductModal(true)
  }
  
  useEffect(() => {
    setData(props.items)
  }, [props])

  if(!data || data.length === 0) return <></>

  return (
    <div className="w-full p-[20px] bg-[#444239] rounded-[10px] mb-[25px]">
      <DeleteProductModal 
        isOpen={isOpenDeleteProductModal} 
        setIsOpen={setIsOpenDeleteProductModal} 
        handleDelete={() => handleDeleteRef.current()} 
      />
      <ul className="flex flex-col gap-[16px]">
        {data.map((item, index) => (
          <li key={index} className="flex flex-col gap-[12px] border-border-gray pb-[16px] border-b-[1px] border-dashed">
            <div className="flex justify-between items-center">
              <p className="text-[16px] font-bold">{item.title}</p>
              <DeleteButton onClick={() => handleDelete(item.id)} />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px]">Размер {item.size.title}</p>
              <p className="text-[14px] font-bold">{formatPrice(item.size.price)} ₽</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[14px]">Сервис</p>
              <p className="text-[14px] font-bold">{formatPrice(service_price)} ₽</p>
            </div>
          </li>
        ))}
      </ul>
      <BasketServicesItemSettingSub />
      <div className="mt-[16px]">
        <InfoWithToggle 
          text="Курьер в костюме и белых перчатках вручит букет по этикету. Согласуем время и после пришлём отчёт с реакцией."
          title="Премиум доставка"
          toggle={premiumDeliveryToggle}
          setToggle={setPremiumDeliveryToggle}
        />
        <div className="relative h-[20px] overflow-hidden mt-[8px]">
            {premiumDeliveryToggle ? (
              <div
                className="absolute w-full flex justify-between items-center"
              >
                <p className="text-[14px]">Премиум-вручение с фотоотчётом</p>
                <p className="text-[14px] font-semibold">от {formatPrice(2500)} ₽</p>
              </div>
            ) : (
              <div
                className="absolute w-full flex justify-between items-center"
              >
                <p className="text-[14px]">Доставка Яндексом</p>
                <p className="text-[14px] font-semibold">от {formatPrice(120)} ₽</p>
              </div>
            )}
        </div>
      </div>
      <div className="mt-[16px] bg-opasity-gray w-full h-[2px]"></div>
      <div className="mt-[16px] flex items-center justify-between h-[33px]">
        <p className="text-[16px] font-medium">Итого за букет</p>
        <p className="text-[22px]">{formatPrice(55000)} ₽</p>
      </div>
      <div 
        className={clsx(
          "mt-[16px] w-full p-[15px] rounded-[10px] bg-[#36352E] flex items-center gap-[10px] transition-all will-change-transform border-[1px] border-transparent", 
          props.isTarget && 'p-[40px_15px] border-yellow '
        )}
      >
        <div className="">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="32" height="32" fill="url(#pattern0_1260_11210)" fillOpacity="0.7"/>
            <defs>
            <pattern id="pattern0_1260_11210" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_1260_11210" transform="scale(0.01)"/>
            </pattern>
            <image id="image0_1260_11210" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADYklEQVR4nO2dPU8VQRiFxxjtBBN7a78KWztLAyiSWPojtLO0MhQgN6H1T1gYY6z8CX5i7ICLdhZAbCB5zCaTsAy7cO+yH+/ue57kFuzdzJ6zh50ZZndfQhBCCCGEEEIIIUQPAeaALSbnN7BQ0M5C/M7K/g9L9i8jOwdzoWuAMdOzXdDOtrH9xxV8jUPXUI2tKU/YVgf7VwmE0DUVNO8A8wXtzJd0ETsd7V/WxZ1K6Bpzgrz7NyfIu39zgrz7NyfIu39zgrz7NyfIu/9kargTnIE1/3G+vh0/J+bzQwfn/oUQQgxvUBt7HdSw5t/ctM+7f3N/GHn3b06Qd//mBHn3b06Qd//mBjXv/r2v5eDcvxBCiAHR1FoOcBtYA74B+/Sf/ejlNXCrrvPU+LQPuAysA4cMl0NgBFyqJ4XjJ/AYNYTxET98qD2U9AjnbCu7MrwxMhlIHDPSbuo78Ai4EnpO5gFYBH4kHg+AmxYDWSsIYyYMDGAW2Ei8rpob1GMAeRbDQAGWEq9fza3lALuJyN53U2VkV37idTdYo66ury+Y92teoDe/5gV682teYF/81rWWpUDsTXsViKWGFUhNKJBqKJAEYDl0iAJJiIdZHmIgvRzUOeJl08dqO5C61rK6CqSTUEgI1mhbICdptftSIGcH0mooCmSyQFoLRYFMHkgroTTmN9YmHMfPgjmB1QJpfKBvMpC+T3s7CSU9kLmGGxNYApPTSPelQKoH0kgoCuR8gdQeigI5fyC1hqJAEs448b+At/GB6GfAY+AucDXUhAJJKAgh/xjrq9AwrQUyAWW11rsM5A9wD9iMP/9t+kE9S4GU1VrvKpDPwPW47UVu+/O+BjLNf0Y4rdZ6F4G8y18JwDXgX/xus5EXaloIZG7KwvVltdbbDmQduFiw/U1OxtMGj9+q394KBO7kZHwBLgzZby8EAp9yUu4P3a95gcCT+P7fA10hVgV682teoDe/5gV682teoDe/5gV682teoDe/5gV686vXoo0RSxflUeGALol1pPJkNUFmwzBLa/xMvK4Ea2RFvQqKz2zE36aZMIxuaqkgjKz4zI1gkXgP2xurwSrZDaG4qOeF903eBKszlFG8lIfKQRwzbYdRMKasZjMQYI/+sxe9rJgdM4QQQgghhBAiHPEfezuJPEKX4H0AAAAASUVORK5CYII="/>
            </defs>
          </svg>
        </div>
        <p className="leading-[100%] text-light-gray text-[14px]">Переместите ещё один букет, чтобы сэкономить на сервисах.</p>
      </div>
    </div>
  );
};