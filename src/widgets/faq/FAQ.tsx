'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { Title55px } from "@/shared/text/title55px/Title55px";
import { AnimationHeightWrapper } from "@/shared/wrappers/AnimationHeightWrapper";
import { LgHidden, SmHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow, SmShow } from "@/shared/wrappers/SizeShow";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const FAQItem = ({text, title}: {title: string, text: string}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <LgHidden>
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
      </LgHidden>
      <LgShow>
        <li onClick={() => setIsOpen(!isOpen)} className="p-[17.5px_5px] bg-black rounded-[11.5px] cursor-pointer">
          <div className="flex items-center gap-[6px]">
            <svg className={clsx("transition-all", isOpen && "rotate-90")} width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.10215 3.15764C3.24229 3.35608 3.2423 3.62127 3.10215 3.81971L1.04428 6.73359C0.721332 7.19089 0.00169478 6.96239 0.00169479 6.40256L0.00169488 0.574796C0.00169489 0.0149617 0.721331 -0.213534 1.04428 0.243758L3.10215 3.15764Z" fill="#D9D9D9"/>
            </svg>
            <p className="font-medium text-[16px]">{title}</p>
          </div>
          <AnimationHeightWrapper isOpen={isOpen} className="">
            <div className="flex items-center gap-[6px] mt-[9.2px]">
              <svg className="opacity-0" width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.76433 3.89694C10.2275 4.09586 10.2275 4.75259 9.76433 4.95151L0.798481 8.80175C0.41977 8.96438 -0.00180198 8.68662 -0.00180196 8.27446L-0.00180157 0.573983C-0.00180155 0.161828 0.41977 -0.115935 0.798482 0.0466965L9.76433 3.89694Z" fill="#D9D9D9"/>
              </svg>
              <p className="text-[#909191] text-[16px]">{text}</p>
            </div>
          </AnimationHeightWrapper>
        </li>
      </LgShow>
    </>
  )
}

export const FAQ = () => {
  const list = [
    {title: 'Как упакованы цветы?', text: 'За каждую покупку вы получаете баллы. Баллами можно оплачивать часть следующих заказов.'},
    {title: 'Где можно посмотреть ваши букеты?', text: 'За каждую покупку вы получаете баллы. Баллами можно оплачивать часть следующих заказов.'},
    {title: 'Как работает бонусная программа?', text: 'За каждую покупку вы получаете баллы. Баллами можно оплачивать часть следующих заказов.'},
  ]

  return (
    <div className="roboto sm:bg-transparent bg-secondary-bg">
      <Container>
        <SmHidden>
          <Title55px className="mt-[92px]">Часто задаваемые вопросы</Title55px>
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
                <p className="text-[16px] text-[#909191] mt-[16px]">Понимаем, наш флорист подскажет букет под любой повод</p>
                <div className="mt-[32px] flex gap-[16px]">
                  <Button onClick={() => {}} className="flex gap-[8px] items-center p-[17.5px_16px] border-[2px] border-[#3FC1FF] bg-[#00699C1A] rounded-[10px] active:scale-95">
                    <div className="aspect-square w-[21px] relative">
                      <Image src={'/images/home/review/telegram.png'} alt="telegram" fill />
                    </div>
                    <p className="text-[19px] font-bold">Написать в Telegram</p>
                  </Button>
                  <Button onClick={() => {}} className="flex gap-[8px] items-center p-[17.5px_16px] border-[2px] border-[#37A806] bg-[#3589051A] rounded-[10px] active:scale-95">
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
        </SmHidden>
        <SmShow>
          <div className="pt-[35px] pb-[26px] mb-[-1px] mt-[-1px]">
            {/* <Title23px className="!font-extrabold !text-[#EBEBEB]">Часто задаваемые вопросы</Title23px> */}
            <div className="mt-[16px]">
              {/* <ul className="flex flex-col gap-[9px]">
                {list.map((item, index) => (
                  <FAQItem key={index} {...item} />
                ))}
              </ul> */}
              <div className="rounded-[24px] mt-[9px]">
                <p className="text-[22px] font-medium text-center leading-[100%]">Трудно определиться?</p>
                {/* <p className="text-[16px] text-[#909191] mt-[16px]">Понимаем, наш флорист подскажет букет под любой повод</p> */}
                <div className="mt-[36px] flex flex-col gap-[16px]">
                  <Button onClick={() => {}} className="flex-center gap-[10px] p-[17.5px_16px] bg-[#00699C1A] border-[2px] border-[#3FC1FF] rounded-[10px] active:scale-95">
                    <div className="aspect-square w-[21px] relative">
                      <Image src={'/images/home/review/telegram.png'} alt="telegram" fill />
                    </div>
                    <p className="text-[19px] font-bold">Написать в Telegram</p>
                  </Button>
                  <Button onClick={() => {}} className="flex-center gap-[10px] p-[17.5px_16px] bg-[#3589051A] border-[2px] border-[#37A806] rounded-[10px] active:scale-95">
                    <div className="aspect-square w-[21px] relative">
                      <Image src={'/images/home/review/whatsapp.png'} alt="whatsapp" fill />
                    </div>
                    <p className="text-[19px] font-bold">Написать в WhatsApp</p>
                  </Button>
                  <Button onClick={() => {}} className="flex-center gap-[10px] p-[17.5px_16px] border-[2px] border-[#EDBF81] bg-[#EDBF811A] rounded-[10px] active:scale-95">
                    <div className="aspect-square w-[21px] relative">
                      <Image src={'/images/home/review/phone.png'} alt="phone" fill />
                    </div>
                    <p className="text-[19px] font-bold">Позвонить флористу</p>
                  </Button>
                </div>
                <p className="text-[#909191] text-[16px] leading-[134%] text-center mt-[18px]">Наш флорист подскажет букет под любое настроение</p>
              </div>
            </div>
          </div>
        </SmShow>
      </Container>
    </div>
  );
};