'use client'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BoxWrapper } from '@/shared/wrappers/BoxWrapper';
import Image from 'next/image';
import { Button } from '@/shared/button/Button';
import { useRef } from 'react';
import { TextNowrap } from '@/shared/text/text-nowrap/TextNowrap';
import { SmHidden } from '@/shared/wrappers/SizeHidden';
import { formatPrice } from '@/utils/libs/formatPrice';

const productList = [
  {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
  {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
  {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом', 'С новым годом', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
  {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом', 'С новым годом', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
      {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом', 'С новым годом', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
  {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом', 'С новым годом', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
  {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом', 'С новым годом', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
  {
    imgSrc: '/images/product/product-for-point.png', 
    title: 'Розовый шепот', 
    category: 'Открытка', 
    tags: ['Другу', 'С новым годом', 'С новым годом', 'С новым годом'], 
    price: 2300, 
    points: 23
  },
]

export const ProductForPointsSlider = () => {
  const swiperRef = useRef<SwiperRef>(null)

  return (
    <div className="relative z-[1]">
      <Swiper
        spaceBetween={16}
        slidesPerView={4}
        ref={swiperRef}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='mt-[27px] !sm:px-0 !px-[16px]'
        breakpoints={{
          1000: { slidesPerView: 4 },
          768: { slidesPerView: 3 },
          640: { slidesPerView: 2 },
          0: { slidesPerView: 1.4 },
        }}
      >
        {productList.map((item, index) => (
          <SwiperSlide key={index} className='!h-auto flex'>
            <BoxWrapper className='rounded-[16px] overflow-hidden h-full'>
              <div className="aspect-[290/168] w-full relative">
                <img src={item.imgSrc} alt="" className="absolute inset-0 w-full h-full object-cover"/>
                <div 
                  style={{background: 'linear-gradient(180deg, rgba(115, 115, 115, 0) 20.65%, #221403 73.68%)'}} 
                  className='absolute top-0 left-0 w-full h-full opacity-[0.6]'
                />
                <div className="absolute top-[11px] left-0 w-full flex justify-between gap-[8px] h-[32px] px-[16px]">
                  <div className="bg-[#181818CC] p-[7px_8px] top-[9px] left-[8px] rounded-[9px] flex-center gap-[4px]">
                    <div className="relative w-[16px] aspect-square">
                      <img src="/images/product/coins.png" alt="points" className="w-full h-full object-contain"/>
                    </div>
                    <p className="text-[#B3B3B3] text-[14px]">135</p>
                  </div>
                  <Button onClick={() => {}} className="h-full active:scale-95 roboto-flex">
                    <BoxWrapper className="h-full p-[0px_10px] !bg-[#181818CC]">
                      <div className="flex items-center gap-[7px] h-full">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.5 6.875C17.5 4.80417 15.7508 3.125 13.5933 3.125C11.9808 3.125 10.5958 4.06333 10 5.4025C9.40417 4.06333 8.01917 3.125 6.40583 3.125C4.25 3.125 2.5 4.80417 2.5 6.875C2.5 12.8917 10 16.875 10 16.875C10 16.875 17.5 12.8917 17.5 6.875Z" stroke="#D46F77" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-red">109</p>
                      </div>
                    </BoxWrapper>
                  </Button>
                </div>
                <div className="absolute bottom-[11px] left-0 w-full flex justify-between gap-[8px] h-[32px] px-[16px]">
                  <ul className="flex gap-[13px] overflow-x-scroll">
                    <li className="bg-[#18181899] rounded-[8px] p-[8px_13px] roboto">
                      <p className='text-[14px] font-semibold text-[#B3B3B3]'>Люблю</p>
                    </li>
                    <li className="bg-[#18181899] rounded-[8px] p-[8px_13px] roboto">
                      <p className='text-[14px] font-semibold text-[#B3B3B3]'>Коллекции</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-[16px]">
                <div className='roboto'>
                  <TextNowrap className='text-[22px] font-black'>{item.title}</TextNowrap>
                  <TextNowrap className='text-gray text-[14px] mt-[10px]'>{item.category}</TextNowrap>
                  <p className='text-[20px] mt-[10px]'>{formatPrice(item.price)}</p>
                </div>
              </div>
            </BoxWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <SmHidden>
        <Button onClick={() => swiperRef.current?.swiper.slidePrev()} className='absolute top-[50%] left-0 translate-y-[-50%] z-[1] active:scale-95 translate-x-[-50%]'>
          <div style={{boxShadow: '0px 1px 2px 0px #1018280D'}} className="bg-[#D0D5DD] w-[36px] aspect-square flex-center rounded-full rotate-180">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Button>
        <Button onClick={() => swiperRef.current?.swiper.slideNext()} className='absolute top-[50%] right-0 translate-y-[-50%] z-[1] active:scale-95 translate-x-[50%]'>
          <div style={{boxShadow: '0px 1px 2px 0px #1018280D'}} className="bg-[#D0D5DD] w-[36px] aspect-square flex-center rounded-full">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </Button>
      </SmHidden>
    </div>
  );
};