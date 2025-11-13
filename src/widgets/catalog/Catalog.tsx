'use client'
import { BuildBouquetSelectBudget } from "@/features/build-bouquet-select-budget/BuildBouquetSelectBudget";
import { BuildBouquetSelectTag } from "@/features/build-bouquet-select-tag/BuildBouquetSelectTag";
import { BuildBouquetSelectType } from "@/features/build-bouquet-select-type/BuildBouquetSelectType";
import { ProductCatalog } from "@/features/product-catalog/ProductCatalog";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { Title23px } from "@/shared/text/title23px/Title23px";
import { AnimationHeightWrapper } from "@/shared/wrappers/AnimationHeightWrapper";
import { LgHidden, SmHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow, SmShow } from "@/shared/wrappers/SizeShow";
import { StickyScrollWrapper } from "@/shared/wrappers/StickyScrollWrapper";
import { useScrollStarted } from "@/utils/hooks/useScrollStarted";
import { TClassName } from "@/utils/types/main";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type TProps = TClassName<{
  isHidden?: boolean
}>

export const Catalog = ({className, isHidden = false}: TProps) => {
  const [showAllProducts, setShowAllProducts] = useState(!isHidden)
  const [isOpenfilter, setIsOpenfilter] = useState(true)
  const [selectList, setSelectList] = useState([
    {title: 'Коллекции', isSelect: true},
    {title: 'Люблю', isSelect: true},
    {title: 'до 3000', isSelect: true},
  ])

  const selectListLength = selectList.filter(item => item.isSelect).length

  const scrollStarted = useScrollStarted()

  const handleSelectList = ({title, isSelect}: {title: string, isSelect: boolean}) => {
    setSelectList(prev => prev.map(item => item.title === title ? {...item, isSelect}: item))
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsOpenfilter(false)
  //   }

  //   window.addEventListener('scroll', handleScroll, { passive: true })
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <section className={clsx("pt-[43px] mt-[-1px] relative", className, isHidden && showAllProducts && "mb-[200px]")}>
      <div className="absolute w-screen left-0 top-0 max-h-[1700px] h-full bg-secondary-bg z-[-1]"></div>
      <Container className="">
        <LgHidden>
          <div className="flex items-center justify-between mb-[27px]">
            <h2 className="text-white-light-grey text-[50px] font-extrabold leading-[100%]">Каталог цветов</h2>
            <div className="flex items-center gap-[25px]">
              <Button onClick={() => {}} className="bg-opasity-bg-gray p-[11px_16px] rounded-[20px] active:scale-95">
                <div className="flex-center gap-[10px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.9257 7.99916L13.6132 2.41166C13.6918 2.31881 13.6257 2.17773 13.5043 2.17773H12.0793C11.9953 2.17773 11.915 2.21523 11.8596 2.27952L7.99356 6.88845L4.12749 2.27952C4.07392 2.21523 3.99356 2.17773 3.90784 2.17773H2.48284C2.36142 2.17773 2.29534 2.31881 2.37392 2.41166L7.06142 7.99916L2.37392 13.5867C2.35631 13.6074 2.34502 13.6327 2.34138 13.6596C2.33774 13.6865 2.3419 13.7139 2.35337 13.7386C2.36484 13.7632 2.38313 13.784 2.40608 13.7985C2.42903 13.8131 2.45568 13.8207 2.48284 13.8206H3.90784C3.99177 13.8206 4.07213 13.7831 4.12749 13.7188L7.99356 9.10988L11.8596 13.7188C11.9132 13.7831 11.9936 13.8206 12.0793 13.8206H13.5043C13.6257 13.8206 13.6918 13.6795 13.6132 13.5867L8.9257 7.99916Z" fill="#8C8C8C"/>
                  </svg>
                  <p className="text-[17.5px] font-bold text-opasity-gray">Обнулить все фильтры</p>
                </div>
              </Button>
              <Button onClick={() => setIsOpenfilter(!isOpenfilter)} className="aspect-square pl-[8px] active:scale-95">
                <svg className={clsx("transition-all", isOpenfilter && "rotate-180")} width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.707 10.9141L10.207 1.41406L0.707031 10.9141" stroke="#ADADAD" strokeWidth="2"/>
                </svg>
              </Button>
            </div>
          </div>
          <AnimationHeightWrapper isOpen={isOpenfilter} className="">
            <div className="flex pt-[5px] flex-col lg:gap-[32px] gap-[24px]">
              <BuildBouquetSelectType />
              <BuildBouquetSelectTag />
              <BuildBouquetSelectBudget />
            </div>
          </AnimationHeightWrapper>
          <StickyScrollWrapper
            isOpen={scrollStarted && !isHidden && (selectListLength !== 0)}
            offset={110}
            className="bg-secondary-bg"
          >
            <AnimationHeightWrapper isOpen={!isOpenfilter}>
              <div className="flex items-center gap-[20px] m-[15px_0px] pt-[5px]">
                <Title23px>{selectListLength === 0 ? "Ничего не выбрано" : "Выбрано"}</Title23px>
                <div className="flex gap-[15px] overflow-x-scroll">
                  {selectList.filter(item => item.isSelect).map(item => (
                    <div key={item.title} className="border-yellow border-[1px] rounded-[10px] p-[10px] flex-center gap-[5px]">
                      <p className="text-[14px] text-nowrap">{item.title}</p>
                      <Button onClick={() => handleSelectList({...item, isSelect: false})}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.9257 7.99916L13.6132 2.41166C13.6918 2.31881 13.6257 2.17773 13.5043 2.17773H12.0793C11.9953 2.17773 11.915 2.21523 11.8596 2.27952L7.99356 6.88845L4.12749 2.27952C4.07392 2.21523 3.99356 2.17773 3.90784 2.17773H2.48284C2.36142 2.17773 2.29534 2.31881 2.37392 2.41166L7.06142 7.99916L2.37392 13.5867C2.35631 13.6074 2.34502 13.6327 2.34138 13.6596C2.33774 13.6865 2.3419 13.7139 2.35337 13.7386C2.36484 13.7632 2.38313 13.784 2.40608 13.7985C2.42903 13.8131 2.45568 13.8207 2.48284 13.8206H3.90784C3.99177 13.8206 4.07213 13.7831 4.12749 13.7188L7.99356 9.10988L11.8596 13.7188C11.9132 13.7831 11.9936 13.8206 12.0793 13.8206H13.5043C13.6257 13.8206 13.6918 13.6795 13.6132 13.5867L8.9257 7.99916Z" fill="#8C8C8C"/>
                        </svg>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationHeightWrapper> 
          </StickyScrollWrapper>
        </LgHidden>
      </Container>

      <LgShow>
        <div className="mt-[30px] px-[16px]">
          <div className="flex justify-between items-center">
            <h2 className="text-white-light-grey text-[22px] font-extrabold leading-[100%]">Каталог цветов</h2>
            <Button onClick={() => setIsOpenfilter(!isOpenfilter)} className="aspect-square active:scale-95">
              <svg className={clsx("transition-all", isOpenfilter && "rotate-180")} width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.707 10.9141L10.207 1.41406L0.707031 10.9141" stroke="#ADADAD" strokeWidth="2"/>
              </svg>
            </Button>
          </div>
          <Button onClick={() => {}} className="bg-opasity-bg-gray p-[9px_4px] rounded-[20px] active:scale-95 mt-[16px]">
            <div className="flex-center gap-[4px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.9257 7.99916L13.6132 2.41166C13.6918 2.31881 13.6257 2.17773 13.5043 2.17773H12.0793C11.9953 2.17773 11.915 2.21523 11.8596 2.27952L7.99356 6.88845L4.12749 2.27952C4.07392 2.21523 3.99356 2.17773 3.90784 2.17773H2.48284C2.36142 2.17773 2.29534 2.31881 2.37392 2.41166L7.06142 7.99916L2.37392 13.5867C2.35631 13.6074 2.34502 13.6327 2.34138 13.6596C2.33774 13.6865 2.3419 13.7139 2.35337 13.7386C2.36484 13.7632 2.38313 13.784 2.40608 13.7985C2.42903 13.8131 2.45568 13.8207 2.48284 13.8206H3.90784C3.99177 13.8206 4.07213 13.7831 4.12749 13.7188L7.99356 9.10988L11.8596 13.7188C11.9132 13.7831 11.9936 13.8206 12.0793 13.8206H13.5043C13.6257 13.8206 13.6918 13.6795 13.6132 13.5867L8.9257 7.99916Z" fill="#8C8C8C"/>
              </svg>
              <p className="text-[14px] font-bold text-opasity-gray">Обнулить все фильтры</p>
            </div>
          </Button>
        </div>
        <AnimationHeightWrapper isOpen={isOpenfilter} className="">
          <div className="flex pt-[5px] flex-col lg:gap-[32px] gap-[24px]">
            <BuildBouquetSelectType />
            <BuildBouquetSelectTag />
            <BuildBouquetSelectBudget />
          </div>
        </AnimationHeightWrapper>
        <StickyScrollWrapper
          isOpen={scrollStarted && !isHidden && (selectListLength !== 0)}
          offset={58}
          className="bg-secondary-bg"
          withoutContainer
        >
          <AnimationHeightWrapper isOpen={!isOpenfilter} className={!isOpenfilter ? (scrollStarted ? "!m-[15px]": "!m-[35px_0px]") : "!m-0"}>
            <div className="flex items-center gap-[20px] pt-[5px]">
              <Title23px className="pl-[16px]">{selectList.filter(item => item.isSelect).length === 0 ? "Ничего не выбрано" : "Выбрано"}</Title23px>
              <div className="flex gap-[15px] overflow-x-scroll pr-[16px]">
                {selectList.filter(item => item.isSelect).map(item => (
                  <div key={item.title} className="border-yellow border-[1px] rounded-[10px] p-[10px] flex-center gap-[5px] text-nowrap">
                    <p className="text-[14px]">{item.title}</p>
                    <Button onClick={() => handleSelectList({...item, isSelect: false})}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.9257 7.99916L13.6132 2.41166C13.6918 2.31881 13.6257 2.17773 13.5043 2.17773H12.0793C11.9953 2.17773 11.915 2.21523 11.8596 2.27952L7.99356 6.88845L4.12749 2.27952C4.07392 2.21523 3.99356 2.17773 3.90784 2.17773H2.48284C2.36142 2.17773 2.29534 2.31881 2.37392 2.41166L7.06142 7.99916L2.37392 13.5867C2.35631 13.6074 2.34502 13.6327 2.34138 13.6596C2.33774 13.6865 2.3419 13.7139 2.35337 13.7386C2.36484 13.7632 2.38313 13.784 2.40608 13.7985C2.42903 13.8131 2.45568 13.8207 2.48284 13.8206H3.90784C3.99177 13.8206 4.07213 13.7831 4.12749 13.7188L7.99356 9.10988L11.8596 13.7188C11.9132 13.7831 11.9936 13.8206 12.0793 13.8206H13.5043C13.6257 13.8206 13.6918 13.6795 13.6132 13.5867L8.9257 7.99916Z" fill="#8C8C8C"/>
                      </svg>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </AnimationHeightWrapper> 
        </StickyScrollWrapper>
      </LgShow>

      <AnimationHeightWrapper isOpen maxHeight={showAllProducts ? 10000 : 1000} className="lg:mt-[32px] mt-[0px] relative">
        <SmShow>
          <ProductCatalog />
        </SmShow>
        <SmHidden>
          <Container className="">
            <ProductCatalog />
          </Container>
          <div className={clsx("bottom-0 w-screen absolute transition-all duration-500", showAllProducts && "pointer-events-none opacity-0")}>
            <div className="w-full relative h-[102px]">
              <div className="absolute inset-0 flex justify-center">
                <Image
                  src="/images/catalog/hidden-bg.png"
                  alt="hidden-bg"
                  width={1000}
                  height={102}
                  className="object-cover object-center w-full"
                />
              </div>
              <div style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'}} className="w-full h-full absolute top-0"></div>
              <div className="flex justify-center absolute top-0 left-0 w-full">
                <Button onClick={() => setShowAllProducts(true)} className="bg-pink p-[17.3px_26px] rounded-[11px] active:scale-95">
                  <p className="text-[18.4px] font-bold">Посмотреть все 52</p>
                </Button>
              </div>
            </div>
          </div>
        </SmHidden>
      </AnimationHeightWrapper>
    </section>
  );
};