import { HomeInfoList } from "@/features/home-info-list/HomeInfoList";
import { Container } from "@/shared/container/Container";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { Title55px } from "@/shared/text/title55px/Title55px";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";

export const HomeInfo = () => {
  return (
    <div className="">
      <LgHidden>
        <div className="mt-[170px]">
          <Container>
            <p className="text-[#EBEBEB] text-[35px]">Мы не просто привозим букеты —</p>
            <Title55px className="mt-[32px]">Мы помогаем передать эмоции красиво</Title55px>
            <HomeInfoList />
          </Container>
        </div>
      </LgHidden>
      <LgShow>
        <div className="bg-secondary-bg pt-[24px] pb-[21px]">
          <p className="text-[#EBEBEB] text-[16px] px-[16px]">Мы не просто привозим букеты —</p>
          <Title23px className="mt-[2px] !text-[#EBEBEB] leading-[100%] px-[16px]">Мы помогаем передать <br/> эмоции красиво</Title23px>
          <HomeInfoList />
        </div>
      </LgShow>
    </div>
  );
};