import { ButtonWithLink } from "@/shared/button/ButtonWithLink";
import { Logo } from "@/shared/logo/Logo";

export const HeaderLogo = () => {
  return (
    <ButtonWithLink link="/" className="flex-center gap-[8px] roboto">
      <Logo />
      <p className="uppercase font-bold text-[15px]">Первый Цветочный</p>
    </ButtonWithLink>
  );
};