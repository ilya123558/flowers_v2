import { HomeInfoList } from "@/features/home-info-list/HomeInfoList";
import { Container } from "@/shared/container/Container";
import { Title55px } from "@/shared/text/title55px/Title55px";

export const HomeInfo = () => {
  return (
    <div className="mt-[170px]">
      <Container>
        <p className="text-[#EBEBEB] text-[35px]">Мы не просто привозим букеты —</p>
        <Title55px className="mt-[32px]">Мы помогаем передать эмоции красиво</Title55px>
        <HomeInfoList />
      </Container>
    </div>
  );
};