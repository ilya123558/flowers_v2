'use client'
import { LoginDesktop } from "@/shared/login-desktop/LoginDesktop";
import { LoginMobile } from "@/shared/login-mobile/LoginMobile";
import { LoginSelectSocial } from "@/shared/login-select-social/LoginSelectSocial";
import { ModalWrapper } from "@/shared/wrappers/ModalWrapper";
import { useDevice } from "@/utils/hooks/useDevice";
import { TClassName } from "@/utils/types/main";
import { useState } from "react";

type TProps = TClassName<{
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}>

export const LoginModal = (props: TProps) => {
  const device = useDevice().getDevice()
  const [selectSocial, setSelectSocial] = useState<"whatsapp" | "telegram" | null>(null)

  return (
    <ModalWrapper {...props} className="w-[412px] h-[300px] bg-[#272420E5] border-none rounded-[14px] roboto !p-0">
      {selectSocial 
        ? (
          <>
            {(device === 'desktop' || device === 'laptop')
              ? <LoginDesktop setSelectSocial={setSelectSocial}/>
              : <LoginMobile setSelectSocial={setSelectSocial}/>
            }
          </>
        )
        : <LoginSelectSocial setSelectSocial={setSelectSocial} />
      }
    </ModalWrapper>
  );
};
