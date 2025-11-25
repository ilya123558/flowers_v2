'use client'
import { ProductServiceInfoBlock } from "@/shared/product-service-info-block/ProductServiceInfoBlock";
import { SmHidden } from "@/shared/wrappers/SizeHidden";
import { SmShow } from "@/shared/wrappers/SizeShow";
import { Catalog } from "@/widgets/catalog/Catalog";
import { FAQ } from "@/widgets/faq/FAQ";
import { HomeEventsInfo } from "@/widgets/home-events-info/HomeEventsInfo";
import { HomeFlowersInBox } from "@/widgets/home-flowers-in-box/HomeFlowersInBox";
import { HomeInfo } from "@/widgets/home-info/HomeInfo";
import { HomeLoopVideoBlock } from "@/widgets/home-loop-video-block/HomeLoopVideoBlock";
import { HomePreview } from "@/widgets/home-preview/HomePreview";
import { HomeReview } from "@/widgets/home-review/HomeReview";

export default function Home() {
  return (
    <section className="lg:mb-[156px] overflow-x-hidden">
      <HomePreview />
      <SmHidden>
        <div className="w-full bg-secondary-bg h-[170px]"></div>
        <div className="mt-[-80px]">
          <Catalog />
        </div>
        <ProductServiceInfoBlock/>
      </SmHidden>
      <SmShow>
        <div className="mt-[40px] rounded-[16px_16px_0px_0px] overflow-hidden">
          <Catalog />
        </div>
      </SmShow>
      <HomeLoopVideoBlock />
      <HomeFlowersInBox />
      <HomeReview />
      <SmHidden>
        <FAQ />
        <HomeEventsInfo />
      </SmHidden>
      <SmShow>
        <HomeEventsInfo />
        <FAQ />
      </SmShow>
      <HomeInfo />
    </section>
  );
}
