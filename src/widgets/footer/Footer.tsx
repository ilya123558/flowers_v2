'use client'
import { YandexMap } from "@/features/yandex-map/YandexMap";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full lg:bg-[#1E1D1A] bg-black pb-[120px]">
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
                  <Link href={'/service-terms/offer'}>Публичная оферта</Link>
                  <Link href={'/service-terms/policy'}>Политика конфиденциальности</Link>
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
              <p className="text-[#A7A7A7] text-[16px] mt-[16px]">Следите за нами в Telegram: вдохновение,<br /> букеты и история каждого цветка</p>
              {/* <Button onClick={() => {}} className="mt-[16px] active:scale-[0.98] p-[11.6px_0px] rounded-[13.6px] bg-[#383838] w-full flex-center gap-[10px] roboto-flex">
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.39201 8.2401C1.39201 8.2401 11.4339 4.08661 14.9166 2.62406C16.2517 2.03909 20.7793 0.167022 20.7793 0.167022C20.7793 0.167022 22.8689 -0.651936 22.6948 1.33704C22.6367 2.15608 22.1724 5.02256 21.708 8.1231C21.0114 12.5107 20.2568 17.3077 20.2568 17.3077C20.2568 17.3077 20.1407 18.6532 19.154 18.8872C18.1672 19.1212 16.5419 18.0682 16.2517 17.8342C16.0195 17.6587 11.8983 15.0262 10.3891 13.7391C9.98275 13.3882 9.51841 12.6862 10.4471 11.8672C12.5368 9.93663 15.0327 7.53813 16.5419 6.01713C17.2385 5.31509 17.935 3.67709 15.0327 5.66607C10.9115 8.53262 6.84831 11.2236 6.84831 11.2236C6.84831 11.2236 5.91955 11.8086 4.1782 11.2821C2.43677 10.7557 0.405171 10.0536 0.405171 10.0536C0.405171 10.0536 -0.987844 9.17613 1.39201 8.2401Z" fill="url(#paint0_linear_1770_17985)"/>
                  <path d="M1.39201 8.2401C1.39201 8.2401 11.4339 4.08661 14.9166 2.62406C16.2517 2.03909 20.7793 0.167022 20.7793 0.167022C20.7793 0.167022 22.8689 -0.651936 22.6948 1.33704C22.6367 2.15608 22.1724 5.02256 21.708 8.1231C21.0114 12.5107 20.2568 17.3077 20.2568 17.3077C20.2568 17.3077 20.1407 18.6532 19.154 18.8872C18.1672 19.1212 16.5419 18.0682 16.2517 17.8342C16.0195 17.6587 11.8983 15.0262 10.3891 13.7391C9.98275 13.3882 9.51841 12.6862 10.4471 11.8672C12.5368 9.93663 15.0327 7.53813 16.5419 6.01713C17.2385 5.31509 17.935 3.67709 15.0327 5.66607C10.9115 8.53262 6.84831 11.2236 6.84831 11.2236C6.84831 11.2236 5.91955 11.8086 4.1782 11.2821C2.43677 10.7557 0.405171 10.0536 0.405171 10.0536C0.405171 10.0536 -0.987844 9.17613 1.39201 8.2401Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_1770_17985" x1="25.2852" y1="-1.49376" x2="5.14119" y2="19.6405" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0685BE"/>
                  <stop offset="0.418269" stopColor="#CAEEFF"/>
                  </linearGradient>
                  </defs>
                </svg>
                <p className="text-[20px] font-bold text-white">Перейти в Телеграм</p>
              </Button> */}
              <Button onClick={() => {}} className="flex-center gap-[8px] mt-[26px] roboto active:scale-[0.98] !bg-[#00699C1A] border-[#3FC1FF] border-[2px] rounded-[10px] w-full p-[17.5px]">
                <img src="/images/home/review/telegram.png" alt="telegram" className="w-[21px] h-[21px]"/>
                <p className="text-[19px] text-white leading-[100%] font-bold">Наш телеграм канал</p>
              </Button>
            </div>
            <div className="w-full border-b-[1px] border-white border-dashed mt-[16px]"></div>
            <YandexMap className="aspect-[376/150] w-full h-fit border-[1px] border-[#404040] rounded-[8.5px] relative overflow-hidden mt-[47px]"/>
            <div className="flex gap-[14px] mt-[19px] text-[#A7A7A7] roboto">
              <div className="p-[23px_9px_0px] rounded-[5.5px] bg-[#262524] h-[93px] w-full">
                <p className="text-white text-[19px] text-nowrap">9:30 - 23:00</p>
                <p className="text-[10px] text-white mt-[6px]">Собираем букеты</p>
              </div>
              <div className="p-[23px_9px_0px] rounded-[5.5px] bg-[#262524] h-[93px] w-full">
                <p className="text-white text-[19px] text-nowrap">24/7</p>
                <p className="text-[10px] text-white mt-[6px]">Решаем вопросы</p>
              </div>
              <div className="p-[23px_9px_0px] rounded-[5.5px] bg-[#262524] h-[93px] w-full">
                <p className="text-white text-[19px] text-nowrap">7:00 - 00:00</p>
                <p className="text-[10px] text-white mt-[6px]">Доставляем букеты</p>
              </div>
            </div>
            <div className="text-light-gray mt-[16px]">
              <p className="text-[16px] mt-[16px] text-[#AEAEAE]">Южно сахалинск, ул. Примерная, 7 <br /> +7(2325)36-49-30. Работаем ежедневно с 9:00 до 21:00</p>
              <div className=" text-[#909191] text-[14px] mt-[16px]">
                <div className="flex gap-[15px]">
                  <p>ИНН 650903209121</p>
                  <p>|</p>
                  <p>ОГРН 3899838932812983</p>
                </div>
                <p>perviytsvetochniy@gmail.com</p>
              </div>
              <div className="flex justify-between gap-[8px] mt-[18px] text-[14px] underline text-[#909191]">
                <Link href={'/service-terms/policy'}>Политика конфиденциальности</Link>
                <Link href={'/service-terms/offer'}>Публичная оферта</Link>
              </div>
            </div>
          </div>
        </Container>
      </LgShow>
    </footer>
  );
};