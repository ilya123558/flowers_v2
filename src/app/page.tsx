'use client'
import { Button } from "@/shared/button/Button";
import { ProductServiceInfoBlock } from "@/shared/product-service-info-block/ProductServiceInfoBlock";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import { Catalog } from "@/widgets/catalog/Catalog";
import { FAQ } from "@/widgets/faq/FAQ";
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
      <Catalog isHidden />
      <LgShow>
        <div className="px-[16px] bg-secondary-bg mt-[-1px] mb-[-1px]">
          <Button onClick={() => router.push('/catalog')} className="bg-pink p-[17.3px_26px] rounded-[11px] active:scale-95 mt-[18px] w-full">
            <p className="text-[18.4px] font-bold">Посмотреть все {52}</p>
          </Button>
        </div>
      </LgShow>
      <ProductServiceInfoBlock />
      <HomeLoopVideoBlock />
      <HomeFlowersInBox />
      <HomeReview />
      <FAQ />
      <HomeInfo />
    </section>
  );
}
