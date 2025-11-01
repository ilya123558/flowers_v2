'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { Title55px } from "@/shared/text/title55px/Title55px";
import { AnimationHeightWrapper } from "@/shared/wrappers/AnimationHeightWrapper";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const FAQItem = ({text, title}: {title: string, text: string}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li onClick={() => setIsOpen(!isOpen)} className="p-[12px_17.8px] bg-[#1E1D1A] rounded-[11.5px] cursor-pointer">
      <div className="flex items-center gap-[6px]">
        <svg className={clsx("transition-all", isOpen && "rotate-90")} width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.76433 3.89694C10.2275 4.09586 10.2275 4.75259 9.76433 4.95151L0.798481 8.80175C0.41977 8.96438 -0.00180198 8.68662 -0.00180196 8.27446L-0.00180157 0.573983C-0.00180155 0.161828 0.41977 -0.115935 0.798482 0.0466965L9.76433 3.89694Z" fill="#D9D9D9"/>
        </svg>
        <p className="font-medium text-[16px]">{title}</p>
      </div>
      <AnimationHeightWrapper isOpen={isOpen} className="">
        <div className="flex items-center gap-[6px] m-[16px_0px_8px]">
          <svg className="opacity-0" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.76433 3.89694C10.2275 4.09586 10.2275 4.75259 9.76433 4.95151L0.798481 8.80175C0.41977 8.96438 -0.00180198 8.68662 -0.00180196 8.27446L-0.00180157 0.573983C-0.00180155 0.161828 0.41977 -0.115935 0.798482 0.0466965L9.76433 3.89694Z" fill="#D9D9D9"/>
          </svg>
          <p className="text-[#909191] text-[16px]">{text}</p>
        </div>

      </AnimationHeightWrapper>
    </li>
  )
}

export const FAQ = () => {
  const list = [
    {title: 'Как упакованы цветы?', text: 'За каждую покупку вы получаете баллы. Баллами можно оплачивать часть следующих заказов.'},
    {title: 'Где можно посмотреть ваши букеты?', text: 'За каждую покупку вы получаете баллы. Баллами можно оплачивать часть следующих заказов.'},
    {title: 'Как работает бонусная программа?', text: 'За каждую покупку вы получаете баллы. Баллами можно оплачивать часть следующих заказов.'},
  ]

  return (
    <div className="mt-[92px] roboto">
      <Container>
        <Title55px>Часто задаваемые вопросы</Title55px>
        <div className="mt-[32px]">
          <ul className="flex flex-col gap-[9px]">
            {list.map((item, index) => (
              <FAQItem key={index} {...item} />
            ))}
          </ul>
          <div className="p-[34px_46px] bg-[#1E1D1A] rounded-[24px] mt-[9px] flex items-center gap-[24px]">
            <div className="aspect-[140/114] w-[140px] relative">
              <Image src={'/images/home/review/q.png'} alt="faq" fill />
            </div>
            <div className="">
              <p className="text-[22px] font-black">Трудно определиться?</p>
              <p className="text-[16px] text-[#909191 mt-[16px]">Понимаем, наш флорист подскажет букет под любой повод</p>
              <div className="mt-[32px] flex gap-[16px]">
                <Button onClick={() => {}} className="flex gap-[8px] items-center p-[17.5px_16px] border-[2px] border-[#3FC1FF] rounded-[10px] active:scale-95">
                  <div className="aspect-square w-[21px] relative">
                    <Image src={'/images/home/review/telegram.png'} alt="telegram" fill />
                  </div>
                  <p className="text-[19px] font-bold">Написать в Telegram</p>
                </Button>
                <Button onClick={() => {}} className="flex gap-[8px] items-center p-[17.5px_16px] border-[2px] border-[#37A806] rounded-[10px] active:scale-95">
                  <div className="aspect-square w-[21px] relative">
                    <Image src={'/images/home/review/whatsapp.png'} alt="whatsapp" fill />
                  </div>
                  <p className="text-[19px] font-bold">Написать в WhatsApp</p>
                </Button>
                <Button onClick={() => {}} className="flex gap-[8px] items-center p-[17.5px_16px] border-[2px] border-[#EDBF81] bg-[#EDBF811A] rounded-[10px] active:scale-95">
                  <div className="aspect-square w-[21px] relative">
                    <Image src={'/images/home/review/phone.png'} alt="phone" fill />
                  </div>
                  <p className="text-[19px] font-bold">Позвонить флористу</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};