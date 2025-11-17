import { Container } from "@/shared/container/Container";
import { Title55px } from "@/shared/text/title55px/Title55px";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import Image from "next/image";

export const HomeReview = () => {
  const list = [
    {imgSrc: '/images/home/review/img-1.png', name: 'Алина', text: 'Заказала букет маме на День рождения — доставка была молниеносная! Мама в восторге, а я довольна, что все прошло идеально.'},
    {imgSrc: '/images/home/review/img-2.png', name: 'Михаил', text: 'Букет в коробке превзошёл все ожидания! Стильно, красиво, ароматно. Однозначно буду заказывать снова.'},
    {imgSrc: '/images/home/review/img-3.png', name: 'Екатерина', text: 'Подписка на цветы — моя любимая фича. Каждый месяц небольшой праздник дома, очень уютно.'},
  ]

  return (
    <div className="">
      <LgHidden>
        <div className="mt-[100px] roboto">
          <Container>
            <div className="relative">
              <Title55px className="leading-[100%]">Реальные впечатления <br />наших клиентов в Телеграм</Title55px>
              <div className="absolute right-[-160px] top-[-80px]">
                <div className="relative w-[580px] aspect-[580/230]">
                  <Image alt="decor-img" src={'/images/home/review/decor-img.png'} fill />
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] mt-[32px]">
              {list.map(({imgSrc, name, text}, index) => (
                <BoxWrapper key={index} className="rounded-[24px] bg-[#1E1D1A] w-full h-[338px] p-[16px]">
                  <div className="relative w-[155px] aspect-square">
                    <Image alt="decor-img" src={imgSrc} fill />
                  </div>
                  <h5 className="mt-[12px] text-[22px] font-black">{name}</h5>
                  <p className="mt-[12px] text-[16px] leading-[134%]">{text}</p>
                </BoxWrapper>
              ))}
              <BoxWrapper className="rounded-[24px_174px_174px_24px] bg-[#1E1D1A] w-full h-[338px] p-[49px_23px_29px]">
                <p className="leading-[110%]"><span className="text-[22px] font-semibold">Перейти <br /> в Телеграм <br /> и посмотреть ещё</span></p>
                <div className="mt-[28px] bg-[#66434B] rounded-[20px] p-[20px] w-fit">
                  <div className="relative w-[44px] aspect-square">
                    <Image alt="decor-img" src={'/images/home/review/telegram.png'} fill />
                  </div>
                  <p className="mt-[10px] text-[22px] leading-[134%]">
                    388+ <br /> реальных <br /> отзывов
                  </p>
                </div>
              </BoxWrapper>
            </div>
          </Container>
        </div>
      </LgHidden>
      <LgShow>
        <div className="bg-secondary-bg w-full p-[24px_0px_40px]">
          <p className="leading-[100%] text-[32px] font-bold text-[#EBEBEB] px-[16px]">Реальные отзывы</p>
          <div className="flex gap-[16px] mt-[32px] overflow-x-scroll px-[16px]">
            {list.map(({imgSrc, name, text}, index) => (
              <BoxWrapper key={index} className="rounded-[24px] bg-[#1E1D1A] min-w-[290px] h-[338px] p-[16px]">
                <div className="relative w-[155px] aspect-square">
                  <Image alt="decor-img" src={imgSrc} fill />
                </div>
                <h5 className="mt-[12px] text-[22px] font-black">{name}</h5>
                <p className="mt-[12px] text-[16px] leading-[134%]">{text}</p>
              </BoxWrapper>
            ))}
            <BoxWrapper className="rounded-[24px_174px_174px_24px] bg-[#1E1D1A] min-w-[290px] h-[338px] p-[49px_23px_29px]">
              <p className="leading-[110%]"><span className="text-[22px] font-semibold">Перейти <br /> в Телеграм <br /> и посмотреть ещё</span></p>
              <div className="mt-[28px] bg-[#66434B] rounded-[20px] p-[20px] w-fit">
                <div className="relative w-[44px] aspect-square">
                  <Image alt="decor-img" src={'/images/home/review/telegram.png'} fill />
                </div>
                <p className="mt-[10px] text-[22px] leading-[134%]">
                  388+ <br /> реальных <br /> отзывов
                </p>
              </div>
            </BoxWrapper>
          </div>
        </div>
      </LgShow>
    </div>
  );
};