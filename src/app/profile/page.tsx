'use client'
import { ProfileUnauth } from "@/features/profile-unauth/ProfileUnauth";
import { Container } from "@/shared/container/Container";
import { NavAnimated } from "@/shared/nav-animated/NavAnimated";
import { ProfileNavItems } from "@/utils/enam";
import { Events } from "@/widgets/events/Events";
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
    <section className="sm:mb-[200px] roboto">
      <Container className="sm:mt-[56px] mt-[20px]">
        <div className="border-b-[1px] border-[#404040]">
          <NavAnimated 
            list={navItems}
            activeValue={activeValue}
            setActiveValue={setActiveValue}
          />
        </div>
      </Container>
        <div>
          {isAuth
            ? (
              <>
                <Container>
                  <h4 className="lg:text-[24px] text-[16px] font-bold lg:mt-[40px] mt-[20px] text-[#C8C8C8]">
                    {activeValue === ProfileNavItems.Favorites && `Избранные букеты (${6})`}
                    {activeValue === ProfileNavItems.PersonalData && 'Мои данные'}
                    {activeValue === ProfileNavItems.Subscriptions && 'Мои подписки'}
                  </h4>
                </Container>
                <div className="lg:mt-[40px] mt-[20px]">
                  {activeValue === ProfileNavItems.Favorites && <ProfileFavorites />}
                  {activeValue === ProfileNavItems.PersonalData && <ProfilePersonalData />}
                  {activeValue === ProfileNavItems.HistoryAndBonuses && <ProfileHistoryAndBonuses />}
                  {activeValue === ProfileNavItems.Subscriptions && <ProfileSubscriptions />}
                  {activeValue === ProfileNavItems.Events && <Events />}
                </div>
              </>
            )
            : (
              <ProfileUnauth>
                {activeValue === ProfileNavItems.Favorites && 'Избранные букеты'}
                {activeValue === ProfileNavItems.PersonalData && 'Мои данные'}
                {activeValue === ProfileNavItems.HistoryAndBonuses && 'История и бонусы'}
                {activeValue === ProfileNavItems.Subscriptions && 'Мои подписки'}
                {activeValue === ProfileNavItems.Events && 'События'}
              </ProfileUnauth>
            )
          }
        </div>
    </section>
  )
}