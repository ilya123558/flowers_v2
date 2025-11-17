import { Button } from "../button/Button";
import { LoginStatus } from "../login-status/LoginStatus";

interface IProps {
  setSelectSocial: (value: "whatsapp" | "telegram" | null) => void
}

export const LoginMobile = ({ setSelectSocial }: IProps) => {
  return (
    <div className="p-[14px_10px_10px]">
      <Button onClick={() => setSelectSocial(null)} className="active:scale-[0.98] text-center w-full">
        <p className="text-[14px] text-[#BCBCBC]">← Выбрать другой мессенджер</p>
      </Button>
      <LoginStatus setSelectSocial={setSelectSocial} />
    </div>
  );
};