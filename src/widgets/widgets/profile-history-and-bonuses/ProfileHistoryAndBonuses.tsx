import { HistoryProductItem } from "@/features/history-product-item/HistoryProductItem";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { historyList } from "@/utils/const/history";
import { formatPrice } from "@/utils/libs/formatPrice";
import Image from "next/image";

export const ProfileHistoryAndBonuses = () => {
  return (
    <div className="roboto">
      <Container>
        <div className="lg:grid flex flex-col grid-cols-11 gap-[32px]">
          <div className="col-span-6 bg-[#212121] rounded-[10px] flex sm:flex-row flex-col sm:items-center sm:p-[0px_16px] p-[16px] sm:h-[122px]">
            <div className="flex sm:items-center sm:justify-start justify-between">
              <div className="flex items-center">
                <div className="relative w-[40px] aspect-square">
                  <Image src={'/images/profile/coins.png'} alt="coins" fill />
                </div>
                <div className="ml-[16px] flex flex-col gap-[6px] text-[#D9D9D9]">
                  <p className="text-[16px] leading-[100%]">Всего бонусов</p>
                  <p className="text-[24px] font-extrabold leading-[100%]">{formatPrice(12600)}</p>
                  <p className="text-[16px] font-medium leading-[100%]">({formatPrice(1260)} ₽)</p>
                </div>
              </div>
              <div className="sm:ml-[16px]">
                <Button onClick={() => {}} className="sm:p-[17.3px_26px] p-[13px_18px] bg-[#444239] rounded-[11px] active:scale-95">
                  <p className="text-[18.4px] font-bold">Потратить</p>
                </Button>
              </div>
            </div>
            <div className="sm:ml-[16px] sm:mt-[0px] mt-[20px]">
              <p className="text-[16px] text-[#8C8C8C] leading-[120%]">К оплате доступно сейчас: {formatPrice(12600)}</p>
              <p className="text-[16px] text-[#8C8C8C] leading-[120%]">Ожидают подтверждения: {formatPrice(10000)}</p>
            </div>
          </div>
          <div className="col-span-5 bg-[#212121] rounded-[10px] flex items-center sm:flex-row flex-col-reverse lg:p-[0px_16px] p-[16px] lg:h-[122px]">
            <Button onClick={() => {}} className="p-[17.3px_26px] bg-yellow rounded-[11px] active:scale-95 w-full sm:mt-[0px] mt-[16px]">
              <p className="text-[18.4px] text-[#2B2A24] font-bold">Рекомендовать другу</p>
            </Button>
            <div className="sm:ml-[16px] w-full">
              <p className="text-[16px] text-[#8C8C8C] leading-[120%]">И получить + {formatPrice(5000)} бонусов <br/> за каждого друга</p>
            </div>
          </div>
        </div>
        <h5 className="mt-[32px] text-[24px] font-bold text-[#C8C8C8]">История заказов и бонусов</h5>
        <div className="flex flex-col gap-[16px]">
          {historyList.map((history, index) => (
            <div key={index} className="">
              <p className="mt-[16px] text-[#878787] font-medium">{history.title}</p>
              <div className="mt-[16px] flex flex-col gap-[16px]">
                {history.items.map((historyItem, i) => {
                  if(historyItem.type === 'product') {
                    return (
                      <HistoryProductItem {...historyItem.product}/>
                    )
                  }

                  return (
                    <div key={`${index}_${i}`} className="bg-[#393939] rounded-[8px] sm:p-[20px] p-[10px]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[8px]">
                          <img src="/images/profile/gift.png" className="w-[34px] h-[34px]"/>
                          <p className="text-[#D9D9D9] sm:text-[16px] text-[14px] font-medium">{historyItem.bonus.title}</p>
                        </div>
                        <div className="flex flex-col gap-[4px] text-end">
                          <p className="text-green sm:text-[16px] text-[14px] font-bold leading-[151%]">+ {formatPrice(historyItem.bonus.points)} бонусов</p>
                          <p className="text-[#D9D9D9] sm:text-[22px] text-[16px] leading-[151%]">+ {formatPrice(historyItem.bonus.price)} ₽</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};