import { CategoryForPoints } from "@/features/category-for-points/CategoryForPoints";
import { ProductForPointsSlider } from "@/features/product-for-points-slider/ProductForPointsSlider";

export const PointsRecomendation = () => {
  return (
    <div>
      <div className="w-full bg-box-gray h-[1px] mt-[16px]"></div>
      <h3 className="text-[30px] leading-[38px] font-bold mt-[16px]">Завершите букет стильной деталью</h3>
      <CategoryForPoints />
      <ProductForPointsSlider />
    </div>
  );
};