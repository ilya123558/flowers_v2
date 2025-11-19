import { CategoryForPoints } from "@/features/category-for-points/CategoryForPoints";
import { ProductForPointsSlider } from "@/features/product-for-points-slider/ProductForPointsSlider";
import { SmHidden } from "@/shared/wrappers/SizeHidden";
import { SmShow } from "@/shared/wrappers/SizeShow";

export const PointsRecomendation = () => {
  return (
    <div>
      <div className="w-full sm:bg-box-gray h-[1px] mt-[16px]"></div>
      <h3 className="lg:text-[30px] text-[30px] leading-[38px] font-bold mt-[16px] sm:px-0 px-[16px] text-white">Завершите букет стильной деталью</h3>
      <SmHidden>
        <CategoryForPoints />
      </SmHidden>
      <ProductForPointsSlider />
      <SmShow>
        <CategoryForPoints />
      </SmShow>
    </div>
  );
};