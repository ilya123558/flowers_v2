import { ButtonWithLink } from "@/shared/button/ButtonWithLink";
import { Logo } from "@/shared/logo/Logo";

export const HeaderLogo = () => {
  return (
    <ButtonWithLink link="/" className="bg-black flex-center gap-[8px]">
      <Logo />
      <p className="uppercase font-bold text-[15px]">Первый Цветочный</p>
    </ButtonWithLink>
  );
};