'use client'
import { useEffect } from 'react'
import { Breadcrumbs } from '@/features/breadcrumbs/Breadcrumbs'
import { Container } from '@/shared/container/Container'
import { ProductInfo } from '@/widgets/product-info/ProductInfo'
import { ProductSlider } from '@/widgets/product-slider/ProductSlider'
import { PointsRecomendation } from '@/widgets/points-recomendation/PointsRecomendation'
import { SmHidden } from '@/shared/wrappers/SizeHidden'
import { SmShow } from '@/shared/wrappers/SizeShow'
import { useAppDispatch, setProduct, clearProduct, incCount } from '@/views/store'
import { OnlineSupport } from '@/features/online-support/OnlineSupport'
import { Button } from '@/shared/button/Button'

const productData = {
  id: '1',
  title: 'Солнечный день',
  description: 'Жёлтые тюльпаны и герберы',
  price: 2390,
  servicePrice: 1900,
  points: 135,
  likes: 109,
  reviews: 67,
  addedToFavorites: 3200,
  imageList: [
    '/images/product-images/img-1.jpg',
    '/images/product-images/img-2.jpg',
    '/images/product-images/img-3.jpg',
    '/images/product-images/img-4.jpg',
    '/images/product-images/img-5.jpg',
  ],
  flowersList: [
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
  ],
  emotions: ['Романтика', 'Нежность', 'Весна'],
}

export default function Page() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setProduct(productData))
    return () => {
      dispatch(clearProduct())
    }
  }, [dispatch])

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
            <ProductSlider />
            <ProductInfo />
          </div>
          <PointsRecomendation />
        </Container>
      </SmHidden>
      <SmShow>
        <div className="sm:mt-[16px] lg:grid flex flex-col grid-cols-12 gap-[25px] w-full">
          <ProductSlider />
          <div className="px-[16px]">
            <ProductInfo />
          </div>
          <div className="px-[24px] w-full">
            <Button onClick={() => dispatch(incCount())} className='flex-center p-[25.5px] roboto bg-[#252525] border-[1px] border-yellow rounded-[11px] w-full active:scale-[0.98]'>
              <div className="flex-center gap-[8px]">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7979 7.96875V4.03125C11.7979 3.16101 11.4522 2.32641 10.8369 1.71106C10.2215 1.0957 9.38692 0.75 8.51668 0.75C7.64644 0.75 6.81184 1.0957 6.19649 1.71106C5.58113 2.32641 5.23543 3.16101 5.23543 4.03125V7.96875M15.1719 6.22487L16.2771 16.7249C16.3383 17.3067 15.8833 17.8125 15.2979 17.8125H1.73543C1.59736 17.8126 1.46081 17.7837 1.33463 17.7277C1.20846 17.6716 1.0955 17.5896 1.00308 17.4871C0.910653 17.3845 0.840842 17.2636 0.798177 17.1323C0.755513 17.001 0.740948 16.8622 0.75543 16.7249L1.86143 6.22487C1.88694 5.98299 2.0011 5.75911 2.1819 5.59641C2.3627 5.43371 2.59733 5.34371 2.84055 5.34375H14.1928C14.6968 5.34375 15.1194 5.72437 15.1719 6.22487ZM5.56355 7.96875C5.56355 8.05577 5.52898 8.13923 5.46745 8.20077C5.40591 8.26231 5.32245 8.29688 5.23543 8.29688C5.14841 8.29688 5.06495 8.26231 5.00341 8.20077C4.94188 8.13923 4.9073 8.05577 4.9073 7.96875C4.9073 7.88173 4.94188 7.79827 5.00341 7.73673C5.06495 7.67519 5.14841 7.64062 5.23543 7.64062C5.32245 7.64062 5.40591 7.67519 5.46745 7.73673C5.52898 7.79827 5.56355 7.88173 5.56355 7.96875ZM12.1261 7.96875C12.1261 8.05577 12.0915 8.13923 12.0299 8.20077C11.9684 8.26231 11.885 8.29688 11.7979 8.29688C11.7109 8.29688 11.6274 8.26231 11.5659 8.20077C11.5044 8.13923 11.4698 8.05577 11.4698 7.96875C11.4698 7.88173 11.5044 7.79827 11.5659 7.73673C11.6274 7.67519 11.7109 7.64062 11.7979 7.64062C11.885 7.64062 11.9684 7.67519 12.0299 7.73673C12.0915 7.79827 12.1261 7.88173 12.1261 7.96875Z" stroke="#EDBF81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className='text-yellow text-[20px] font-bold leading-[100%] '>В корзину</p>
              </div>
            </Button>
          </div>
        </div>
        <div className="mt-[27px]">
          <OnlineSupport isComponent/>
        </div>
        <PointsRecomendation />
      </SmShow>
    </section>
  )
}
