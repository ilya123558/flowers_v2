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
        <div className="relative bg-secondary-bg mt-[-2px]">
          {/* <div 
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
          </div> */}
          <div className="px-[16px] roboto-flex">
            <p className="uppercase text-[32px] font-extrabold leading-[100%] text-[#EBEBEB]">ДОБАВЬТЕ ПРЕМИУМ ДОСТАВКУ</p>
            <p className="text-[#B7B7B7] leading-[100%] font-medium text-[16px] mt-[20px]">На выбор можем доставить“Яндекс” от 120 рублей. </p>
          </div>
          <div className="relative h-[145px]">
            <div className="absolute left-0 top-[26px] w-full z-10">
              <div className="flex gap-[25px] overflow-x-auto px-[16px] scrollbar-hide">
                {list.map(({imgSrc, text, title}, index) => (
                  <BoxWrapper key={index} className="w-fit max-w-[271px] flex-shrink-0 p-[20px] !bg-[#2B2B2BE5]">
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
          </div>
          <div className="relative overflow-hidden rounded-[0px_0px_18px_18px]">
            <FullscreenLoopVideo srcMp4="/images/home/video-block/flowers-movie.mp4" />
            <div
              className="absolute bottom-0 left-0 w-full h-[200px]"
              style={{
                background:
                  'linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%)',
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-[200px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0) 100%)',
              }}
            />
            <div className="absolute bottom-[25px] left-0 px-[16px] w-full">
              <div className="p-[5px_8px] bg-[#E3006B] rounded-[8px] roboto-serif w-fit">
                <p className="text-[25px] font-bold text-white leading-[100%]">2 500</p>
              </div>
              <Button onClick={() => dispatch(incCount())} className="w-full mt-[21px] flex-center roboto border-[2px] border-yellow rounded-[11px]  p-[16px] active:scale-[0.98]">
                <div className="flex gap-[8px]">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7979 7.96875V4.03125C11.7979 3.16101 11.4522 2.32641 10.8369 1.71106C10.2215 1.0957 9.38692 0.75 8.51668 0.75C7.64644 0.75 6.81184 1.0957 6.19649 1.71106C5.58113 2.32641 5.23543 3.16101 5.23543 4.03125V7.96875M15.1719 6.22487L16.2771 16.7249C16.3383 17.3067 15.8833 17.8125 15.2979 17.8125H1.73543C1.59736 17.8126 1.46081 17.7837 1.33463 17.7277C1.20846 17.6716 1.0955 17.5896 1.00308 17.4871C0.910653 17.3845 0.840842 17.2636 0.798177 17.1323C0.755513 17.001 0.740948 16.8622 0.75543 16.7249L1.86143 6.22487C1.88694 5.98299 2.0011 5.75911 2.1819 5.59641C2.3627 5.43371 2.59733 5.34371 2.84055 5.34375H14.1928C14.6968 5.34375 15.1194 5.72437 15.1719 6.22487ZM5.56355 7.96875C5.56355 8.05577 5.52898 8.13923 5.46745 8.20077C5.40591 8.26231 5.32245 8.29688 5.23543 8.29688C5.14841 8.29688 5.06495 8.26231 5.00341 8.20077C4.94188 8.13923 4.9073 8.05577 4.9073 7.96875C4.9073 7.88173 4.94188 7.79827 5.00341 7.73673C5.06495 7.67519 5.14841 7.64062 5.23543 7.64062C5.32245 7.64062 5.40591 7.67519 5.46745 7.73673C5.52898 7.79827 5.56355 7.88173 5.56355 7.96875ZM12.1261 7.96875C12.1261 8.05577 12.0915 8.13923 12.0299 8.20077C11.9684 8.26231 11.885 8.29688 11.7979 8.29688C11.7109 8.29688 11.6274 8.26231 11.5659 8.20077C11.5044 8.13923 11.4698 8.05577 11.4698 7.96875C11.4698 7.88173 11.5044 7.79827 11.5659 7.73673C11.6274 7.67519 11.7109 7.64062 11.7979 7.64062C11.885 7.64062 11.9684 7.67519 12.0299 7.73673C12.0915 7.79827 12.1261 7.88173 12.1261 7.96875Z" stroke="#EDBF81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-yellow text-[20px] leading-[100%] font-bold">Добавить в заказ</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
        {/* <Container className=" bg-secondary-bg">
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
        </Container> */}
      </SmShow>
    </div>
  );
};