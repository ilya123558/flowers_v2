import { useEffect, useState } from "react";
import { Button } from "../button/Button";
import { LoginStatus } from "../login-status/LoginStatus";

interface IProps {
  setSelectSocial: (value: "whatsapp" | "telegram" | null) => void
}

export const LoginDesktop = ({ setSelectSocial }: IProps) => {
  const [qrCodeIsScanned, setQrCodeIsScanned] = useState(false)

  // удалить
  useEffect(() => {
    setTimeout(() => {
      setQrCodeIsScanned(true)
    }, 2000)
  })

  return (
    <div className="p-[14px_10px_10px]">
      <Button onClick={() => setSelectSocial(null)} className="active:scale-[0.98] text-center w-full">
        <p className="text-[14px] text-[#BCBCBC]">← Выбрать другой мессенджер</p>
      </Button>
      {qrCodeIsScanned
        ? <LoginStatus setSelectSocial={setSelectSocial} />
        : (
          <>
            <div className="">
              <div className="text-center leading-[144%]">
                <p className="text-[24px] mt-[3px] text-[#C8C8C8] font-bold">Отсканируйте QR-код</p>
              </div>
              <div className="flex-center">
                <div className="mt-[8px] w-[188px] aspect-square bg-white rounded-[6px] overflow-hidden">
                  {/* Сюда qr */}
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};