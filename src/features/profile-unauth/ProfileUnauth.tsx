'use client'
import { Button } from "@/shared/button/Button";
import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";
import Image from "next/image";

export const ProfileUnauth = ({children,  className}: TClassNameWithChildren) => {
  return (
    <div className={clsx("", className)}>
      <h4 className="text-[24px] font-bold mt-[40px] text-[#C8C8C8]">{children}</h4>
      <div className="w-full p-[53px_46px] bg-[#1E1D1A] rounded-[24px] mt-[40px]">
        <div className="flex flex-col items-center">
          <p className="text-center text-[22px] font-medium">Чтобы просматривать этот раздел, верифицируйтесь через мессенджер.</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};