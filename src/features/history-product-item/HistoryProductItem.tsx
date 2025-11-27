'use client'
import { Button } from "@/shared/button/Button"
import { AnimationHeightWrapper } from "@/shared/wrappers/AnimationHeightWrapper"
import { discount, premium_delivery_price } from "@/utils/const/main"
import { formatPrice } from "@/utils/libs/formatPrice"
import { THistoryProductItem } from "@/utils/types/history"
import clsx from "clsx"
import { useState } from "react"

export const HistoryProductItem = (product: THistoryProductItem) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <div className="bg-[#393939] rounded-[8px] sm:p-[20px] p-[10px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[16px]">
          <img src="/images/product/product-main.png" alt="product" className="object-cover object-center w-[34px] h-[56px] rounded-[2px]"/>
          <div className="flex flex-col sm:text-[16px] text-[14px] font-medium leading-[151%]">
            <p className={showAll ? "!text-[#D9D9D9] " : "text-[#8C8C8C]"}>
              {showAll 
                ? `Заказ от ${product.date}`
                : product.date
              }
            </p>
            <p className="text-[#D9D9D9] sm:text-[16px] text-[14px]">
              {showAll 
                ? <span className="underline font-bold">{product.title }</span>
                : (
                    <>
                      Букет “{product.title}”, {product.size}{
                        product.subscription.premium_delivery && ', Премиум доставка'
                      }{
                        product.subscription.subscription?.delivery_date && `, Подписка: ${product.subscription.subscription?.delivery_date}`
                      }
                    </>
                  )
              }
            </p>
          </div>
        </div>
        {!showAll && <p className="sm:text-[22px] text-[16px] text-[#D9D9D9] leading-[151%] text-nowrap">{formatPrice(product.price)} ₽</p>}
      </div>
      <AnimationHeightWrapper isOpen={showAll}>
        <div className="p-[8px_0px]">
          <div className="leading-[151%] text-[#D9D9D9] flex flex-col sm:gap-[8px]">
            <div className="flex items-center justify-between sm:text-[16px] text-[14px]">
              <p>Размер XS</p>
              <p className="font-bold">{formatPrice(2390)} ₽</p>
            </div>
            <div className="flex items-center justify-between sm:text-[16px] text-[14px]">
              <p>Сервис</p>
              <p className="font-bold">{formatPrice(1900)} ₽</p>
            </div>
          </div>
          <div className="">
            <p className="text-[#D9D9D9] sm:text-[16px] text-[14px] font-bold sm:mt-[16px] mt-[8px] leading-[151%]">Дополнительные сервисы</p>
            <div className="leading-[151%] text-[#D9D9D9] flex flex-col sm:gap-[8px] mt-[8px] sm:text-[16px] text-[14px]">
              <div className="flex items-center justify-between">
                <p>Премиум доставка</p>
                <p className="font-bold">{formatPrice(premium_delivery_price)} x {product.delivery_status.tital} = {formatPrice(premium_delivery_price * product.delivery_status.tital)} ₽</p>
              </div>
              <div className="flex items-center justify-between sm:text-[16px] text-[14px]">
                <p>Подписка: Каждую неделю, 3 мес</p>
                <div className="flex items-center gap-[4px] text-nowrap">
                  <div className="bg-[#EFEFEF] rounded-[10px] h-[18px] flex-center">
                    <p className="text-[#404040] text-[12px] font-bold p-[0px_2px]">-{discount}%</p>
                  </div>
                  <p className="font-bold line-through">{formatPrice(59500)} ₽</p>
                  <p className="font-bold">{formatPrice(50575)} ₽</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[16px] bg-[#525252] rounded-[8px] sm:p-[16px_8px] p-[16px] flex justify-between sm:flex-row flex-col items-center sm:gap-[0px] gap-[20px]">
            <div className="flex items-center gap-[8px] text-[#D9D9D9] text-[16px] leading-[151%] font-medium">
              <p>Статус:</p>
              <div className="min-w-[8px] h-[8px] bg-green rounded-full"/>
              <p>Доставлено {product.delivery_status.current} из {product.delivery_status.tital}</p>
              <div className="bg-[#8C8C8C] w-[1px] h-[28px] sm:block hidden"/>
              <p className="font-normal sm:block hidden">✨ Подарили радость: улыбка получателя подтверждена!</p>
            </div>
            <Button onClick={() => {}} className="flex items-center gap-[8px] active:scale-[0.98]">
              <img src="/images/home/review/telegram.png" alt="telegram" className="w-[21px] h-[21px]"/>
              <p className="underline">Написать в поддержку</p>
            </Button>
          </div>
          <div className="flex items-center justify-between h-[33px] mt-[16px] text-[#D9D9D9] leading-[151%]">
            <p className="text-[16px] font-medium">Итого</p>
            <p className="font-normal sm:text-[22px] text-[16px]">{formatPrice(57365)} ₽</p>
          </div>
          <Button onClick={() => {}} className="flex items-center gap-[8px] mt-[16px] active:scale-[0.98]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.6383 3.89196L21.1276 5.07321C19.0678 2.44018 15.8642 0.75 12.2669 0.75C6.05526 0.75 1.02758 5.77232 1.01954 11.9866C1.01151 18.2063 6.0499 23.25 12.2669 23.25C17.1231 23.25 21.2615 20.1696 22.8365 15.8545C22.8767 15.742 22.8178 15.6161 22.7053 15.5786L21.1865 15.0563C21.1336 15.0381 21.0756 15.0414 21.025 15.0654C20.9745 15.0894 20.9353 15.1323 20.916 15.1848C20.8678 15.3188 20.8142 15.4527 20.7579 15.5839C20.2945 16.6821 19.6303 17.6679 18.7838 18.5143C17.9442 19.3555 16.9502 20.0267 15.8561 20.4911C14.7231 20.9705 13.5151 21.2143 12.2722 21.2143C11.0267 21.2143 9.82133 20.9705 8.68829 20.4911C7.59323 20.0286 6.59879 19.3572 5.76061 18.5143C4.91874 17.6748 4.24825 16.6795 3.78651 15.5839C3.30704 14.4482 3.06329 13.2429 3.06329 11.9973C3.06329 10.7518 3.30704 9.54643 3.78651 8.41072C4.2499 7.3125 4.91418 6.32679 5.76061 5.48036C6.60704 4.63393 7.59275 3.96964 8.68829 3.50357C9.82133 3.02411 11.0294 2.78036 12.2722 2.78036C13.5178 2.78036 14.7231 3.02411 15.8561 3.50357C16.9512 3.96601 17.9456 4.63746 18.7838 5.48036C19.049 5.74554 19.2981 6.02679 19.5285 6.32143L17.916 7.58036C17.8841 7.60504 17.8598 7.63822 17.8459 7.6761C17.832 7.71397 17.8291 7.75499 17.8375 7.79444C17.8459 7.8339 17.8652 7.87018 17.8933 7.89912C17.9214 7.92806 17.9571 7.94848 17.9963 7.95804L22.6999 9.10982C22.8338 9.14196 22.9651 9.04018 22.9651 8.90357L22.9865 4.05804C22.9838 3.88125 22.7776 3.78214 22.6383 3.89196Z" fill="white"/>
            </svg>
            <p className="text-[16px] font-bold leading-[151%] text-white underline">Повторить заказ</p>
          </Button>
        </div>
      </AnimationHeightWrapper>
      <Button onClick={() => setShowAll(!showAll)} className="mt-[8px] flex gap-[8px] items-center p-[10px] active:scale-[0.98]">
        <svg className={clsx("transition-all", showAll && "rotate-180")} width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.707031 0.707031L8.70703 8.70703L16.707 0.707031" stroke="#ADADAD" strokeWidth="2"/>
        </svg>
        <p className="text-[#D9D9D9] text-[16px] leading-[151%]">{showAll ? 'Меньше деталей' : 'Больше деталей'}</p>
      </Button>
    </div>
  );
};