'use client'
import { BasketButton } from "@/shared/button/BasketButton";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { FullscreenLoopVideo } from "@/shared/fullscreen-loop-video/FullscreenLoopVideo";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { LgHidden, SmHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow, SmShow } from "@/shared/wrappers/SizeShow";
import { incCount, useAppDispatch } from "@/views/store";
import Image from "next/image";

const list = [
  {imgSrc: '/images/home/video-block/icon-1.png', title: 'Дресс-код', text: 'Наш курьер в деловом костюме и белых перчатках вручит букет по всем правилам этикета.'},
  {imgSrc: '/images/home/video-block/icon-2.png', title: 'Точность', text: 'Согласуем время и место вручения до минуты, поможем с пропусками и логистикой.'},
  {imgSrc: '/images/home/video-block/icon-3.png', title: 'Отчёт', text: 'После вручения вы получите короткий отчёт — с деталями и реакцией получателя.'},
]

export const HomeLoopVideoBlock = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="">
      <SmHidden>
        <div className="mt-[12px] relative">
          <FullscreenLoopVideo srcMp4="/images/home/video-block/flowers-movie.mp4" />
          <div className="absolute bottom-0 left-0 w-full">
            <Container>
              <h5 className="text-[34px] font-black">Добавьте доставку с особым вниманием к деталям и чувствам</h5>
              <div className="mt-[23px] flex gap-[25px] h-[180px]">
                {list.map(({imgSrc, text, title}, index) => (
                  <BoxWrapper key={index} className="w-full h-full p-[20px] bg-[#2B2B2BE5]">
                    <div className="w-[40px] aspect-square relative">
                      <Image src={imgSrc} quality={100} alt="icon" fill />
                    </div>
                    <p className="mt-[16px]"><span className="text-[22px] font-extrabold">{title}</span></p>
                    <p className="mt-[16px] text-[16px]">{text}</p>
                  </BoxWrapper>
                ))}
                <BoxWrapper className="w-full h-full !bg-black roboto-serif p-[20px]">
                  <div className="h-full flex flex-col justify-center gap-[30px]">
                    <p className="text-[36px] font-semibold">2 500</p>
                    <Button onClick={() => {}} className="w-fit p-[19px_21px_24px_21px] rounded-[13.6px] bg-yellow roboto-flex active:scale-95">
                      <p className="text-[#2B2A24] text-[24px] font-bold">В корзину</p>
                    </Button>
                  </div>
                </BoxWrapper>
              </div>
            </Container>
          </div>
        </div>
      </SmHidden>
      <SmShow>
        <div className="relative">
          <div 
            style={{background: 'linear-gradient(0deg, rgba(115, 115, 115, 0) 1%, rgba(34, 20, 3, 0.8) 60%)'}}
            className="absolute top-0 w-full left-0 h-[500px] z-10"
          />
          <div 
            style={{background: 'linear-gradient(180deg, rgba(115, 115, 115, 0) 1%, rgba(0,0,0, 0.6) 60%)'}}
            className="absolute bottom-[-200px] w-full left-0 h-[300px] z-1"
          />
          <div className="absolute w-full left-0 top-[26px] z-10 flex-center">
            <div className="max-w-[320px] roboto-flex text-[#EBEBEB]  text-center ">
              <p className="text-[40px] font-extrabold leading-[100%]">Премиум Доставка</p>
              <p className="text-[24px] leading-[100%] mt-[8px]">с особым вниманием к деталям и чувствам</p>
            </div>
          </div>
          <div className="absolute left-0 bottom-[25px] w-full z-10">
            <div className="flex gap-[25px] overflow-x-auto px-[16px] scrollbar-hide">
              {list.map(({imgSrc, text, title}, index) => (
                <BoxWrapper key={index} className="w-fit max-w-[191px] flex-shrink-0 p-[20px] !bg-[#000000B2]">
                  <div className="w-[40px] aspect-square relative">
                    <Image src={imgSrc} quality={100} alt="icon" fill />
                  </div>
                  <div className="roboto-serif">
                    <p className="mt-[16px] text-[#DDDDDD]"><span className="text-[22px] font-extrabold">{title}</span></p>
                  </div>
                  <div className="roboto">
                    <p className="mt-[16px] text-[16px] text-[#B7B7B7]">{text}</p>
                  </div>
                </BoxWrapper>
              ))}
            </div>
          </div>
          <FullscreenLoopVideo srcMp4="/images/home/video-block/flowers-movie.mp4" />
        </div>
        <Container className=" bg-secondary-bg">
          <div className="flex gap-[14px] w-full roboto pt-[43px] relative">
            <div className="absolute top-[-10px] right-0 bg-black p-[8px] rounded-[5px] roboto-serif">
              <p className="text-[25px] font-semibold leading-[100%] text-white">2 500 ₽</p>
            </div>
            <Button onClick={() => {}} className="w-full bg-[#2E2E2E] rounded-[10px] flex-center min-h-[57px] active:scale-[0.98]">
              <p className="text-yellow text-[18px] leading-[100%] font-semibold">Подробнее</p>
            </Button>
            <Button onClick={() => dispatch(incCount())} className="w-full bg-yellow rounded-[10px] flex-center min-h-[57px] active:scale-[0.98]">
              <p className="text-black text-[18px] leading-[100%] font-semibold">В корзину</p>
            </Button>
          </div>
        </Container>
      </SmShow>
    </div>
  );
};