'use client'
import { Button } from "@/shared/button/Button";
import { useRouter } from "next/navigation";

export default function Page(){
  const router = useRouter()

  return (
    <div className="sm:my-[47px] my-[20px] flex justify-center inter sm:px-0 px-[16px]">
      <div className="bg-[#2A2A2A] sm:w-[850px] w-full sm:rounded-[24px] rounded-[12px] sm:p-[48px] p-[20px]">
        <div className="flex-center">
          <svg className="sm:w-[120px] sm:h-[120px] w-[80px] h-[80px]" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60Z" fill="url(#paint0_linear_2126_20165)"/>
            <path d="M10 60C10 32.3858 32.3858 10 60 10C87.6142 10 110 32.3858 110 60C110 87.6142 87.6142 110 60 110C32.3858 110 10 87.6142 10 60Z" fill="#2A2A2A"/>
            <path d="M55 68.75L45 58.75L41.875 61.875L55 75L80 50L76.875 46.875L55 68.75Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_2126_20165" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6BBF59"/>
            <stop offset="1" stopColor="#4A9239"/>
            </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-center sm:mt-[32px] mt-[16px] text-[#B5B5B5]">
          <p className="sm:text-[32px] text-[24px] sm:leading-[48px] leading-[24px] text-white tracking-[0.41px]">Оплата прошла успешно!</p>
          <p className="sm:text-[16px] text-[14px] sm:leading-[24px] leading-[18px] tracking-[-0.31px] mt-[16px]">Спасибо за ваш заказ. Мы начали его обработку.</p>
        </div>
        <div className="sm:mt-[40px] mt-[25px] sm:rounded-[16px] rounded-[11px] bg-[#1F1F1F] sm:p-[32px] p-[20px] flex flex-col sm:gap-[24px] gap-[16px]">
          <div className="flex justify-between sm:p-[12.5px_0px] p-[8px_0px] border-b-[1px] border-[#3A3A3A]">
            <p className="text-[#B5B5B5] sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px]">Номер заказа:</p>
            <p className="text-white sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px] font-medium">FL-7DB2B1TD2</p>
          </div>
          <div className="flex justify-between sm:p-[12.5px_0px] p-[8px_0px] border-b-[1px] border-[#3A3A3A]">
            <p className="text-[#B5B5B5] sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px]">Дата и время:</p>
            <p className="text-white sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px] font-medium">26.11.2025, 20:02</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#B5B5B5] sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px]">Статус:</p>
            <p className="text-green sm:text-[16px] text-[14px] leading-[24px] tracking-[-0.31px] font-medium">Оплачено</p>
          </div>
        </div>
        <div className="text-center sm:text-[15px] text-[12px] text-[#B5B5B5] sm:leading-[24px] leading-[20px] tracking-[-0.23px] sm:mt-[31px] mt-[20px]">
          <p>Информация о заказе отправлена на вашу электронную почту и указанную социальную сеть.</p>
          <p>Мы свяжемся с вами для уточнения деталей доставки.</p>
        </div>
        <div className="flex justify-between sm:flex-row flex-col sm:gap-[16px] gap-[10px] sm:mt-[40px] mt-[20px]">
          <Button onClick={() => router.push('/')} className="sm:p-[17.5px] p-[12.5px_6px] sm:rounded-[14px] rounded-[11px] w-full bg-yellow active:scale-95 border-[1px] border-yellow">
            <p className="text-[#252525] sm:text-[16px] text-[14px] font-medium sm:leading-[24px] leading-[20px] tracking-[-0.31px]">Вернуться на главную</p>
          </Button>
          <Button onClick={() => router.push('/order')} className="sm:p-[17.5px] p-[12.5px] sm:rounded-[14px] rounded-[11px] w-full active:scale-95 border-[1px] border-yellow">
            <p className="text-yellow sm:text-[16px] text-[14px] font-medium leading-[24px] tracking-[-0.31px] ">Мои заказы</p>
          </Button>
        </div>
      </div>
    </div>
  )
}