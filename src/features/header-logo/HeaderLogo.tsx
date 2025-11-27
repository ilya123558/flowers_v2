import { ButtonWithLink } from "@/shared/button/ButtonWithLink";
import { Logo } from "@/shared/logo/Logo";
import { SmHidden } from "@/shared/wrappers/SizeHidden";
import { SmShow } from "@/shared/wrappers/SizeShow";

export const HeaderLogo = () => {
  return (
    <ButtonWithLink link="/" className="flex-center gap-[8px] roboto">
      <Logo />
      <SmHidden>
        <p className="uppercase font-bold text-[15px]">Первый Цветочный</p>
      </SmHidden>
      <SmShow>
        <p className="uppercase font-bold text-[18px] ">Первый <br/> <span className="text-[12px] leading-[100%]">Цветочный</span></p>
      </SmShow>
    </ButtonWithLink>
  );
};