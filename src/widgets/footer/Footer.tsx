'use client'
import { YandexMap } from "@/features/yandex-map/YandexMap";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full lg:bg-[#1E1D1A] bg-black">
      <LgHidden>
        <Container className="">
          <div className="lg:p-[83px_0px] flex gap-[48px] items-center">
            <div className="flex items-center gap-[24px]">
              {/* <div className="w-[262px] h-[229px] border-[1px] border-[#404040] rounded-[8.5px] relative overflow-hidden cursor-pointer">
                <Image src={'/images/footer/map.png'} alt="map" fill />
              </div> */}
              <YandexMap />
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
      </LgHidden>
      <LgShow>
        <Container>
          <div className="py-[24px] roboto">
            <p className="text-[12px] font-medium text-[#AFAFAF]">© Первый цветочный, 2025</p>
            <div className="w-full border-b-[1px] border-white border-dashed mt-[16px]"></div>
            <div className="mt-[16px]">
              <p className="text-light-gray text-[24px] font-bold">Будем ближе к вам</p>
              <p className="text-[#A7A7A7] text-[16px] mt-[16px]">Следите за нами в Instagram: вдохновение,<br /> букеты и история каждого цветка</p>
              <Button onClick={() => {}} className="mt-[16px] active:scale-95 p-[11.6px_0px] rounded-[13.6px] bg-[#383838] w-full flex-center gap-[4px] roboto-flex">
                <div className="w-[30px] h-[30px] relative overflow-hidden rounded-full">
                  <Image src={'/images/footer/instagram.png'} alt="instagram" fill />
                </div>
                <p className="text-[20px] font-bold text-white">Перейти в Instagram</p>
              </Button>
              <p className="text-[#909191] text-[14px] mt-[16px]">Instagram и Facebook признаны экстремистскими <br/> организациями и запрещены на территории РФ.</p>
            </div>
            <div className="w-full border-b-[1px] border-white border-dashed mt-[16px]"></div>
            <YandexMap className="aspect-[376/150] w-full h-fit border-[1px] border-[#404040] rounded-[8.5px] relative overflow-hidden mt-[16px]"/>
            <div className="text-light-gray mt-[16px]">
              <p className="text-[24px] font-bold">Мы рядом и всегда на связи</p>
              <p className="text-[16px] mt-[16px] text-[#AEAEAE]">Южно сахалинск, ул. Примерная, 7 <br /> +7(2325)36-49-30. Работаем ежедневно с 9:00 до 21:00</p>
              <div className="flex flex-col gap-[8px] mt-[16px] text-[#A7A7A7]">
                <p className="text-[16px]">Собираем букеты с 9:30 до 23:00</p>
                <p className="text-[16px]">Доставляем с 7:00 до 24:00</p>
                <p className="text-[16px]">Поддерживаем клиентов 24/7</p>
              </div>
              <div className="flex flex-col justify-center gap-[8px] mt-[16px] text-[16px] underline text-[#909191]">
                <Button onClick={() => {}}>Публичная оферта</Button>
                <Button onClick={() => {}}>Политика конфиденциальности</Button>
              </div>
              <div className="flex flex-col items-center gap-[2px] mt-[16px] text-[#909191] text-[14px]">
                <div className="flex gap-[15px]">
                  <p>ИНН 650903209121</p>
                  <p>|</p>
                  <p>ОГРН 3899838932812983</p>
                </div>
                <p>perviytsvetochniy@gmail.com</p>
              </div>
            </div>
          </div>
        </Container>
      </LgShow>
    </footer>
  );
};