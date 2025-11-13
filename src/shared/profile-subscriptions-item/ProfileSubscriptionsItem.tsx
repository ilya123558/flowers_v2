import { TMySubscription } from "@/utils/types/subscription";
import { Button } from "../button/Button";
import { useEffect, useState } from "react";
import { TDeliveryDate, TEmotion, TPeriod, TDay, TTime } from "@/utils/types";
import { ISelectItem, Select } from "../select/Select";
import { daysList, deliveryDateList, emotionsList, periodList, timeList } from "@/utils/const/main";
import { Input } from "../input/Input";

interface IProductEmotion {
  productId: string
  activeEmotion: ISelectItem
}

export const ProfileSubscriptionsItem = (props: TMySubscription) => {
  const [productEmotionList, setProductEmotionList] = useState<IProductEmotion[]>([])

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
    <div className="p-[20px] bg-[#212121] rounded-[8px] text-[#D9D9D9]">
      <p className="text-[16px] font-medium text-[#8C8C8C] leading-[151%]">Подписка от {props.date}</p>
      <div className="mt-[16px] bg-[#373737] rounded-[8px] p-[16px] flex sm:flex-row flex-col sm:gap-[0px] gap-[16px] justify-between items-center">
        <div className="flex items-center gap-[8px] text-[16px] leading-[151%] font-medium">
          <p>Статус:</p>
          <div className="min-w-[8px] h-[8px] bg-green rounded-full"/>
          <p>Доставлено {props.delivery_status.current} из {props.delivery_status.tital}</p>
        </div>
        <Button onClick={() => {}} className="flex items-center gap-[8px] active:scale-[0.98]">
          <img src="/images/home/review/telegram.png" alt="telegram" className="w-[21px] h-[21px]"/>
          <p className="underline">Написать в поддержку</p>
        </Button>
      </div>
      <p className="mt-[16px] text-[14px] leading-[151%]">
        Эмоцию можно менять перед каждой доставкой. Флористы подберут букет, который передаст смысл: оттенками, стилем, композицией.
      </p>
      <div className="mt-[16px] flex flex-col gap-[20px]">
        {props.items.map((productItem, index, arr) => (
          <div key={productItem.id} className="flex sm:items-center justify-between sm:flex-row flex-col sm:gap-[0px] gap-[16px]">
            <div className="flex items-center gap-[8px]">
              <img src={productItem.img} alt="product" className="object-cover object-center w-[34px] h-[56px] rounded-[2px]"/>
              <div>
                <p className="underline text-[16px] font-bold leading-[151%]">
                  {productItem.title}, {productItem.size}
                </p>
                <p className="text-[16px] leading-[151%]">Премиум доставка</p>
              </div>
            </div>
            <div style={{zIndex: 19 - index}} className="sm:w-[50%]">
              <Select 
                activeItem={productEmotionList.find(item => item.productId === productItem.id)?.activeEmotion || {title: '', value: ''}} 
                handleChange={(value: ISelectItem) => handleChangeEmotion(value, productItem.id)}
                selectList={emotionsList.map(item => ({title: item, value: item}))}
                bgColor="#111111"
              >
                Выберите эмоцию
              </Select>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full border-t-[1px] border-[#6D6D6A] border-dashed mt-[16px]"></div>
      <div className="mt-[16px] flex flex-col gap-[11px]">
        <div style={{zIndex: 14}}>
          <Select 
            activeItem={{title: activeDeliveryDate, value: activeDeliveryDate}} 
            handleChange={(value: ISelectItem) => setActiveDeliveryDate(value.title as TDeliveryDate)}
            selectList={deliveryDateList.map(item => ({title: item, value: item}))}
            bgColor="#111111"
          >
            Как часто доставлять
          </Select>
        </div>
        <div style={{zIndex: 13}}>
          <Select 
            activeItem={{title: activePreriod, value: activePreriod}} 
            handleChange={(value: ISelectItem) => setActivePreriod(value.title as TPeriod)}
            selectList={periodList.map(item => ({title: item, value: item}))}
            bgColor="#111111"
          >
            Срок подписки
          </Select>
        </div>
        <div className="flex sm:flex-row flex-col gap-[11px]">
          <div style={{zIndex: 12}} className="w-full">
            <Select 
              activeItem={{title: activeDay, value: activeDay}} 
              handleChange={(value: ISelectItem) => setActiveDay(value.title as TDay)}
              selectList={daysList.map(item => ({title: item, value: item}))}
              bgColor="#111111"
            >
              День доставки
            </Select>
          </div>
          <div style={{zIndex: 11}} className="w-full">
            <Select 
              activeItem={{title: activeTime, value: activeTime}} 
              handleChange={(value: ISelectItem) => setActiveTime(value.title as TTime)}
              selectList={timeList.map(item => ({title: item, value: item}))}
              bgColor="#111111"
            >
              Время доставки
            </Select>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[1px] border-[#6D6D6A] border-dashed mt-[16px]"></div>
      <div className="mt-[11px] flex flex-col gap-[16px]">
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
      <div className="flex sm:flex-row flex-col items-center justify-between p-[20px_0px] mt-[16px] lg:gap-[0px] gap-[30px]">
        <Button onClick={() => {}} className="flex items-center gap-[4px] sm:w-fit w-full">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.9257 7.99916L13.6132 2.41166C13.6918 2.31881 13.6257 2.17773 13.5043 2.17773H12.0793C11.9953 2.17773 11.915 2.21523 11.8596 2.27952L7.99356 6.88845L4.12749 2.27952C4.07392 2.21523 3.99356 2.17773 3.90784 2.17773H2.48284C2.36142 2.17773 2.29534 2.31881 2.37392 2.41166L7.06142 7.99916L2.37392 13.5867C2.35631 13.6074 2.34502 13.6327 2.34138 13.6596C2.33774 13.6865 2.3419 13.7139 2.35337 13.7386C2.36484 13.7632 2.38313 13.784 2.40608 13.7985C2.42903 13.8131 2.45568 13.8207 2.48284 13.8206H3.90784C3.99177 13.8206 4.07213 13.7831 4.12749 13.7188L7.99356 9.10988L11.8596 13.7188C11.9132 13.7831 11.9936 13.8206 12.0793 13.8206H13.5043C13.6257 13.8206 13.6918 13.6795 13.6132 13.5867L8.9257 7.99916Z" fill="#808080" fillOpacity="0.85"/>
          </svg>
          <p className="text-[#909191] text-[16px] font-semibold">Отменить подписку</p>
        </Button>
        <Button onClick={() => {}} className="p-[17.3px_26px] bg-yellow rounded-[11px] active:scale-95 sm:w-fit w-full">
          <p className="text-[16px] text-[#252525] font-semibold">Изменить подписку</p>
        </Button>
      </div>
    </div>
  );
};