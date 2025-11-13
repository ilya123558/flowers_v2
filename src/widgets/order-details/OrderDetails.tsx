'use client'
import { YandexMap } from "@/features/yandex-map/YandexMap";
import { Button } from "@/shared/button/Button";
import { Input } from "@/shared/input/Input";
import { InputPhone } from "@/shared/input/InputPhone";
import { Select } from "@/shared/select/Select";
import { Tooltip } from "@/shared/tooltip/Tooltip";
import { daysList, socialList, timeList } from "@/utils/const/main";
import { formatPrice } from "@/utils/libs/formatPrice";
import { TDay, TSocial, TTime } from "@/utils/types";
import { useState } from "react";

export const OrderDetails = () => {
  const [activeRecipientSocialTitle, setActiveRecipientSocialTitle] = useState<TSocial>(socialList[0])
  const [recipientPhoneValue, setRecipientPhoneValue] = useState('')
  const [recipientFullnameValue, setRecipientFullnameValue] = useState('')
  const [recipientEmailValue, setRecipientEmailValue] = useState('')
  const [recipientAddressValue, setRecipientAddressValue] = useState('')

  const [activeSenderSocialTitle, setActiveSenderSocialTitle] = useState<TSocial>(socialList[0])
  const [senderPhoneValue, setSenderPhoneValue] = useState('')
  const [senderFullnameValue, setSenderFullnameValue] = useState('')

  const [activeDay, setActiveDay] = useState<TDay>(daysList[0])
  const [activeTime, setActiveTime] = useState<TTime>(timeList[0])

  return (
    <div className="col-span-7 bg-[#212121] rounded-[8px] sm:p-[20px] p-[10px] text-[#D9D9D9] h-fit">
      <div className="text-[16px] font-semibold leading-[151%]">
        <p>Детали заказа</p>
        <div className="border-b-[1px] border-[#6D6D6A] w-full border-dashed mt-[3px]"></div>
        <div className="w-fit leading-[100%] mt-[5px]">
          <Tooltip text="Какие-то данные какого-то отправителя и это какая-то информация о каком-то отправителе">
            Данные отправителя
          </Tooltip>
        </div>
      </div>
      <div className="sm:grid flex flex-col grid-cols-3 gap-[11px] mt-[24px]">
        <Select 
          activeItem={{title: activeRecipientSocialTitle, value: activeRecipientSocialTitle}}
          selectList={socialList.map(item => ({title: item, value: item}))}
          handleChange={(data) => setActiveRecipientSocialTitle(data.title as TSocial)}
          bgColor="#111111"
          classNameText="leading-[151%]"
          className="z-[19]"
        >
          Выберите мессенджер
        </Select>
        <InputPhone 
          value={recipientPhoneValue}
          setValue={setRecipientPhoneValue}
          label="Контакты отправителя"
          placeholder="+7 (928) *** ** **"
        />        
        <Input 
          value={recipientFullnameValue}
          setValue={setRecipientFullnameValue}
          label="Имя(от кого)"
          placeholder="Анонимно"
        />
      </div>
      <div className="mt-[16px]">
        <Input 
          value={recipientEmailValue}
          setValue={setRecipientEmailValue}
          label="Введите email"
          placeholder="exemple@gmail.com"
        />
      </div>
      <div className="text-[16px] font-semibold leading-[151%] mt-[20px]">
        <div className="border-b-[1px] border-[#6D6D6A] w-full border-dashed"></div>
        <div className="w-fit leading-[100%] mt-[5px]">
          <Tooltip text="Какие-то данные какого-то отправителя и это какая-то информация о каком-то отправителе">
            Данные получателя
          </Tooltip>
        </div>
      </div>
      <div className="sm:grid flex flex-col grid-cols-3 gap-[11px] mt-[24px]">
        <Select 
          activeItem={{title: activeSenderSocialTitle, value: activeSenderSocialTitle}}
          selectList={socialList.map(item => ({title: item, value: item}))}
          handleChange={(data) => setActiveSenderSocialTitle(data.title as TSocial)}
          bgColor="#111111"
          classNameText="leading-[151%]"
          className="z-[19]"
        >
          Выберите мессенджер
        </Select>
        <InputPhone 
          value={senderPhoneValue}
          setValue={setSenderPhoneValue}
          label="Контакты получателя"
          placeholder="+7 (928) *** ** **"
        />        
        <Input 
          value={senderFullnameValue}
          setValue={setSenderFullnameValue}
          label="Имя(не обязательно)"
          placeholder="Введите имя"
        />
      </div>
      <div className="mt-[16px]">
        <Input 
          value={recipientAddressValue}
          setValue={setRecipientAddressValue}
          label="Адрес получателя"
          placeholder="Южно-Сахалинск, ул. Ленина, 45, кв. 12"
        />
      </div>
      <YandexMap className="w-full h-[157px]"/>
      <div className="flex justify-between mt-[2.3px] leading-[151%]">
        <p className="text-[14px]">Доставка Яндексом до этого адреса</p>
        <p className="text-[22px] text-nowrap">260 ₽</p>
      </div>
      <div className="mt-[15px]">
        <p className="text-[16px] font-semibold leading-[151%]">День и время доставки</p>
        <div className="flex sm:flex-row flex-col gap-[11px] mt-[8px]">
          <Select 
            activeItem={{title: activeDay, value: activeDay}}
            selectList={daysList.map(item => ({title: item, value: item}))}
            handleChange={(data) => setActiveDay(data.title as TDay)}
            bgColor="#111111"
            classNameText="leading-[151%]"
            className="z-[19]"
          >
            День доставки
          </Select>
          <Select 
            activeItem={{title: activeTime, value: activeTime}}
            selectList={timeList.map(item => ({title: item, value: item}))}
            handleChange={(data) => setActiveTime(data.title as TTime)}
            bgColor="#111111"
            classNameText="leading-[151%]"
            className="z-[18]"
          >
            Время доставки
          </Select>
        </div>
      </div>
      <div className="flex justify-end mt-[20px]">
        <Button onClick={() => {}} className="p-[17.3px_26px] bg-yellow rounded-[11px]">
          <p className="text-[#252525] text-[16px] font-semibold leading-[100%]">Оплатить {formatPrice(61655)} ₽ </p>
        </Button>
      </div>
      <div className="mt-[20px] w-full flex justify-between p-[16px] rounded-[8px] bg-[#373737]">
        <p className="text-[16px] font-medium leading-[151%]">Остались вопросы?</p>
        <Button onClick={() => {}} className="flex items-center gap-[8px] active:scale-[0.98]">
          <img src="/images/home/review/telegram.png" alt="telegram" className="w-[21px] h-[21px]"/>
          <p className="underline">Написать в поддержку</p>
        </Button>
      </div>
    </div>
  );
};