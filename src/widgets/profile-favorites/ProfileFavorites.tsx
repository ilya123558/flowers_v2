import { Card } from "@/shared/card/Card";
import { productList } from "@/utils/const/product";

export const ProfileFavorites = () => {
  return (
    <div className="mt-[16px] grid grid-cols-4 gap-[16px]">
      {productList.map((product, index) => (
        <Card key={index} {...product} isFavorite/>
      ))}
    </div>
  );
};