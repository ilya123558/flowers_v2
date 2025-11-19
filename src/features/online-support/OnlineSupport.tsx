'use client'
import { Button } from "@/shared/button/Button";
import { SocialButton } from "@/shared/social-button/SocialButton";

export const OnlineSupport = () => {
  const handleWhatsappClick = () => {
    // window.open('https://wa.me/79280000000', '_blank');
  };

  const handleTelegramClick = () => {
    // window.open('https://t.me/yourusername', '_blank');
  };

  return (
    <div className="fixed sm:bottom-[32px] sm:right-[32px] bottom-0 left-0 right-0 sm:left-auto z-40 roboto">
      <div className="bg-[#000000B2] rounded-[10px] rounded-t-[10px] p-[13.2px_15px] flex items-center sm:justify-center justify-between gap-[7.5px] shadow-lg sm:m-0 m-[0px_13px_13px]">
        <SocialButton type="whatsapp" size="small" onClick={handleWhatsappClick} />

        <div className="text-[#E4E4E4] text-center leading-[120%] text-[15px]">
          <p className="text-[18px]">Мы онлайн 24/7</p>
          <p className="text-[14px]">реальные люди, не бот</p>
        </div>

        <SocialButton type="telegram" size="small" onClick={handleTelegramClick} />
      </div>
    </div>
  );
};
