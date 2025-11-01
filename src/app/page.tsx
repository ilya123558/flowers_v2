import { ProductServiceInfoBlock } from "@/shared/product-service-info-block/ProductServiceInfoBlock";
import { Catalog } from "@/widgets/catalog/Catalog";
import { FAQ } from "@/widgets/faq/FAQ";
import { HomeFlowersInBox } from "@/widgets/home-flowers-in-box/HomeFlowersInBox";
import { HomeInfo } from "@/widgets/home-info/HomeInfo";
import { HomeLoopVideoBlock } from "@/widgets/home-loop-video-block/HomeLoopVideoBlock";
import { HomePreview } from "@/widgets/home-preview/HomePreview";
import { HomeReview } from "@/widgets/home-review/HomeReview";

export default function Home() {
  return (
    <section className="mb-[156px]">
      <HomePreview />
      <div className="w-full bg-secondary-bg h-[170px] mt-[-220px]"></div>
      <Catalog isHidden />
      <ProductServiceInfoBlock />
      <HomeLoopVideoBlock />
      <HomeFlowersInBox />
      <HomeReview />
      <FAQ />
      <HomeInfo />
    </section>
  );
}
