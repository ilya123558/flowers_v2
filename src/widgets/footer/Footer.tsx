'use client'
import { YandexMap } from "@/features/yandex-map/YandexMap";
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { Logo } from "@/shared/logo/Logo";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full lg:bg-[#1E1D1A] bg-black sm:pb-[0px] pb-[120px]">
      <LgHidden>
        <Container>
          <div className="p-[59px_0px_27px]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-[5.3px] w-fit text-center roboto mr-[137px]">
                <Logo />
                <p className="text-[#E7E7E7] text-[19.6px] leading-[100%] font-bold uppercase">Первый <br /> Цветочный</p>
              </div>
              <div className="h-[170px] flex gap-[16px] roboto text-white text-nowrap">
                <div className="h-full flex justify-center flex-col gap-[12px] bg-[#262524] rounded-[10px] p-[0px_29px]">
                  <p className="text-[34px] leading-[36px]">Дарите эмоции</p>
                  <p className="text-[18px] leading-[26px]">Остальное мы <br /> сделаем сами</p>
                </div>
                <div className="h-full flex justify-center flex-col gap-[12px] bg-[#262524] rounded-[10px] p-[0px_16px]">
                  <p className="text-[34px] leading-[36px]">9:30 - 23:00</p>
                  <p className="text-[18px] leading-[26px]">Собираем <br /> букеты</p>
                </div>
                <div className="h-full flex justify-center flex-col gap-[12px] bg-[#262524] rounded-[10px] p-[0px_16px]">
                  <p className="text-[34px] leading-[36px]">7:00 - 00:00</p>
                  <p className="text-[18px] leading-[26px]">Доставляем <br /> букеты</p>
                </div>
                <div className="h-full flex items-center gap-[63px] bg-[#262524] rounded-[10px] p-[9px_16px]">
                  <div className="flex justify-center flex-col gap-[12px]">
                    <p className="text-[34px] leading-[36px]">24/7</p>
                    <p className="text-[18px] leading-[26px]">Решаем <br /> вопросы</p>
                  </div>
                  <div className="h-full flex flex-col justify-between">
                    <Button onClick={() => {}} className="active:scale-95">
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 44C34.1502 44 44 34.1502 44 22C44 9.84975 34.1502 0 22 0C9.84975 0 0 9.84975 0 22C0 34.1502 9.84975 44 22 44Z" fill="#343434"/>
                        <path d="M10.7793 20.7895C10.7793 20.7895 20.5152 16.6475 23.8918 15.1891C25.1862 14.6057 29.5757 12.7388 29.5757 12.7388C29.5757 12.7388 31.6018 11.9221 31.4329 13.9056C31.3766 14.7224 30.9264 17.5809 30.4762 20.6729C29.8008 25.0483 29.0692 29.832 29.0692 29.832C29.0692 29.832 28.9567 31.1738 28 31.4071C27.0433 31.6405 25.4675 30.5904 25.1862 30.357C24.961 30.182 20.9654 27.5568 19.5022 26.2733C19.1082 25.9233 18.658 25.2233 19.5584 24.4065C21.5844 22.4814 24.0043 20.0895 25.4675 18.5727C26.1429 17.8726 26.8181 16.2392 24.0043 18.2226C20.0087 21.0812 16.0693 23.7648 16.0693 23.7648C16.0693 23.7648 15.1689 24.3482 13.4806 23.8231C11.7922 23.2981 9.82251 22.598 9.82251 22.598C9.82251 22.598 8.47195 21.723 10.7793 20.7895Z" fill="white"/>
                      </svg>
                    </Button>
                    <Button onClick={() => {}} className="active:scale-95">
                      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 44C34.1502 44 44 34.1502 44 22C44 9.84975 34.1502 0 22 0C9.84975 0 0 9.84975 0 22C0 34.1502 9.84975 44 22 44Z" fill="#343434"/>
                        <path d="M9.42969 34.0071L11.2495 27.2465C9.78187 24.6129 9.31558 21.5397 9.93623 18.5908C10.5569 15.642 12.2228 13.0153 14.6284 11.1928C17.0339 9.3702 20.0177 8.47406 23.0322 8.66876C26.0467 8.86346 28.8897 10.136 31.0395 12.2527C33.1893 14.3695 34.5017 17.1886 34.7359 20.1926C34.9701 23.1967 34.1104 26.1842 32.3145 28.607C30.5185 31.0299 27.9069 32.7254 24.9588 33.3826C22.0107 34.0398 18.9239 33.6145 16.2649 32.1847L9.42969 34.0071ZM16.5944 29.6549L17.0172 29.905C18.9432 31.0437 21.1928 31.5149 23.4153 31.2452C25.6379 30.9755 27.7086 29.98 29.3047 28.4139C30.9008 26.8478 31.9327 24.799 32.2396 22.5869C32.5465 20.3747 32.1111 18.1234 31.0013 16.1838C29.8915 14.2442 28.1697 12.7253 26.1041 11.8637C24.0384 11.0021 21.7451 10.8463 19.5814 11.4206C17.4178 11.9948 15.5053 13.2668 14.1421 15.0384C12.7789 16.81 12.0415 18.9816 12.0448 21.2148C12.043 23.0665 12.5564 24.8824 13.5279 26.4604L13.793 26.8963L12.7756 30.6697L16.5944 29.6549Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.8538 22.9516C26.606 22.7523 26.3159 22.6119 26.0055 22.5413C25.6951 22.4708 25.3726 22.4718 25.0626 22.5443C24.5969 22.7372 24.296 23.4662 23.9951 23.8306C23.9316 23.918 23.8384 23.9793 23.7329 24.003C23.6273 24.0267 23.5168 24.0111 23.4219 23.9593C21.7169 23.2932 20.2878 22.0717 19.3667 20.4932C19.2881 20.3947 19.2509 20.2697 19.2629 20.1443C19.275 20.019 19.3353 19.9033 19.4312 19.8214C19.7668 19.49 20.0132 19.0796 20.1476 18.628C20.1775 18.1299 20.0631 17.6337 19.818 17.1987C19.6286 16.5888 19.2681 16.0457 18.7792 15.6336C18.527 15.5204 18.2473 15.4825 17.974 15.5244C17.7007 15.5662 17.4453 15.686 17.2387 15.8694C16.8801 16.178 16.5955 16.563 16.4058 16.9958C16.216 17.4287 16.1261 17.8986 16.1425 18.3707C16.1436 18.6358 16.1773 18.8999 16.2428 19.1568C16.4092 19.7742 16.6651 20.3641 17.0023 20.9077C17.2456 21.3242 17.5111 21.7273 17.7976 22.1155C18.7287 23.3904 19.8991 24.4729 21.2438 25.3028C21.9186 25.7246 22.6399 26.0675 23.3933 26.3248C24.1759 26.6786 25.04 26.8145 25.8938 26.7178C26.3802 26.6444 26.8411 26.4528 27.2359 26.16C27.6307 25.8671 27.9473 25.482 28.1578 25.0384C28.2815 24.7705 28.319 24.4709 28.2653 24.1808C28.1363 23.5877 27.341 23.2375 26.8538 22.9516Z" fill="white"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[49px] flex gap-[24px] justify-center roboto">
              <p className="text-[12px] font-medium text-[#AFAFAF] leading-[100%]">© Первый цветочный, 2025</p>
              <Link href={'/service-terms/offer'} className="text-[14px] font-medium text-[#909191] leading-[100%] underline">Публичная оферта</Link>
              <Link href={'/service-terms/policy'} className="text-[14px] font-medium text-[#909191] leading-[100%] underline">Политика конфиденциальности</Link>
              <p className="text-[14px] font-medium text-[#909191] leading-[100%]">ИНН 775116560156</p>
              <p className="text-[14px] font-medium text-[#909191] leading-[100%]">ЗЮЗИНА ЕЛЕНА ТРОФИМОВНА (ИП)</p>
              <p className="text-[14px] font-medium text-[#909191] leading-[100%]">perviytsvetochniy@gmail.com</p>
            </div>
          </div>
        </Container>
        {/* <Container className="">
          <div className="lg:p-[83px_0px] flex gap-[48px] items-center">
            <div className="flex items-center gap-[24px]">
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
        </div> */}
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
                  <p>ИНН 775116560156</p>
                  <p>|</p>
                  <p>ЗЮЗИНА ЕЛЕНА ТРОФИМОВНА (ИП)</p>
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