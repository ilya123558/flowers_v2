'use client'
import { useState } from 'react'
import { Breadcrumbs } from '@/features/breadcrumbs/Breadcrumbs'
import { Container } from '@/shared/container/Container'
import { ProductInfo } from '@/widgets/product-info/ProductInfo'
import { ProductSlider } from '@/widgets/product-slider/ProductSlider'
import { PointsRecomendation } from '@/widgets/points-recomendation/PointsRecomendation'
import { SmHidden } from '@/shared/wrappers/SizeHidden'
import { SmShow } from '@/shared/wrappers/SizeShow'

const imageList = [
  '/images/product-images/img-1.jpg',
  '/images/product-images/img-2.jpg',
  '/images/product-images/img-3.jpg',
  '/images/product-images/img-4.jpg',
  '/images/product-images/img-5.jpg',
]

const flowersList = [
  {
    title: 'Красный тюльпан',
    src: '/images/product/flower-1.png',
  },
  {
    title: 'Роза',
    src: '/images/product/flower-2.png',
  },
  {
    title: 'Жёлтый тюльпан',
    src: '/images/product/flower-3.png',
  },
  {
    title: 'Оранжевая роза',
    src: '/images/product/flower-4.png',
  },
  {
    title: '3 клопа',
    src: '/images/product/flower-1.png',
  },
  {
    title: '1 гусеница',
    src: '/images/product/flower-1.png',
  },
]

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isOpenProductTagModal, setIsOpenProductTagModal] = useState(false)

  return (
    <section className="lg:mb-[200px] mt-[0px]">
      <SmHidden>
        <Container>
          <Breadcrumbs
            list={[
              { link: '/', title: 'Каталог' },
              { link: '/', title: 'Солнечный день' },
            ]}
          />
          <div className="sm:mt-[16px] grid grid-cols-12 gap-[40px] w-full">
            <ProductSlider
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              imageList={imageList}
              flowersList={flowersList}
              setIsOpenProductTagModal={setIsOpenProductTagModal}
            />
            <ProductInfo
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              imageList={imageList}
              flowersList={flowersList}
              isOpenProductTagModal={isOpenProductTagModal}
              setIsOpenProductTagModal={setIsOpenProductTagModal}
            />
          </div>
          <PointsRecomendation />
        </Container>
      </SmHidden>
      <SmShow>
        <div className="sm:mt-[16px] lg:grid flex flex-col grid-cols-12 gap-[25px] w-full">
          <ProductSlider
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            imageList={imageList}
            flowersList={flowersList}
            setIsOpenProductTagModal={setIsOpenProductTagModal}
          />
          <div className="px-[16px]">
            <ProductInfo
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              imageList={imageList}
              flowersList={flowersList}
              isOpenProductTagModal={isOpenProductTagModal}
              setIsOpenProductTagModal={setIsOpenProductTagModal}
            />
          </div>
        </div>
        <PointsRecomendation />
      </SmShow>
    </section>
  )
}
