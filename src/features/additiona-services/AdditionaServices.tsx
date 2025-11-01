'use client'
import { AdditionaServicesPremiumDelivery } from "@/shared/additiona-services-premium-delivery/AdditionaServicesPremiumDelivery";
import { AdditionaServicesSubscribe } from "@/shared/additiona-services-subscribe/AdditionaServicesSubscribe";

export const AdditionaServices = () => {
  return (
    <div className="flex flex-col gap-[24px] mt-[24px]">
      <AdditionaServicesSubscribe />
      <AdditionaServicesPremiumDelivery />
    </div>
  );
};