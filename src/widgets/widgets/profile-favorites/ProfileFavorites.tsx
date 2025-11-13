'use client'
import { Card } from "@/shared/card/Card";
import { Container } from "@/shared/container/Container";
import { SmHidden } from "@/shared/wrappers/SizeHidden";
import { SmShow } from "@/shared/wrappers/SizeShow";
import { productList } from "@/utils/const/product";

export const ProfileFavorites = () => {
  return (
    <div className="">
      <SmHidden>
        <Container>
          <div className="mt-[16px] grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-[16px]">
            {productList.map((product, index) => (
              <Card key={index} {...product} isFavorite/>
            ))}
          </div>
        </Container>
      </SmHidden>
      <SmShow>
        <div className="mt-[16px] flex gap-[16px] overflow-x-scroll px-[16px]">
          {productList.map((product, index) => (
            <Card key={index} {...product} isFavorite/>
          ))}
        </div>
      </SmShow>
    </div>
  );
};