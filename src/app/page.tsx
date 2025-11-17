'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { ProductServiceInfoBlock } from "@/shared/product-service-info-block/ProductServiceInfoBlock";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import { Catalog } from "@/widgets/catalog/Catalog";
import { FAQ } from "@/widgets/faq/FAQ";
import { HomeEventsInfo } from "@/widgets/home-events-info/HomeEventsInfo";
import { HomeFlowersInBox } from "@/widgets/home-flowers-in-box/HomeFlowersInBox";
import { HomeInfo } from "@/widgets/home-info/HomeInfo";
import { HomeLoopVideoBlock } from "@/widgets/home-loop-video-block/HomeLoopVideoBlock";
import { HomePreview } from "@/widgets/home-preview/HomePreview";
import { HomeReview } from "@/widgets/home-review/HomeReview";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <section className="lg:mb-[156px] overflow-x-hidden">
      <HomePreview />
      <LgHidden>
        <div className="w-full bg-secondary-bg h-[170px] mt-[-220px]"></div>
      </LgHidden>
      <div className="sm:mt-[0px] mt-[40px]">
        <Catalog isHidden />
      </div>
      <LgShow>
        <div className="mt-[-1px] pt-[10px] bg-secondary-bg">
          <div className="px-[16px] bg-secondary-bg mb-[-1px] h-[100px]">
            <Button onClick={() => router.push('/catalog')} className="bg-pink p-[17.3px_26px] rounded-[11px] active:scale-95 mt-[18px] w-full">
              <p className="text-[18.4px] font-bold">Посмотреть все {52}</p>
            </Button>
          </div>
        </div>
      </LgShow>
      <ProductServiceInfoBlock />
      {/* <LgShow>
        <div className="w-full h-[230px] bg-secondary-bg">
          <Container>
            <p className="text-[#EBEBEB] text-[32px] font-extrabold leading-[100%] pt-[20px]">ДОБАВЬТЕ ПРЕМИУМ ДОСТАВКУ</p>
            <p className="mt-[27px] text-[#B7B7B7] text-[16px] font-medium leading-[100%]">На выбор можем доставить“Яндекс” от 120 рублей. </p>
          </Container>
        </div>
      </LgShow> */}
      <HomeLoopVideoBlock />
      <HomeFlowersInBox />
      <HomeReview />
      <FAQ />
      <HomeEventsInfo />
      <HomeInfo />
    </section>
  );
}
