'use client'
import { Button } from "@/shared/button/Button";
import { Input } from "@/shared/input/Input";
import { Select, ISelectItem } from "@/shared/select/Select";
import { DatePicker } from "@/shared/date-picker/DatePicker";
import { ModalWrapper } from "@/shared/wrappers/ModalWrapper";
import { TClassName } from "@/utils/types/main";
import { useState } from "react";
import { emotionsList, socialList } from "@/utils/const/main";
import { Checkbox } from "@/shared/checkbox/Checkbox";
import { PriceSlider } from "@/shared/price-slider/PriceSlider";
import { InputPhone } from "@/shared/input/InputPhone";

type TProps = TClassName<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}>

const eventTypes: ISelectItem[] = [
  { title: 'День рождения мамы', value: 'birthday_mom' },
  { title: 'День рождения папы', value: 'birthday_dad' },
  { title: 'День рождения друга', value: 'birthday_friend' },
  { title: '8 марта', value: '8_march' },
  { title: 'Годовщина свадьбы', value: 'wedding_anniversary' },
]

export const CreateEventModal = (props: TProps) => {
  const [activeEvent, setActiveEvent] = useState<ISelectItem>(eventTypes[0])
  const [eventDate, setEventDate] = useState<Date | undefined>(undefined)
  const [description, setDescription] = useState('')
  const [activeEmotion, setActiveEmotion] = useState<ISelectItem>(emotionsList.map(item => ({title: item, value: item}))[0])
  const [includeServiceCost, setIncludeServiceCost] = useState(false)
  const [minValue, setMinValue] = useState(5000)
  const [maxValue, setMaxValue] = useState(8000)
  const [activeSocial, setActiveSocial] = useState<ISelectItem>(socialList.map(item => ({title: item, value: item}))[0])
  const [phoneValue, setPhoneValue] = useState('')

  return (
    <ModalWrapper {...props} className="!bg-[#212121] sm:p-[32px] p-[10px] border-none">
      <div className="sm:w-[702px] w-[350px]">
        <div className="flex justify-between items-center">
          <p className="sm:text-[24px] text-[18px] leading-[151%] font-medium text-[#D9D9D9]">Создание события</p>
          <Button onClick={() => props.setIsOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.92961 7.99916L13.6171 2.41166C13.6957 2.31881 13.6296 2.17773 13.5082 2.17773H12.0832C11.9993 2.17773 11.9189 2.21523 11.8635 2.27952L7.99747 6.88845L4.13139 2.27952C4.07782 2.21523 3.99746 2.17773 3.91175 2.17773H2.48675C2.36532 2.17773 2.29925 2.31881 2.37782 2.41166L7.06532 7.99916L2.37782 13.5867C2.36022 13.6074 2.34893 13.6327 2.34529 13.6596C2.34164 13.6865 2.34581 13.7139 2.35727 13.7386C2.36874 13.7632 2.38704 13.784 2.40999 13.7985C2.43294 13.8131 2.45958 13.8207 2.48675 13.8206H3.91175C3.99568 13.8206 4.07604 13.7831 4.13139 13.7188L7.99747 9.10988L11.8635 13.7188C11.9171 13.7831 11.9975 13.8206 12.0832 13.8206H13.5082C13.6296 13.8206 13.6957 13.6795 13.6171 13.5867L8.92961 7.99916Z" fill="#909191"/>
            </svg>
          </Button>
        </div>
        <p className="mt-[8px] sm:text-[16px] text-[14px] leading-[100%] text-[#909191]">За 5 дней до события вы получаете уведомление с подборкой подходящих букетов</p>
        <div className="sm:mt-[24px] mt-[16px] grid sm:grid-cols-2 gap-[16px]">
          <Select
            selectList={eventTypes}
            activeItem={activeEvent}
            handleChange={setActiveEvent}
            classNameText="leading-[151%]"
            className="z-[19]"
          >
            Название события
          </Select>
          <DatePicker
            value={eventDate}
            onChange={setEventDate}
            classNameText="leading-[151%]"
          >
            Дата события
          </DatePicker>
        </div>
        <div className="sm:mt-[24px] mt-[16px]">
          <Input 
            classNameInput="placeholder:text-[#646464]"
            label="Коротко о человеке или событии — чтобы мы легче" 
            placeholder="например, «Любит розовые оттенки и нежные букеты»"
            value={description}
            setValue={setDescription} 
          />
        </div>
        <div className="sm:mt-[24px] mt-[16px] relative z-[18]">
          <Select 
            classNameText="leading-[151%]"
            activeItem={activeEmotion} 
            handleChange={(value: ISelectItem) => setActiveEmotion(value)}
            selectList={emotionsList.map(item => ({title: item, value: item}))}
          >
            Выберите эмоцию
          </Select>
        </div>
        <div className="sm:mt-[24px] mt-[16px]">
          <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-[10px]">
            <p className="text-[#8C8C8C] text-[16px] leading-[151%]">
              Выберите примерный бюджет
            </p>
            <Checkbox isChecked={includeServiceCost} setIsChecked={setIncludeServiceCost}>
              <p className="text-[#8C8C8C]">Включить стоимость сервиса</p>
            </Checkbox>
          </div>
          <PriceSlider
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            minLimit={0}
            maxLimit={20000}
          />
        </div>
        <div className="sm:mt-[24px] mt-[16px] grid grid-cols-2 gap-[16px]">
          <div className="relative z-10">
            <Select 
              activeItem={activeSocial}
              selectList={socialList.map(item => ({title: item, value: item}))}
              handleChange={setActiveSocial}
              classNameText="leading-[151%]"
            >
              Выберите мессенджер
            </Select>
          </div>
          <InputPhone
            value={phoneValue}
            setValue={setPhoneValue}
            label="Контакты отправителя"
            placeholder="+7 (928) *** ** **"
          />   
        </div>
        <div className="sm:mt-[24px] mt-[16px] flex justify-between items-center">
          <Button onClick={() => props.setIsOpen(false)} className="p-[12.5px_12px] rounded-[10px] sm:active:scale-95 active:scale-[0.98]">
            <p className="text-[#999999] text-[16px] leading-[151%]">Отменить</p>
          </Button>
          <Button onClick={() => {}} className="p-[12.5px_12px] rounded-[10px] bg-yellow sm:active:scale-95 active:scale-[0.98]">
            <p className="text-[#404040] text-[16px] leading-[151%] font-bold">Создать событие</p>
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};
