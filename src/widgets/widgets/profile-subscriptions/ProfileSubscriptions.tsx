'use client'
import { ProfileSubscriptionsList } from "@/features/profile-subscriptions-list/ProfileSubscriptionsList";
import { Container } from "@/shared/container/Container";
import { myActiveSubscriptionList, myUnactiveSubscriptionList } from "@/utils/const/subscription";

export const ProfileSubscriptions = () => {
  return (
    <Container>
      <div className="flex flex-col gap-[40px] mt-[16px]">
        <ProfileSubscriptionsList 
          list={myActiveSubscriptionList} 
          title={`Активные (${myActiveSubscriptionList.length})`}
        />
        <ProfileSubscriptionsList 
          list={myUnactiveSubscriptionList} 
          title={`Не активные (${myUnactiveSubscriptionList.length})`}
        />
      </div>
    </Container>
  );
};