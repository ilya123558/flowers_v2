import { SocialButton } from "../social-button/SocialButton";

interface IProps {
  setSelectSocial: (value: "whatsapp" | "telegram" | null) => void
}

export const LoginSelectSocial = ({ setSelectSocial }: IProps) => {
  return (
    <div className="p-[34px_35.5px_41px]">
      <div className="text-center text-[#C8C8C8]">
        <p className="text-[22px] leading-[144%] font-bold">Для продолжения нужно войти</p>
        <p className="text-[16px] leading-[144%]">через любимый мессенджер</p>
      </div>

      <div className="flex-center gap-[32px] mt-[24px]">
        <SocialButton type="whatsapp" onClick={() => setSelectSocial('whatsapp')} />
        <SocialButton type="telegram" onClick={() => setSelectSocial('telegram')} />
      </div>
    </div>
  );
};