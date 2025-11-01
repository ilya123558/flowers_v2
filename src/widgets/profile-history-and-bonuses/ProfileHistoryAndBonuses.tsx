import { Button } from "@/shared/button/Button";
import { formatPrice } from "@/utils/libs/formatPrice";
import Image from "next/image";

export const ProfileHistoryAndBonuses = () => {
  return (
    <div>
      <div className="grid grid-cols-11 h-[122px] gap-[32px]">
        <div className="col-span-6 h-full bg-[#212121] rounded-[10px] flex items-center p-[0px_16px]">
          <div className="relative w-[40px] aspect-square">
            <Image src={'/images/profile/coins.png'} alt="coins" fill />
          </div>
          <div className="ml-[16px] flex flex-col gap-[6px] text-[#D9D9D9]">
            <p className="text-[16px] leading-[100%]">Всего бонусов</p>
            <p className="text-[24px] font-extrabold leading-[100%]">{formatPrice(12600)}</p>
            <p className="text-[16px] font-medium leading-[100%]">({formatPrice(1260)} ₽)</p>
          </div>
          <div className="ml-[16px]">
            <Button onClick={() => {}} className="p-[17.3px_26px] bg-[#444239] rounded-[11px] active:scale-95">
              <p className="text-[18.4px] font-bold">Потратить</p>
            </Button>
          </div>
          <div className="ml-[16px]">
            <p className="text-[16px] text-[#8C8C8C] leading-[120%]">К оплате доступно сейчас: {formatPrice(12600)}</p>
            <p className="text-[16px] text-[#8C8C8C] leading-[120%]">Ожидают подтверждения: {formatPrice(10000)}</p>
          </div>
        </div>
        <div className="col-span-5 h-full bg-[#212121] rounded-[10px] flex items-center p-[0px_16px]">
          <Button onClick={() => {}} className="p-[17.3px_26px] bg-yellow rounded-[11px] active:scale-95 w-full">
            <p className="text-[18.4px] text-[#2B2A24] font-bold">Рекомендовать другу</p>
          </Button>
          <div className="ml-[16px] w-full">
            <p className="text-[16px] text-[#8C8C8C] leading-[120%]">И получить + {formatPrice(5000)} бонусов <br/> за каждого друга</p>
          </div>
        </div>
      </div>
      <h5 className="mt-[32px] text-[24px] font-bold text-[#C8C8C8]">История заказов и бонусов</h5>
      <p className="mt-[16px] text-[#878787] font-medium">Октябрь 2025</p>
      <div className=""></div>
    </div>
  );
};