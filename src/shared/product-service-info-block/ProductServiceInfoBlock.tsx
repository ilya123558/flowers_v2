'use client'
import { formatPrice } from "@/utils/libs/formatPrice";
import Image from "next/image";
import { Container } from "../container/Container";

export const ProductServiceInfoBlock = () => {
  const infoList = [
    {imgSrc: '/images/product/service-info-1.png', price: 1900, size: 's', text: 'за небольшой букет до 3 000 ₽.'},
    {imgSrc: '/images/product/service-info-2.png', price: 2400, size: 'm', text: 'за средний буке до 9 000 ₽.'},
    {imgSrc: '/images/product/service-info-3.png', price: 4000, size: 'l', text: 'за большой букет до 21 000 ₽.'},
    {imgSrc: '/images/product/service-info-4.png', price: 5500, size: 'xl', text: 'за премиум букет от 21 000 ₽.'},
  ]

  return (
    <Container>
      <div className="w-full border-dashed border-[1px] border-border-gray p-[47px_103px_47px_60px] rounded-[19px]">
        <div className="text-[#D9D9D9]">
          <div className="flex items-center justify-between">
            <h5 className="text-[24px] font-medium">Рассказываем, из чего складывается цена</h5>
          </div>
          <p className="text-[40px] mt-[25px] font-extrabold">
            Без скрытых наценок — только сервис
          </p>
          <div className="mt-[50px] flex justify-between text-[#D7D7D7] roboto font-normal">
            {infoList.map(({imgSrc, price, text, size}, index) => (
              <div key={index} className="flex flex-col gap-[16px] w-[174px]">
                <div className="relative aspect-square overflow-hidden rounded-full">
                  <Image src={imgSrc} alt="service-info" fill quality={100} />
                </div>
                <div className="flex flex-col">
                  <p className="text-[16px]">Примерный букет размера <span className="uppercase">{size}</span></p>
                  <p className="text-[29px] mt-[16px] roboto-serif"><span className="font-extrabold">{size === 'xl' ? "30%" : `${formatPrice(price)} ₽`}</span></p>
                </div>
                <p className="text-[16px] max-w-[134px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};