'use client'
import { ProductCatalog } from "@/features/product-catalog/ProductCatalog";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import clsx from "clsx";
import { useState } from "react";

const list = [
  {
    imgSrc: '/images/home/select-types/img-1.png',
    title: 'Монобукеты',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-2.png',
    title: 'Авторские',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-3.png',
    title: 'Авторские',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: false
  },
  {
    imgSrc: '/images/home/select-types/img-4.png',
    title: 'В коробке',
    subtitle: 'Букеты из одного вида цветов для яркого акцента и лаконичного образа',
    isNew: true
  },
  {
    imgSrc: '/images/home/select-types/img-5.png',
    title: 'Коллекции',
    subtitle: 'Букеты созданные из сезонных цветов',
    isNew: false
  },
]

export default function Page () {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="mt-[30px]">
      <div className="lg:mb-[320px]">
        <Container>
          <div className="roboto">
            <p className="text-[24px] font-bold leading-[100%] text-[#C8C8C8]">Типы букетов</p>
            <p className="text-[#878787] text-[18px] leading-[100%] font-medium mt-[24px]">
              Откройте для себя разнообразие наших композиций — от авторских шедевров до элегантных монобукетов и подарочных коллекций, созданных с мастерством наших флористов из Южно-Сахалинска.
            </p>
            <div className="mt-[24px] sm:p-[32px] p-[10px] bg-[#212121] rounded-[8px]">
              <div className="sm:flex grid grid-cols-2 sm:gap-[16px] gap-[8px]">
                {list.map((item, index) => (
                  <Button onClick={() => setActiveIndex(index)} key={index} className={clsx("bg-[#393939] rounded-[8px] border-[3px] border-transparent sm:p-[20px] p-[10px] w-full text-start", activeIndex === index && "border-yellow")}>
                    <div className="relative">
                      {item.isNew && (
                        <div className="absolute top-0 right-0 w-fit p-[4px] bg-[#50AF19] roboto rounded-[0px_6px_6px_6px]">
                          <p className="text-[12px] font-semibold leading-[100%] text-[#252525]">Новинка</p>
                        </div>
                      )}
                      <img src={item.imgSrc} alt="product-type" width={62} height={62} className="max-h-[62px] object-cover"  />
                    </div>
                    <p className={clsx("mt-[8px] text-[#F2F2F7] text-[16px] font-bold leading-[151%]", activeIndex === index && "!text-yellow")}>{item.title}</p>
                    <p className="mt-[8px] text-[#F2F2F7] text-[14px] leading-[151%]">{item.subtitle}</p>
                  </Button>
                ))}
              </div>
              <div className="mt-[24px]">
                <p className="text-[#D9D9D9] text-[21px] leading-[151%]">Авторские</p>
                <p className="text-[#D9D9D9] text-[16px] leading-[151%] mt-[8px]">
                  Наши авторские букеты — это результат мастерства и творческого подхода наших флористов. Каждый букет создаётся индивидуально, с вниманием к деталям, гармонии цветов и уникальности композиции.
                </p>
                <p className="text-[#D9D9D9] text-[16px] leading-[151%] mt-[20px]">
                  Наша команда — это профессионалы, которые обучались флористике в разных городах России, перенимали опыт ведущих мастеров и теперь объединились в целый штат в Южно-Сахалинске. Благодаря этому каждый букет не просто красивый, а создан с пониманием композиции, цвета и эмоций.
                </p>
                <p className="text-[#D9D9D9] text-[16px] leading-[151%] mt-[20px]">
                  Авторский букет — идеальный выбор для тех, кто ценит: <br/>
                    •	уникальные композиции, отражающие индивидуальность подарка;<br/>
                    •	мастерство флористов, вложенное в каждый цветок;<br/>
                    •	гармоничное сочетание цветов и зелени, которое невозможно повторить стандартным способом.
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Container className="mt-[40px]">
          <ProductCatalog />
        </Container>
      </div>
    </section>
  )
}


        // <ul className="grid grid-cols-5 gap-[16px] h-[125px] mt-[16px]">
        //   {list.map(({imgSrc, subtitle, title, isNew}, index) => (
        //     <Button key={index} onClick={() => setActiveIndex(index)} className="active:scale-95">
        //       <DashedWrapper 
        //         className={`w-full rounded-[19px] flex items-center justify-between h-full gap-[9.6px] ${activeIndex === index ? '!border-solid !border-[3px] !border-yellow p-[13.25px_11px]': 'p-[14.25px_12.7px]'}`}
        //       >
        //         <div className="h-full flex-center relative">
        //           {isNew && (
        //             <div className="absolute top-0 left-0 w-full p-[4px] bg-[#50AF19] roboto rounded-[0px_6px_6px_6px]">
        //               <p className="text-[12px] font-semibold leading-[100%] text-[#252525]">Новинка</p>
        //             </div>
        //           )}
        //           <Image src={imgSrc} alt="type-img" width={62} height={62} className="min-w-[62px]"/>
        //         </div>
        //         <div className="text-start">
        //           <h5 className={clsx("text-[17.5px] font-black transition-all", activeIndex === index && 'text-yellow')}>{title}</h5>
        //           <p className={clsx("mt-[10px] text-[12.7px] text-gray transition-all", activeIndex === index && 'text-yellow')}>{subtitle}</p>
        //         </div>
        //       </DashedWrapper>
        //     </Button>
        //   ))}
        // </ul>