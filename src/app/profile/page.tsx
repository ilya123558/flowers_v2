'use client'
import { ProfileUnauth } from "@/features/profile-unauth/ProfileUnauth";
import { Container } from "@/shared/container/Container";
import { NavAnimated } from "@/shared/nav-animated/NavAnimated";
import { ProfileNavItems } from "@/utils/enam";
import { ProfileFavorites } from "@/widgets/profile-favorites/ProfileFavorites";
import { ProfileHistoryAndBonuses } from "@/widgets/profile-history-and-bonuses/ProfileHistoryAndBonuses";
import { ProfilePersonalData } from "@/widgets/profile-personal-data/ProfilePersonalData";
import { ProfileSubscriptions } from "@/widgets/profile-subscriptions/ProfileSubscriptions";
import { useState } from "react";

const navItems = Object.values(ProfileNavItems)

export default function Page () {
  const isAuth = true
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
        <div>
          {isAuth
            ? (
              <>
                <h4 className="text-[24px] font-bold mt-[40px] text-[#C8C8C8]">
                  {activeValue === ProfileNavItems.Favorites && `Избранные букеты (${6})`}
                  {activeValue === ProfileNavItems.PersonalData && 'Мои данные'}
                  {activeValue === ProfileNavItems.HistoryAndBonuses && ''}
                  {activeValue === ProfileNavItems.Subscriptions && 'Мои подписки'}
                </h4>
                <div className="mt-[40px]">
                  {activeValue === ProfileNavItems.Favorites && <ProfileFavorites />}
                  {activeValue === ProfileNavItems.PersonalData && <ProfilePersonalData />}
                  {activeValue === ProfileNavItems.HistoryAndBonuses && <ProfileHistoryAndBonuses />}
                  {activeValue === ProfileNavItems.Subscriptions && <ProfileSubscriptions />}
                </div>
              </>
            )
            : (
              <ProfileUnauth>
                {activeValue === ProfileNavItems.Favorites && `Избранные букеты (${6})`}
                {activeValue === ProfileNavItems.PersonalData && 'Мои данные'}
                {activeValue === ProfileNavItems.HistoryAndBonuses && 'История и бонусы'}
                {activeValue === ProfileNavItems.Subscriptions && 'Мои подписки'}
              </ProfileUnauth>
            )
          }
        </div>
      </Container>
    </section>
  )
}