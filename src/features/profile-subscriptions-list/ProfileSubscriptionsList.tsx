'use client'
import { ProfileSubscriptionsItem } from "@/shared/profile-subscriptions-item/ProfileSubscriptionsItem";
import { TMySubscription } from "@/utils/types/subscription";

interface IProps {
  title: string
  list: TMySubscription[]
}

export const ProfileSubscriptionsList = ({title, list}: IProps) => {
  return (
    <div className="roboto">
      <h4 className="text-[#878787] text-[18px] leading-[100%] font-medium">{title}</h4>
      <div className="grid lg:grid-cols-2 gap-[16px] mt-[16px]">
        {list.map(item => (
          <ProfileSubscriptionsItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
};