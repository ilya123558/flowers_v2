'use client'
import { Breadcrumbs } from "@/features/breadcrumbs/Breadcrumbs";
import { Container } from "@/shared/container/Container";
import { CategoryForPoints } from "@/features/category-for-points/CategoryForPoints";
import { Header } from "@/widgets/header/Header";
import { ProductInfo } from "@/widgets/product-info/ProductInfo";
import { ProductSlider } from "@/widgets/product-slider/ProductSlider";
import { PointsRecomendation } from "@/widgets/points-recomendation/PointsRecomendation";
import { Basket } from "@/widgets/basket/Basket";

export default function Page () {
  return (
    <section className="mb-[200px]">
      <Container>
        <Breadcrumbs list={[
          {link: '/', title: 'Каталог'},
          {link: '/', title: 'Солнечный день'},
        ]}/>
        <div className="mt-[16px] grid grid-cols-12 gap-[40px] w-full">
          <ProductSlider />
          <ProductInfo />
        </div>
        <PointsRecomendation />
      </Container>
    </section>
  )
}