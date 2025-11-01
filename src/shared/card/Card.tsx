import Image from "next/image";
import { BoxWrapper } from "../wrappers/BoxWrapper";
import { Button } from "../button/Button";
import { formatPrice } from "@/utils/libs/formatPrice";
import { TextNowrap } from "../text/text-nowrap/TextNowrap";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface IProduct {
  imgSrc: string
  tags: string[]
  category: string
  title: string
  price: number
  points: number
  isFavorite?: boolean
}

export const Card = (product: IProduct) => {
  const router = useRouter()
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false)

  return (
    <div className='!h-auto w-full flex'>
      <BoxWrapper className='rounded-[16px] overflow-hidden h-full w-full bg-[#2D2D2D]'>
        <div className="aspect-[290/345] w-full relative">
          <Image onClick={() => router.push('/product')} src={product.imgSrc} alt='product-img' fill className="cursor-pointer"/>
          <div className="absolute bg-[#2B2B2BB2] p-[7px_8px] top-[9px] left-[8px] rounded-[9px] flex-center gap-[4px]">
            <div className="relative w-[16px] aspect-square">
              <Image src={'/images/product/coins.png'} alt='points' fill/>
            </div>
            <p className='text-[#DADADA] text-[14px]'>{product.points} балла</p>
          </div>
          <div className="absolute top-[9px] right-[8px] rounded-[9px] flex bg-[#2B2B2BB2]">
            <Button onClick={() => {}} className='active:scale-95'>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.2565 15.962C26.7305 16.582 26.7305 17.419 26.2565 18.038C24.7635 19.987 21.1815 24 16.9995 24C12.8175 24 9.23552 19.987 7.74252 18.038C7.51191 17.7411 7.38672 17.3759 7.38672 17C7.38672 16.6241 7.51191 16.2589 7.74252 15.962C9.23552 14.013 12.8175 10 16.9995 10C21.1815 10 24.7635 14.013 26.2565 15.962Z" fill="#D9D9D9" fillOpacity="0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
            <Button onClick={() => setIsFavorite(!isFavorite)} className='active:scale-95'>
              {isFavorite
                ? (
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" fill="#E3006B" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
                : (
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" fill="#D9D9D9" fillOpacity="0.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            </Button>
          </div>
        </div>
        <div className="p-[16px]">
          <div className=''>
            <TextNowrap className='text-[22px] font-black'>{product.title}</TextNowrap>
            <TextNowrap className='text-gray text-[14px] mt-[10px]'>{product.category}</TextNowrap>
            <p className='text-[20px] mt-[15px]'>{formatPrice(product.price)}</p>
            <ul className="flex gap-[8px] h-[43px] mt-[10px]">
              {product.tags.map((tag, i, tagArr) => {
                if(tagArr.length > 2 && i >= 2) {
                  if(i === (tagArr.length - 1)) {
                    return (
                      <li key={i} className='bg-[#252525] flex-center p-[0px_10px] rounded-[8px]'>
                        ...
                      </li>
                    )
                  }

                  return (
                    <></>
                  )
                }

                return (
                  <li key={i} className='bg-[#252525] flex-center p-[0px_10px] rounded-[8px]'>
                    {tag}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mt-[16px] flex items-center gap-[9px] h-[42px]">
            <Button onClick={() => {}} className='h-full w-full border-[1px] border-yellow rounded-[11px] active:scale-95'>
              <div className="flex-center gap-[8px]">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7979 7.96875V4.03125C11.7979 3.16101 11.4522 2.32641 10.8369 1.71106C10.2215 1.0957 9.38692 0.75 8.51668 0.75C7.64644 0.75 6.81184 1.0957 6.19649 1.71106C5.58113 2.32641 5.23543 3.16101 5.23543 4.03125V7.96875M15.1719 6.22487L16.2771 16.7249C16.3383 17.3067 15.8833 17.8125 15.2979 17.8125H1.73543C1.59736 17.8126 1.46081 17.7837 1.33463 17.7277C1.20846 17.6716 1.0955 17.5896 1.00308 17.4871C0.910653 17.3845 0.840842 17.2636 0.798177 17.1323C0.755513 17.001 0.740948 16.8622 0.75543 16.7249L1.86143 6.22487C1.88694 5.98299 2.0011 5.75911 2.1819 5.59641C2.3627 5.43371 2.59733 5.34371 2.84055 5.34375H14.1928C14.6968 5.34375 15.1194 5.72437 15.1719 6.22487ZM5.56355 7.96875C5.56355 8.05577 5.52898 8.13923 5.46745 8.20077C5.40591 8.26231 5.32245 8.29688 5.23543 8.29688C5.14841 8.29688 5.06495 8.26231 5.00341 8.20077C4.94188 8.13923 4.9073 8.05577 4.9073 7.96875C4.9073 7.88173 4.94188 7.79827 5.00341 7.73673C5.06495 7.67519 5.14841 7.64062 5.23543 7.64062C5.32245 7.64062 5.40591 7.67519 5.46745 7.73673C5.52898 7.79827 5.56355 7.88173 5.56355 7.96875ZM12.1261 7.96875C12.1261 8.05577 12.0915 8.13923 12.0299 8.20077C11.9684 8.26231 11.885 8.29688 11.7979 8.29688C11.7109 8.29688 11.6274 8.26231 11.5659 8.20077C11.5044 8.13923 11.4698 8.05577 11.4698 7.96875C11.4698 7.88173 11.5044 7.79827 11.5659 7.73673C11.6274 7.67519 11.7109 7.64062 11.7979 7.64062C11.885 7.64062 11.9684 7.67519 12.0299 7.73673C12.0915 7.79827 12.1261 7.88173 12.1261 7.96875Z" stroke="#EDBF81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className='text-yellow text-[16px] font-bold'>В корзину</p>
              </div>
            </Button>
            <Button onClick={() => router.push('/product')} className='h-full w-full rounded-[11px] active:scale-95'>
              <div className="flex-center gap-[8px]">
                <p className='text-yellow text-[16px] font-bold'>Подробнее</p>
              </div>
            </Button>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};