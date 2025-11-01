'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { NavAnimated } from "@/shared/nav-animated/NavAnimated";
import { ProfileNavItems } from "@/utils/enam";
import { ProfileFavorites } from "@/widgets/profile-favorites/ProfileFavorites";
import { ProfileHistoryAndBonuses } from "@/widgets/profile-history-and-bonuses/ProfileHistoryAndBonuses";
import { ProfilePersonalData } from "@/widgets/profile-personal-data/ProfilePersonalData";
import { ProfileSubscriptions } from "@/widgets/profile-subscriptions/ProfileSubscriptions";
import Image from "next/image";
import { useState } from "react";

const navItems = Object.values(ProfileNavItems)

export default function Page () {
  const isAuth = false
  const [activeValue, setActiveValue] = useState<ProfileNavItems[1]>(navItems[0])

  return (
    <section className="mb-[200px] roboto">
      <Container className="mt-[56px]">
        <div className="border-b-[1px] border-[#404040]">
          <NavAnimated 
            list={navItems}
            activeValue={activeValue}
            setActiveValue={setActiveValue}
          />
        </div>
        <h4 className="text-[24px] font-bold mt-[40px] text-[#C8C8C8]">
          {activeValue === ProfileNavItems.Favorites && `Избранные букеты (${6})`}
          {activeValue === ProfileNavItems.PersonalData && 'Мои данные'}
          {activeValue === ProfileNavItems.HistoryAndBonuses && ''}
          {activeValue === ProfileNavItems.Subscriptions && 'Мои подписки'}
        </h4>
        <div className="mt-[40px]">
          {isAuth
            ? (
              <>
                {activeValue === ProfileNavItems.Favorites && <ProfileFavorites />}
                {activeValue === ProfileNavItems.PersonalData && <ProfilePersonalData />}
                {activeValue === ProfileNavItems.HistoryAndBonuses && <ProfileHistoryAndBonuses />}
                {activeValue === ProfileNavItems.Subscriptions && <ProfileSubscriptions />}
              </>
            )
            : (
              <div className="w-full p-[53px_46px] bg-[#1E1D1A] rounded-[24px]">
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
            )
          }
        </div>
      </Container>
    </section>
  )
}