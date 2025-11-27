'use client'
import { Button } from "@/shared/button/Button";
import { setOpenBasket, useAppDispatch } from "@/views/store";

const errorVariantTextList = [
  'Недостаточно средств на карте',
  'Неверно введены данные карты',
  'Карта заблокирована или просрочена',
  'Превышен лимит по операциям',
  'Банк отклонил транзакцию'
]

export default function Page(){
  const dispatch = useAppDispatch()

  return (
    <div className="sm:my-[47px] my-[20px] flex justify-center inter sm:px-0 px-[16px]">
      <div className="bg-[#2A2A2A] sm:w-[850px] w-full sm:rounded-[24px] rounded-[12px] sm:p-[48px] p-[20px]">
        <div className="flex-center">
          <svg className="sm:w-[120px] sm:h-[120px] w-[80px] h-[80px]" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60Z" fill="url(#paint0_linear_2126_20511)"/>
            <path d="M10 60C10 32.3858 32.3858 10 60 10C87.6142 10 110 32.3858 110 60C110 87.6142 87.6142 110 60 110C32.3858 110 10 87.6142 10 60Z" fill="#2A2A2A"/>
            <path d="M71.25 48.75L48.75 71.25M48.75 48.75L71.25 71.25" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_2126_20511" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D94F4F"/>
            <stop offset="1" stopColor="#B83838"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center sm:mt-[32px] mt-[16px] text-[#B5B5B5]">
          <p className="sm:text-[32px] text-[24px] sm:leading-[48px] leading-[24px] text-white tracking-[0.41px]">Оплата не прошла</p>
          <p className="sm:text-[16px] text-[14px] sm:leading-[24px] leading-[18px] tracking-[-0.31px] mt-[16px]">К сожалению, произошла ошибка при обработке платежа.</p>
        </div>
        <div className="sm:mt-[40px] mt-[25px] sm:rounded-[16px] rounded-[11px] bg-[#1F1F1F] sm:p-[32px] p-[20px] flex flex-col sm:gap-[24px] gap-[16px]">
          <div className="flex justify-between sm:p-[12.5px_0px] p-[8px_0px] border-b-[1px] border-[#3A3A3A]">
            <p className="text-[#B5B5B5] sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px]">Дата и время:</p>
            <p className="text-white sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px] font-medium">26.11.2025, 20:02</p>
          </div>
          <div className="flex justify-between sm:p-[12.5px_0px] p-[8px_0px] border-b-[1px] border-[#3A3A3A]">
            <p className="text-[#B5B5B5] sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px]">Статус:</p>
            <p className="text-[#D94F4F] sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px] font-medium">Отклонено</p>
          </div>
          <div className="sm:p-[7.5px_0px_0px] p-[4px_0px_0px]">
            <p className="text-[#B5B5B5] sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px]">Возможные причины:</p>
            <ul className="sm:mt-[15.5px] mt-[12px] flex flex-col sm:gap-[16px] gap-[12px]">
              {errorVariantTextList.map((text, index) => (
                <li key={index} className="flex items-center gap-[11px]">
                  <div className="rounded-full bg-[#D94F4F] min-h-[4.5px] min-w-[4.5px] w-fit h-fit"></div>
                  <p className="text-[#B5B5B5] sm:text-[15px] text-[13px] leading-[22.5px] tracking-[-0.31px]">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center sm:text-[15px] text-[12px] text-[#B5B5B5] sm:leading-[24px] leading-[20px] tracking-[-0.23px] sm:mt-[31px] mt-[20px]">
          <p>Пожалуйста, проверьте данные вашей карты и попробуйте снова.</p>
          <p>Если проблема повторяется, свяжитесь с вашим банком или нашей службой поддержки.</p>
        </div>
        <div className="flex justify-between sm:flex-row flex-col sm:gap-[16px] gap-[10px] sm:mt-[40px] mt-[20px]">
          <Button onClick={() => {}} className="sm:p-[17.5px] p-[12.5px] sm:rounded-[14px] rounded-[11px] w-full bg-yellow active:scale-95 border-[1px] border-yellow flex-center">
            <div className="flex items-center gap-[9px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C12.0967 2.50789 14.1092 3.32602 15.6167 4.78333L17.5 6.66667" stroke="#252525" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5026 2.5V6.66667H13.3359" stroke="#252525" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5C7.90329 17.4921 5.89081 16.674 4.38333 15.2167L2.5 13.3333" stroke="#252525" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.66667 13.333H2.5V17.4997" stroke="#252525" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#252525] sm:text-[16px] text-[14px] font-medium sm:leading-[24px] leading-[20px] tracking-[-0.31px]">Попробовать снова</p>
            </div>
          </Button>
          <Button onClick={() => dispatch(setOpenBasket())} className="sm:p-[17.5px] p-[12.5px] sm:rounded-[14px] rounded-[11px] w-full active:scale-95 border-[1px] border-yellow">
            <p className="text-yellow sm:text-[16px] text-[14px] font-medium leading-[24px] tracking-[-0.31px]">Вернуться в корзину</p>
          </Button>
        </div>
      </div>
    </div>
  )
}