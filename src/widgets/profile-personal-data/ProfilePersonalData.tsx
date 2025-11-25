'use client'
import { useMe } from "@/api";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { InputPhone } from "@/shared/input/InputPhone";
import { InputSelect } from "@/shared/select/InputSelect";
import { ISelectItem } from "@/shared/select/Select";
import { socialList } from "@/utils/const/main";
import { TSocial } from "@/utils/types";
import { useState } from "react";

type IStateData = {
  socialTitle: TSocial
  contactValue: string
}[]

export const ProfilePersonalData = () => {
  const { data: user } = useMe()
  const [data, setData] = useState<IStateData>([
    {socialTitle: 'Telegram', contactValue: ''}
  ])

  const [activeSocialItem, setActiveSocialItem] = useState("Телефон")

  const handleChangeSocial = (index: number, selectList: ISelectItem) => {
    const result = data.map((item, i) => index === i ? {...item, socialTitle: selectList.title as TSocial} : item)
    setData(result)
  }

  const handleChangePhone = (index: number, value: string) => {
    const result = data.map((item, i) => index === i ? {...item, contactValue: value} : item)
    setData(result)
  }

  const handleAddItem = () => {
    setData(prev => ([...prev, {socialTitle: 'Telegram', contactValue: ''}]))
  }

  const handleDeleteItem = (index: number) => {
    const result = data.filter((_, i) => index !== i)
    setData(result)
  }

  return (
    <Container>
      <div className="mt-[16px] w-full lg:p-[24px] p-[12px] rounded-[8px] bg-[#212121] roboto">
        <div className="flex items-center gap-[16px] mb-[24px]">
          <div className="relative min-w-[80px] h-[80px] overflow-hidden rounded-full">
            <img
              src={user?.photo_url || '/images/main/user-img.png'}
              alt="user-avatar"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[20px] font-semibold text-[#D9D9D9]">
              {user?.first_name} {user?.last_name}
            </p>
            {user?.phone && (
              <p className="text-[14px] text-[#8C8C8C] mt-[4px]">{user.phone}</p>
            )}
          </div>
        </div>
        <p className="leading-[151%] text-[16px] font-medium text-[#D9D9D9]">Как с вами связаться</p>
        <p className="leading-[151%] sm:text-[16px] text-[14px] text-[#8C8C8C] mt-[8px]">
          Мы будем присылать фото и отчёты о доставке прямо сюда, чтобы вы могли видеть каждый букет.
        </p>
        <div className="flex flex-col lg:gap-[24px] gap-[40px] mt-[24px]">
          {data.map((item, index, arr) => (
            <div style={{zIndex: arr.length - index}} key={index} className="flex justify-between items-end sm:gap-[16px] gap-[10px] relative">
              <div className="flex lg:flex-row flex-col lg:gap-[16px] gap-[12px] w-full">
                <InputSelect
                  activeItem={{
                    title: socialList.find(socialItem => socialItem === item.socialTitle) || socialList[0], 
                    value: socialList.find(socialItem => socialItem === item.socialTitle) || socialList[0]
                  }}
                  selectList={socialList.map(item => ({title: item, value: item}))}
                  handleChange={(selectList) => handleChangeSocial(index, selectList)}
                >
                  Выберите способ связи
                </InputSelect>
                <InputPhone
                  value={item.contactValue}
                  setValue={(value) => handleChangePhone(index, value)}
                  label="Авторизовать"
                  placeholder="+7 (999) 999 99 99"
                />
              </div>
              <Button onClick={() => handleDeleteItem(index)} className="aspect-square sm:h-[48px] h-[44px] flex-center bg-[#3A3A3A] rounded-[10px] active:scale-95">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.25 6H17.25V4.125C17.25 3.29766 16.5773 2.625 15.75 2.625H8.25C7.42266 2.625 6.75 3.29766 6.75 4.125V6H3.75C3.33516 6 3 6.33516 3 6.75V7.5C3 7.60313 3.08437 7.6875 3.1875 7.6875H4.60312L5.18203 19.9453C5.21953 20.7445 5.88047 21.375 6.67969 21.375H17.3203C18.1219 21.375 18.7805 20.7469 18.818 19.9453L19.3969 7.6875H20.8125C20.9156 7.6875 21 7.60313 21 7.5V6.75C21 6.33516 20.6648 6 20.25 6ZM15.5625 6H8.4375V4.3125H15.5625V6Z" fill="#ED8D88"/>
                </svg>
              </Button>
            </div>
          ))}
        </div>
        <Button onClick={() => handleAddItem()} className="flex items-center gap-[10px] p-[12.5px_12px] bg-[#4B4B4B] rounded-[10px] mt-[24px] active:scale-95">
          <div className="">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.53753 1.57227H7.4661C7.37086 1.57227 7.32324 1.61988 7.32324 1.71512V7.32227H2.00223C1.90699 7.32227 1.85938 7.36988 1.85938 7.46512V8.53655C1.85938 8.63179 1.90699 8.67941 2.00223 8.67941H7.32324V14.2866C7.32324 14.3818 7.37086 14.4294 7.4661 14.4294H8.53753C8.63277 14.4294 8.68039 14.3818 8.68039 14.2866V8.67941H14.0022C14.0975 8.67941 14.1451 8.63179 14.1451 8.53655V7.46512C14.1451 7.36988 14.0975 7.32227 14.0022 7.32227H8.68039V1.71512C8.68039 1.61988 8.63277 1.57227 8.53753 1.57227Z" fill="#D9D9D9"/>
            </svg>
          </div>
          <p className="text-[16px] leading-[151%] text-[#D9D9D9]">Добавить</p>
        </Button>
        <div className="mt-[24px]">
          <p className="text-[16px] font-medium text-[#D9D9D9]">Предпочтительный способ связи</p>
          <div className="mt-[15px] flex sm:flex-row flex-col gap-[16px]">
            {socialList.map((item, index) => (
              <div key={index} className="flex gap-[8px] items-center">
                <Button onClick={() => setActiveSocialItem(item)} className="border-[1px] border-white rounded-full aspect-square w-[17px] bg-[#4B4B4B] flex-center active:scale-95">
                  <div className={`bg-[#303030] rounded-full aspect-square w-[9px] ${activeSocialItem === item && "!bg-yellow"}`}></div>
                </Button>
                <p className="text-[14px] text-[#FFFFFFD9]">{item}</p>
              </div>
            ))}
            <div className="flex gap-[8px] items-center">
              <Button onClick={() => setActiveSocialItem("Телефон")} className="border-[1px] border-white rounded-full aspect-square w-[17px] bg-[#4B4B4B] flex-center active:scale-95">
                <div className={`bg-[#303030] rounded-full aspect-square w-[9px] ${activeSocialItem === "Телефон" && "!bg-yellow"}`}></div>
              </Button>
              <p className="text-[14px] text-[#FFFFFFD9]">Телефон</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-[8px]">
          <Button onClick={() => {}} className="gap-[10px] p-[0px_26px] h-[50.6px] flex-center bg-[#454545] rounded-[10px] mt-[24px] active:scale-95">
            <p className="text-[16px] leading-[151%] text-[#999999]">Сохранить</p>
          </Button>
        </div>
      </div>
    </Container>
  );
};