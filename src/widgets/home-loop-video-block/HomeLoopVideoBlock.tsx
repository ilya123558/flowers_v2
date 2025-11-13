'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { FullscreenLoopVideo } from "@/shared/fullscreen-loop-video/FullscreenLoopVideo";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import Image from "next/image";

export const HomeLoopVideoBlock = () => {
  const list = [
    {imgSrc: '/images/home/video-block/icon-1.png', title: 'Дресс-код', text: 'Наш курьер в деловом костюме и белых перчатках вручит букет по всем правилам этикета.'},
    {imgSrc: '/images/home/video-block/icon-2.png', title: 'Точность', text: 'Согласуем время и место вручения до минуты, поможем с пропусками и логистикой.'},
    {imgSrc: '/images/home/video-block/icon-3.png', title: 'Отчёт', text: 'После вручения вы получите короткий отчёт — с деталями и реакцией получателя.'},
  ]

  return (
    <div className="">
      <LgHidden>
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
      </LgHidden>
      <LgShow>
        <div className="relative">
          <FullscreenLoopVideo srcMp4="/images/home/video-block/flowers-movie.mp4" />
          <div className="h-[240px] relative">
            <div className="absolute left-0 w-full">
              <h5 className="text-[22px] font-black leading-[100%] px-[16px]">Добавьте доставку с особым вниманием к деталям и чувствам</h5>
              <div className="mt-[16px] flex gap-[25px] overflow-x-scroll px-[16px]">
                {list.map(({imgSrc, text, title}, index) => (
                  <BoxWrapper key={index} className="min-w-[286px] h-[180px] p-[20px] bg-[#2B2B2BE5]">
                    <div className="w-[40px] aspect-square relative">
                      <Image src={imgSrc} quality={100} alt="icon" fill />
                    </div>
                    <p className="mt-[16px]"><span className="text-[22px] font-extrabold">{title}</span></p>
                    <p className="mt-[16px] text-[16px]">{text}</p>
                  </BoxWrapper>
                ))}
                <BoxWrapper className="min-w-[286px] h-[180px] !bg-black roboto-serif p-[20px]">
                  <div className="h-full flex flex-col justify-center gap-[30px]">
                    <p className="text-[36px] font-semibold">2 500</p>
                    <Button onClick={() => {}} className="w-fit p-[19px_21px_24px_21px] rounded-[13.6px] bg-yellow roboto-flex active:scale-95">
                      <p className="text-[#2B2A24] text-[24px] font-bold">В корзину</p>
                    </Button>
                  </div>
                </BoxWrapper>
              </div>
            </div>
          </div>
        </div>
      </LgShow>
    </div>
  );
};