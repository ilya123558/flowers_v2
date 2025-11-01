import { HeaderLogo } from "@/features/header-logo/HeaderLogo";
import { HeaderNav } from "@/features/header-nav/HeaderNav";
import { HeaderProfile } from "@/features/header-profile/HeaderProfile";
import { Container } from "@/shared/container/Container";

export const Header = () => {
  return (
    <header className="">
      <div className="bg-black roboto w-screen left-0 fixed right-0 z-20">
        <div className="flex-center h-[38px] text-[15px] font-medium text-white-opasity bg-secondary-bg">
          Доставка день-в-день по Южно-Сахалинску при заказе до 18:00
        </div>
        <Container>
          <div className="flex justify-between items-center h-[74px]">
            <HeaderLogo />
            <HeaderNav />
            <HeaderProfile />
          </div>
        </Container>
      </div>
      <div className="h-[120px]"></div>
    </header>
  );
};