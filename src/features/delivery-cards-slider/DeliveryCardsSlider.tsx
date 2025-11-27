import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import Image from "next/image";

const list = [
  {imgSrc: '/images/home/video-block/icon-1.png', title: 'Дресс-код', text: 'Наш курьер в деловом костюме и белых перчатках вручит букет по всем правилам этикета.'},
  {imgSrc: '/images/home/video-block/icon-2.png', title: 'Точность', text: 'Согласуем время и место вручения до минуты, поможем с пропусками и логистикой.'},
  {imgSrc: '/images/home/video-block/icon-3.png', title: 'Отчёт', text: 'После вручения вы получите короткий отчёт — с деталями и реакцией получателя.'},
]

export const DeliveryCardsSlider = () => {
  return (
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
  );
};
