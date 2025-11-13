'use client'
import { Breadcrumbs } from "@/features/breadcrumbs/Breadcrumbs";
import { Container } from "@/shared/container/Container";
import { ProductInfo } from "@/widgets/product-info/ProductInfo";
import { ProductSlider } from "@/widgets/product-slider/ProductSlider";
import { PointsRecomendation } from "@/widgets/points-recomendation/PointsRecomendation";

export default function Page () {
  return (
    <section className="lg:mb-[200px] lg:mt-[0px] mt-[20px]">
      <Container>
        <Breadcrumbs list={[
          {link: '/', title: 'Каталог'},
          {link: '/', title: 'Солнечный день'},
        ]}/>
        <div className="mt-[16px] lg:grid flex flex-col grid-cols-12 gap-[40px] w-full">
          <ProductSlider />
          <ProductInfo />
        </div>
        <PointsRecomendation />
      </Container>
    </section>
  )
}