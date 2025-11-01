'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1D1A]">
      <Container className="">
        <div className="p-[83px_0px] flex gap-[48px] items-center">
          <div className="flex items-center gap-[24px]">
            <div className="w-[262px] h-[229px] border-[1px] border-[#404040] rounded-[8.5px] relative overflow-hidden cursor-pointer">
              <Image src={'/images/footer/map.png'} alt="map" fill />
            </div>
            <div className="text-light-gray">
              <p className="text-[12px] font-medium">© Первый цветочный, 2025</p>
              <p className="mt-[24px] text-[24px] font-bold">Мы рядом и всегда на связи</p>
              <p className="text-[16px] mt-[16px]">Южно сахалинск, ул. Примерная, 7 <br /> +7(2325)36-49-30. Работаем ежедневно с 9:00 до 21:00</p>
              <div className="flex gap-[24px] mt-[16px]">
                <p className="text-[16px]">Собираем букеты <br /> с 9:30 до 23:00</p>
                <p className="text-[16px]">Доставляем <br /> с 7:00 до 24:00</p>
                <p className="text-[16px]">Поддерживаем <br /> клиентов 24/7</p>
              </div>
              <div className="flex gap-[24px] mt-[16px] text-[16px] underline text-[#909191]">
                <Button onClick={() => {}}>Публичная оферта</Button>
                <Button onClick={() => {}}>Политика конфиденциальности</Button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-light-gray text-[24px] font-bold">Будем ближе к вам</p>
            <p className="text-white text-[16px] mt-[16px]">Следите за нами в Instagram: вдохновение,<br /> букеты и история каждого цветка</p>
            <Button onClick={() => {}} className="mt-[27px] active:scale-95 p-[11.6px_21.8px] rounded-[13.6px] bg-[#383838] w-fit flex items-center gap-[4px]">
              <div className="w-[30px] h-[30px] relative overflow-hidden rounded-full">
                <Image src={'/images/footer/instagram.png'} alt="instagram" fill />
              </div>
              <p className="text-[20px] font-bold text-white">Перейти в Instagram</p>
            </Button>
            <p className="text-[#909191] text-[14px] mt-[16px]">Instagram и Facebook признаны экстремистскими <br/> организациями и запрещены на территории РФ.</p>
          </div>
        </div>
      </Container>
      <div className="flex-center h-[45px] roboto">
        <div className="flex gap-[15px] text-[#909191] text-[14px]">
          <p>ИНН 650903209121</p>
          <p>|</p>
          <p>ОГРН 3899838932812983</p>
          <p>|</p>
          <p>perviytsvetochniy@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};