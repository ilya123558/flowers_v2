'use client'
import { AdditionaServicesPremiumDelivery } from "@/shared/additiona-services-premium-delivery/AdditionaServicesPremiumDelivery";
import { AdditionaServicesSubscribe } from "@/shared/additiona-services-subscribe/AdditionaServicesSubscribe";

export const AdditionaServices = () => {
  return (
    <div className="flex flex-col sm:gap-[24px] gap-[18px] sm:mt-[24px] mt-[28px]">
      <AdditionaServicesSubscribe />
      <AdditionaServicesPremiumDelivery />
    </div>
  );
};