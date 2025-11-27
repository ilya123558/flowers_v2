import { Button } from "@/shared/button/Button";
import { Card, IProduct } from "@/shared/card/Card";
import { LgHidden, SmHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow, MdShow, SmShow } from "@/shared/wrappers/SizeShow";
import { productList } from "@/utils/const/product";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useState } from "react";


export const ProductCatalog = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [activePage, setActivePage] = useState(1)
  const pageTotal = 5

  const handlePrevPage = () => {
    if(activePage !== 1) {
      setActivePage(prev => prev - 1)
    }
  }

  const handleNextPage = () => {
    if(activePage !== pageTotal) {
      setActivePage(prev => prev + 1)
    }
  }

  return (
    <div id="catalog-product-list">
      <SmHidden>
        <p className="text-[17px] font-bold lg:pl-[0px]">Найдено 52</p>
        <div className="mt-[16px] grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-[16px] lg:px-[0px]">
          {productList.map((product, index) => (
            <Card key={index} {...product}/>
          ))}
        </div>
        <div className="flex-center mt-[92px]">
          <div className="flex-center gap-[8px]">
            <Button onClick={() => handlePrevPage()} className="bg-[#2D2D2D] aspect-square flex-center rounded-[2px] border-[1px] border-[#2D2D2D] w-[30px] active:scale-95">
              <svg className="rotate-180" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.39777 5.66233L3.36027 0.9467C3.34449 0.93428 3.32553 0.926562 3.30557 0.924431C3.2856 0.9223 3.26544 0.925844 3.2474 0.934655C3.22936 0.943466 3.21417 0.957188 3.20357 0.974243C3.19298 0.991299 3.18741 1.011 3.1875 1.03108V2.06634C3.1875 2.13197 3.2183 2.19491 3.2692 2.23509L8.09063 5.99983L3.2692 9.76456C3.21697 9.80474 3.1875 9.86768 3.1875 9.93331V10.9686C3.1875 11.0583 3.29063 11.1079 3.36027 11.053L9.39777 6.33733C9.44908 6.2973 9.4906 6.2461 9.51915 6.18761C9.5477 6.12913 9.56254 6.06491 9.56254 5.99983C9.56254 5.93475 9.5477 5.87052 9.51915 5.81204C9.4906 5.75356 9.44908 5.70235 9.39777 5.66233Z" fill="#D9D9D9"/>
              </svg>
            </Button>
            {Array(pageTotal).fill(null).map((_, index) => (
              <Button 
                key={index} 
                onClick={() => setActivePage(index + 1)} 
                className={clsx("bg-[#2D2D2D] aspect-square flex-center rounded-[2px] border-[1px] border-[#2D2D2D] w-[30px] active:scale-95", activePage === index + 1 && '!border-yellow')}
              >
                <p className="text-light-gray">{index + 1}</p>
              </Button>
            ))}
            <Button onClick={() => handleNextPage()} className="bg-[#2D2D2D] aspect-square flex-center rounded-[2px] border-[1px] border-[#2D2D2D] w-[30px] active:scale-95">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.39777 5.66233L3.36027 0.9467C3.34449 0.93428 3.32553 0.926562 3.30557 0.924431C3.2856 0.9223 3.26544 0.925844 3.2474 0.934655C3.22936 0.943466 3.21417 0.957188 3.20357 0.974243C3.19298 0.991299 3.18741 1.011 3.1875 1.03108V2.06634C3.1875 2.13197 3.2183 2.19491 3.2692 2.23509L8.09063 5.99983L3.2692 9.76456C3.21697 9.80474 3.1875 9.86768 3.1875 9.93331V10.9686C3.1875 11.0583 3.29063 11.1079 3.36027 11.053L9.39777 6.33733C9.44908 6.2973 9.4906 6.2461 9.51915 6.18761C9.5477 6.12913 9.56254 6.06491 9.56254 5.99983C9.56254 5.93475 9.5477 5.87052 9.51915 5.81204C9.4906 5.75356 9.44908 5.70235 9.39777 5.66233Z" fill="#D9D9D9"/>
              </svg>
            </Button>
          </div>
        </div>
      </SmHidden>
      <SmShow>
        <p className="text-[17px] font-bold pl-[16px]">Найдено 52</p>
        <div className="mt-[16px] grid grid-cols-2 gap-[16px] overflow-x-scroll px-[16px]">
          {productList.map((product, index) => (
            <Card key={index} {...product}/>
          ))}
        </div>
        {!isHome && (
          <div className="flex-center mt-[30px] mb-[30px]">
            <div className="flex-center gap-[8px]">
              <Button onClick={() => handlePrevPage()} className="bg-[#2D2D2D] aspect-square flex-center rounded-[2px] border-[1px] border-[#2D2D2D] w-[30px] active:scale-95">
                <svg className="rotate-180" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.39777 5.66233L3.36027 0.9467C3.34449 0.93428 3.32553 0.926562 3.30557 0.924431C3.2856 0.9223 3.26544 0.925844 3.2474 0.934655C3.22936 0.943466 3.21417 0.957188 3.20357 0.974243C3.19298 0.991299 3.18741 1.011 3.1875 1.03108V2.06634C3.1875 2.13197 3.2183 2.19491 3.2692 2.23509L8.09063 5.99983L3.2692 9.76456C3.21697 9.80474 3.1875 9.86768 3.1875 9.93331V10.9686C3.1875 11.0583 3.29063 11.1079 3.36027 11.053L9.39777 6.33733C9.44908 6.2973 9.4906 6.2461 9.51915 6.18761C9.5477 6.12913 9.56254 6.06491 9.56254 5.99983C9.56254 5.93475 9.5477 5.87052 9.51915 5.81204C9.4906 5.75356 9.44908 5.70235 9.39777 5.66233Z" fill="#D9D9D9"/>
                </svg>
              </Button>
              {Array(pageTotal).fill(null).map((_, index) => (
                <Button 
                  key={index} 
                  onClick={() => setActivePage(index + 1)} 
                  className={clsx("bg-[#2D2D2D] aspect-square flex-center rounded-[2px] border-[1px] border-[#2D2D2D] w-[30px] active:scale-95", activePage === index + 1 && '!border-yellow')}
                >
                  <p className="text-light-gray">{index + 1}</p>
                </Button>
              ))}
              <Button onClick={() => handleNextPage()} className="bg-[#2D2D2D] aspect-square flex-center rounded-[2px] border-[1px] border-[#2D2D2D] w-[30px] active:scale-95">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.39777 5.66233L3.36027 0.9467C3.34449 0.93428 3.32553 0.926562 3.30557 0.924431C3.2856 0.9223 3.26544 0.925844 3.2474 0.934655C3.22936 0.943466 3.21417 0.957188 3.20357 0.974243C3.19298 0.991299 3.18741 1.011 3.1875 1.03108V2.06634C3.1875 2.13197 3.2183 2.19491 3.2692 2.23509L8.09063 5.99983L3.2692 9.76456C3.21697 9.80474 3.1875 9.86768 3.1875 9.93331V10.9686C3.1875 11.0583 3.29063 11.1079 3.36027 11.053L9.39777 6.33733C9.44908 6.2973 9.4906 6.2461 9.51915 6.18761C9.5477 6.12913 9.56254 6.06491 9.56254 5.99983C9.56254 5.93475 9.5477 5.87052 9.51915 5.81204C9.4906 5.75356 9.44908 5.70235 9.39777 5.66233Z" fill="#D9D9D9"/>
                </svg>
              </Button>
            </div>
          </div>
        )}
      </SmShow>
    </div>
  );
};