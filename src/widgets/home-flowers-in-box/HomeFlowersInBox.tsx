'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container"
import clsx from "clsx";
import Image from "next/image";

const BgImage = ({position, src, width}: {src: string, width: number, position: {top: number, right: number}}) => {
  return (
    <div style={{top: position.top, right: position.right}} className={clsx("absolute")}>
      <div style={{width}} className={clsx("relative aspect-[149/117]")}>
        <Image src={src} alt="bg-img" fill/>
      </div>
    </div>
  )
} 

const HomeFlowersInBoxImage = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <div className="relative w-[710px] aspect-[710/495]">
          <Image src={'/images/home/flowers-in-box/flowers.png'} alt="flowers" fill/>
        </div>
      </div>
      <div className="">
        <BgImage position={{top: 33, right: 438}} src="/images/home/flowers-in-box/bg-img-1.png" width={150} />
        <BgImage position={{top: 134, right: 660}} src="/images/home/flowers-in-box/bg-img-2.png" width={150} />
        <BgImage position={{top: 331, right: 582}} src="/images/home/flowers-in-box/bg-img-3.png" width={150} />
        <BgImage position={{top: 43, right: 680}} src="/images/home/flowers-in-box/bg-img-4.png" width={70} />
        <BgImage position={{top: 58, right: 612}} src="/images/home/flowers-in-box/bg-img-5.png" width={36} />
        <BgImage position={{top: 34, right: 621}} src="/images/home/flowers-in-box/bg-img-6.png" width={16} />
      </div>
    </div>
  )
}

export const HomeFlowersInBox = () => {
  return (
    <Container className="mt-[87px]">
      <div className="relative w-full">
        <div className="bg-[#4D2638] absolute w-full h-full top-[-14px] left-[-10px] -z-10 rounded-[19px]" />
        <div className="w-full flex justify-between bg-black rounded-[19px] border-[1px] border-border-gray border-dashed overflow-hidden">
          <div className="p-[67px_69px_49px]">
            <h4 className="text-[34px] leading-[104%]">
              Новый <br/> формат букета <br /> 
              <span className="text-[54px] font-bold">в коробке</span>
            </h4>
            <p className="max-w-[337px] text-[24px] mt-[34px] leading-[104%]">Стильный букет в коробке, с ароматом, с подарочной открыткой, которую мы подпишем за вас бесплатно</p>
            <Button onClick={() => {}} className="bg-pink rounded-[11px] p-[17.3px_26px] mt-[62px]">
              <p className="text-[18.4px] font-bold">Посмотреть все цветы в коробках</p>
            </Button>
          </div>
          <HomeFlowersInBoxImage />
        </div>
      </div>
    </Container>
  );
};