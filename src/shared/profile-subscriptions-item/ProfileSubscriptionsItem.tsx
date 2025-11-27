'use client'
import { TMySubscription } from "@/utils/types/subscription";
import { Button } from "../button/Button";
import { useEffect, useRef, useState } from "react";
import { TDeliveryDate, TEmotion, TPeriod, TDay, TTime } from "@/utils/types";
import { ISelectItem, Select } from "../select/Select";
import { daysList, deliveryDateList, emotionsList, periodList, timeList } from "@/utils/const/main";
import { Input } from "../input/Input";
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AnimationHeightWrapper } from "../wrappers/AnimationHeightWrapper";
import { SmHidden } from "../wrappers/SizeHidden";
import { SmShow } from "../wrappers/SizeShow";

interface IProductEmotion {
  productId: string
  activeEmotion: ISelectItem
}

export const ProfileSubscriptionsItem = (props: TMySubscription) => {
  const swiperRef = useRef<SwiperRef | null>(null)
  const [productEmotionList, setProductEmotionList] = useState<IProductEmotion[]>([])
  const [frequencyIsOpen, setFrequencyIsOpen] = useState(false)
  const [recipientIsOpen, setRecipientIsOpen] = useState(false)
  
  const [activeDeliveryDate, setActiveDeliveryDate] = useState<TDeliveryDate>(props.subscription.subscription?.delivery_date || 'Каждую неделю')
  const [activePreriod, setActivePreriod] = useState<TPeriod>(props.subscription.subscription?.period || '1 месяц')
  const [activeDay, setActiveDay] = useState<TDay>(props.subscription.subscription?.day || 'Понедельник')
  const [activeTime, setActiveTime] = useState<TTime>(props.subscription.subscription?.time || '8: 00 - 9: 00')

  const [fullnameValue, setFullValue] = useState(props.recipient.fullname || '')
  const [addressValue, setAddressValue] = useState(props.recipient.address || '')
  const [contactValue, setContactValue] = useState(props.recipient.contact || '')
  const [methodContactValue, setMethodContactValue] = useState(props.recipient.method_contact || '')

  const handleChangeEmotion = (value: ISelectItem, id: string) => {
    setProductEmotionList(prev => prev.map(item => {
      if(item.productId === id) {
        return {...item, activeEmotion: value}
      }

      return item
    }))
  }

  useEffect(() => {
    const resultEmotionList: IProductEmotion[] = props.items.map(item => ({
      productId: item.id,
      activeEmotion: {
        title: item.emotion,
        value: item.emotion
      },
    }))

    setProductEmotionList(resultEmotionList)
  }, [props])


  return (
    <div className="p-[20px_0px] bg-[#212121] rounded-[8px] text-[#D9D9D9] overflow-hidden">
      <div style={{zIndex: 0}} className="relative">
        <div className="sm:px-[20px] px-[12px]">
          <div className="flex gap-[10px] justify-between items-center">
            <p className="text-[14px] font-medium text-[#8C8C8C] leading-[151%]">{props.date}</p>
            <div className="text-[#8C8C8C] flex gap-[16px] roboto">
              <Button onClick={() => {}} className="flex items-center gap-[8px] active:scale-[0.98] font-bold bg-[#2F2F2F] p-[8px] rounded-[8px]">
                <img src="/images/home/review/telegram.png" alt="telegram" className="w-[21px] h-[21px]"/>
                <p className="underline">Вопросы?</p>
              </Button>
              <SmHidden>
                <div className="flex items-center gap-[8px] text-[16px] leading-[151%] font-medium bg-[#2F2F2F] p-[8px] rounded-[8px]">
                  <div className="min-w-[8px] h-[8px] bg-green rounded-full"/>
                  <p>Доставлено {props.delivery_status.current} из {props.delivery_status.tital}</p>
                </div>
              </SmHidden>
            </div>
          </div>
          <SmShow>
            <div className="w-fit mt-[4px]">
              <div className="flex items-center gap-[8px] text-[16px] leading-[151%] font-medium bg-[#2F2F2F] p-[8px] rounded-[8px]">
                <div className="min-w-[8px] h-[8px] bg-green rounded-full"/>
                <p>Доставлено {props.delivery_status.current} из {props.delivery_status.tital}</p>
              </div>
            </div>
          </SmShow>
          <h5 className="mt-[24px] text-[16px] leading-[151%] font-bold text-[#D9D9D9]">Товары в подписке ({props.items.length})</h5>
        </div>
        <div className={`mt-[8px] pb-[400px] mb-[-400px] !overflow-y-visible overflow-x-hidden sm:px-[20px] px-[12px]`}>
          <Swiper
            ref={swiperRef}
            spaceBetween={8}
            slidesPerView={'auto'}
            className="w-full !overflow-visible !overflow-y-visible"
          >
            {props.items.map((productItem) => (
              <SwiperSlide key={productItem.id} style={{width: 'auto'}} className="!overflow-visible">
                <div className="flex justify-between flex-col gap-[16px] pb-[4px] w-[262px] bg-[#2F2F2F] rounded-[8px] p-[16px]">
                  <div className="flex items-center gap-[8px]">
                    <img src={productItem.img} alt="product" className="object-cover object-center w-[34px] h-[56px] rounded-[8px]"/>
                    <div>
                      <p className="underline text-[16px] font-bold leading-[151%]">
                        {productItem.title}, {productItem.size}
                      </p>
                      <p className="text-[16px] leading-[151%]">Премиум доставка</p>
                    </div>
                  </div>
                  <div>
                    <Select
                      activeItem={productEmotionList.find(item => item.productId === productItem.id)?.activeEmotion || {title: '', value: ''}}
                      handleChange={(value: ISelectItem) => handleChangeEmotion(value, productItem.id)}
                      selectList={emotionsList.map(item => ({title: item, value: item}))}
                      className="flex items-center w-full gap-[8px]"
                    >
                      Эмоция
                    </Select>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="sm:px-[20px] px-[12px]">
          <div className="roboto bg-[#4F1933] items-center rounded-[8px] p-[8px_16px] flex gap-[4px] w-full mt-[8px]">
            <p>🌸</p>
            <p className="text-[14px] leading-[151%] text-[#C29999]">
              Эмоции можно менять каждый раз. Мы подберём букет под настроение.
            </p>
          </div>
          <div className="relative z-[0]">
            <div className="flex items-center justify-between roboto mt-[24px]">
              <p className="text-[#8C8C8C] text-[14px] leading-[151%] font-bold">Настроить периодичность</p>
              <Button onClick={() => setFrequencyIsOpen(!frequencyIsOpen)} className="w-[30px] aspect-square flex-center">
                <svg className={`transition-all ${frequencyIsOpen && "rotate-180"}`} width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.710938 0.707031L6.71094 6.70703L12.7109 0.707031" stroke="#797979" strokeWidth="2"/>
                </svg>
              </Button>
            </div>
            <AnimationHeightWrapper isOpen={frequencyIsOpen} withoutOverflowHidden className="mt-[11px]">
              <div className="flex flex-col gap-[11px] pb-[20px]">
                <div className="flex sm:flex-row flex-col gap-[11px]">
                  <div style={{zIndex: 13}} className="w-full">
                    <Select 
                      activeItem={{title: activeDay, value: activeDay}} 
                      handleChange={(value: ISelectItem) => setActiveDay(value.title as TDay)}
                      selectList={daysList.map(item => ({title: item, value: item}))}
                    >
                      День доставки
                    </Select>
                  </div>
                  <div style={{zIndex: 12}} className="w-full">
                    <Select 
                      activeItem={{title: activeTime, value: activeTime}} 
                      handleChange={(value: ISelectItem) => setActiveTime(value.title as TTime)}
                      selectList={timeList.map(item => ({title: item, value: item}))}
                    >
                      Время доставки
                    </Select>
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col gap-[11px]">
                  <div style={{zIndex: 11}} className="w-full">
                    <Select 
                      activeItem={{title: activeDeliveryDate, value: activeDeliveryDate}} 
                      handleChange={(value: ISelectItem) => setActiveDeliveryDate(value.title as TDeliveryDate)}
                      selectList={deliveryDateList.map(item => ({title: item, value: item}))}
                    >
                      Как часто доставлять
                    </Select>
                  </div>
                  <div style={{zIndex: 10}} className="w-full">
                    <Select 
                      activeItem={{title: activePreriod, value: activePreriod}} 
                      handleChange={(value: ISelectItem) => setActivePreriod(value.title as TPeriod)}
                      selectList={periodList.map(item => ({title: item, value: item}))}
                    >
                      Срок подписки
                    </Select>
                  </div>
                </div>
              </div>
            </AnimationHeightWrapper>
            <div className="flex items-center justify-between roboto">
              <p className="text-[#8C8C8C] text-[14px] leading-[151%] font-bold">Настроить получателя</p>
              <Button onClick={() => setRecipientIsOpen(!recipientIsOpen)} className="w-[30px] aspect-square flex-center">
                <svg className={`transition-all ${recipientIsOpen && "rotate-180"}`} width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.710938 0.707031L6.71094 6.70703L12.7109 0.707031" stroke="#797979" strokeWidth="2"/>
                </svg>
              </Button>
            </div>
            <AnimationHeightWrapper isOpen={recipientIsOpen} withoutOverflowHidden className="mt-[11px]">
              <div className="z-[10]">
                <div className="mt-[11px] flex flex-col gap-[16px]">
                  <div className="flex sm:flex-row flex-col gap-[11px]">
                    <Input 
                      placeholder="Иванов Иван Иванович" 
                      setValue={setFullValue} 
                      value={fullnameValue} 
                      label="Получатель"
                    />
                    <Input 
                      placeholder="Южно-Сахалинск, ул. Ленина, 45, кв. 12" 
                      setValue={setAddressValue} 
                      value={addressValue} 
                      label="Адрес получателя"
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col gap-[11px]">
                    <Input 
                      placeholder="Иванов Иван Иванович" 
                      setValue={setContactValue} 
                      value={contactValue} 
                      label="Контакст получателя"
                    />
                    <Input 
                      placeholder="Добавьте метод связи" 
                      setValue={setMethodContactValue} 
                      value={methodContactValue} 
                      label="Метод связи"
                    />
                  </div>
                </div>
              </div>
            </AnimationHeightWrapper>
            <div className="flex items-center justify-between p-[20px_0px] mt-[16px] lg:gap-[0px] gap-[30px] roboto">
              <Button onClick={() => {}} className="flex items-center gap-[4px] w-fit">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.9257 7.99916L13.6132 2.41166C13.6918 2.31881 13.6257 2.17773 13.5043 2.17773H12.0793C11.9953 2.17773 11.915 2.21523 11.8596 2.27952L7.99356 6.88845L4.12749 2.27952C4.07392 2.21523 3.99356 2.17773 3.90784 2.17773H2.48284C2.36142 2.17773 2.29534 2.31881 2.37392 2.41166L7.06142 7.99916L2.37392 13.5867C2.35631 13.6074 2.34502 13.6327 2.34138 13.6596C2.33774 13.6865 2.3419 13.7139 2.35337 13.7386C2.36484 13.7632 2.38313 13.784 2.40608 13.7985C2.42903 13.8131 2.45568 13.8207 2.48284 13.8206H3.90784C3.99177 13.8206 4.07213 13.7831 4.12749 13.7188L7.99356 9.10988L11.8596 13.7188C11.9132 13.7831 11.9936 13.8206 12.0793 13.8206H13.5043C13.6257 13.8206 13.6918 13.6795 13.6132 13.5867L8.9257 7.99916Z" fill="#808080" fillOpacity="0.85"/>
                </svg>
                <p className="text-[#909191] text-[16px] font-semibold">Отменить <SmHidden>подписку</SmHidden></p>
              </Button>
              <Button onClick={() => {}} className="sm:p-[17.3px_26px] p-[17.3px_12px] bg-yellow rounded-[11px] active:scale-95 sm:w-fit w-full">
                <p className="text-[16px] text-[#252525] font-semibold text-nowrap">Изменить подписку</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};