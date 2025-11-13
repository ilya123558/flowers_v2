'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";
import Image from "next/image";

export const ProfileUnauth = ({children,  className}: TClassNameWithChildren) => {
  return (
    <Container>
      <div className={clsx("", className)}>
        <h4 className="lg:text-[24px] text-[16px] font-bold lg:mt-[40px] mt-[20px] text-[#C8C8C8]">{children}</h4>
        <div className="w-full lg:p-[53px_46px] p-[30px_20px] bg-[#1E1D1A] rounded-[24px] lg:mt-[40px] mt-[20px]">
          <div className="flex flex-col items-center">
            <p className="text-center lg:text-[22px] text-[16px] font-medium">Чтобы просматривать этот раздел, верифицируйтесь через мессенджер.</p>
            <div className="mt-[32px] flex sm:flex-row flex-col gap-[16px] sm:w-fit w-full">
              <Button onClick={() => {}} className="flex-center bg-[#00699C1A] gap-[8px] p-[17.5px_16px] border-[2px] border-[#3FC1FF] rounded-[10px] lg:active:scale-95 active:scale-[0.98]">
                <div className="aspect-square w-[21px] relative">
                  <Image src={'/images/home/review/telegram.png'} alt="telegram" fill />
                </div>
                <p className="text-[19px] font-bold text-nowrap">Написать в Telegram</p>
              </Button>
              <Button onClick={() => {}} className="flex-center bg-[#3589051A] gap-[8px] p-[17.5px_16px] border-[2px] border-[#37A806] rounded-[10px] lg:active:scale-95 active:scale-[0.98]">
                <div className="aspect-square w-[21px] relative">
                  <Image src={'/images/home/review/whatsapp.png'} alt="whatsapp" fill />
                </div>
                <p className="text-[19px] font-bold text-nowrap">Написать в WhatsApp</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};