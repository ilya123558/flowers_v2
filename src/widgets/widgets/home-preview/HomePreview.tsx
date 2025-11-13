'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container";
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import Image from "next/image";

export const HomePreview = () => {
  return (
    <main className="relative">
      <LgShow>
        <div className="w-[100%] h-[520px] z-[-1] relative">
          <img
            src="/images/home/preview.png"
            alt="preview"
            className="inset-0 w-full h-full absolute object-cover object-center"
          />
          <div style={{background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 20.65%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%)'}} className="w-full absolute top-[300px]">
            <Container>
              <h2 className="text-[38px] font-black leading-[100%]">
                Премиальные <br/>
                букеты по <br/>
                себестоимости
              </h2>
              <div className="mt-[24px] w-full">
                <Button className="rounded-[10.8px] bg-pink p-[17.3px_26px] w-full active:scale-95 roboto" onClick={() => {}}>
                  <p className="text-[18px] font-bold">Найти свой идеальный букет</p>
                </Button>
                <p className="mt-[8px] text-[17px] text-start">В 2 раза выгоднее, чем в обычных <br/> цветочных магазинах</p>
              </div>
            </Container>
          </div>
        </div>
        <div className="bg-secondary-bg w-full mt-[45px] pb-[4px]">
          <Container>
            <div className="roboto pt-[14px]">
              <div className="flex gap-[16px]">
                <div className="min-w-[113px] h-[113px] overflow-hidden rounded-full relative">
                  <img
                    src="/images/home/preview.png"
                    alt="preview"
                    className="inset-0 w-full h-full absolute object-cover object-top"
                  />
                </div>
                <div className="">
                  <h4 className="text-[24px] leading-[100%] font-semibold">Букет 101 роза</h4>
                  <p className="text-[16px] leading-[100%] mt-[14px]">символ любви, внимания и роскоши. Безупречный букет для самого особенного повода.</p>
                </div>
              </div>
              <div className="flex items-center gap-[9px] mt-[37px] h-[35px] roboto-serif">
                <div className="bg-[#E2AFA0] w-[90px] h-full flex-center rounded-[7.6px]">
                  <p className="text-[25px] font-semibold text-black">16 000</p>
                </div>
                <div className="w-[90px] h-full flex-center">
                  <p className="text-[25px] font-semibold line-through text-[#D9D9D9]">35 000</p>
                </div>
              </div>
              <div className="flex gap-[14px] justify-between h-[52px] mt-[14px]">
                <Button onClick={() => {}} className="w-full bg-yellow rounded-[11px] active:scale-95 h-full flex-center gap-[8px]">
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7979 7.96875V4.03125C11.7979 3.16101 11.4522 2.32641 10.8369 1.71106C10.2215 1.0957 9.38692 0.75 8.51668 0.75C7.64644 0.75 6.81184 1.0957 6.19649 1.71106C5.58113 2.32641 5.23543 3.16101 5.23543 4.03125V7.96875M15.1719 6.22487L16.2771 16.7249C16.3383 17.3067 15.8833 17.8125 15.2979 17.8125H1.73543C1.59736 17.8126 1.46081 17.7837 1.33463 17.7277C1.20846 17.6716 1.0955 17.5896 1.00308 17.4871C0.910653 17.3845 0.840842 17.2636 0.798177 17.1323C0.755513 17.001 0.740948 16.8622 0.75543 16.7249L1.86143 6.22487C1.88694 5.98299 2.0011 5.75911 2.1819 5.59641C2.3627 5.43371 2.59733 5.34371 2.84055 5.34375H14.1928C14.6968 5.34375 15.1194 5.72437 15.1719 6.22487ZM5.56355 7.96875C5.56355 8.05577 5.52898 8.13923 5.46745 8.20077C5.40591 8.26231 5.32245 8.29688 5.23543 8.29688C5.14841 8.29688 5.06495 8.26231 5.00341 8.20077C4.94188 8.13923 4.9073 8.05577 4.9073 7.96875C4.9073 7.88173 4.94188 7.79827 5.00341 7.73673C5.06495 7.67519 5.14841 7.64062 5.23543 7.64062C5.32245 7.64062 5.40591 7.67519 5.46745 7.73673C5.52898 7.79827 5.56355 7.88173 5.56355 7.96875ZM12.1261 7.96875C12.1261 8.05577 12.0915 8.13923 12.0299 8.20077C11.9684 8.26231 11.885 8.29688 11.7979 8.29688C11.7109 8.29688 11.6274 8.26231 11.5659 8.20077C11.5044 8.13923 11.4698 8.05577 11.4698 7.96875C11.4698 7.88173 11.5044 7.79827 11.5659 7.73673C11.6274 7.67519 11.7109 7.64062 11.7979 7.64062C11.885 7.64062 11.9684 7.67519 12.0299 7.73673C12.0915 7.79827 12.1261 7.88173 12.1261 7.96875Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[20px] font-bold text-[#2B2A24]">В корзину</p>
                </Button>
                <Button onClick={() => {}} className="w-full rounded-[13.6px] active:scale-95 h-full">
                  <p className="text-[20px] text-yellow">Подробнее</p>
                </Button>
              </div>
            </div>
            <div className="mt-[45px] w-full p-[16px] bg-[#000000CC] rounded-[19px] border-[1px] border-dashed border-[#727272] text-white">
              <p className="text-[22px] font-bold leading-[100%]">Здесь премиальные букеты по себестоимости</p>
              <p className="text-[22px] font-bold leading-[100%] mt-[16px]">Мы зарабатываем только на доставке и оформлении.</p>
            </div>
          </Container>
        </div>
      </LgShow>
      <LgHidden>
        <div className="w-full flex">
          <div className="w-[50%] translate-y-[-130px] z-[-1] pl-[0px]">
            <img
              src="/images/home/preview.png"
              alt="preview"
              className="max-h-[1158px] max-w-[800px] w-full h-auto"
            />
          </div>
          <div className="w-[50%] mt-[157px]">
            <p className="text-yellow uppercase tracking-[3px] text-[12px] roboto"><span>ЮЖНО - САХАЛИНСК</span></p>
            <h2 className="text-[59px] font-black leading-[100%]">
              Премиальные <br/>
              букеты по <br/>
              себестоимости
            </h2>
            <div className="mt-[59px] max-w-[310px]">
              <Button className="rounded-[10.8px] bg-pink p-[17.3px_26px] active:scale-95 roboto" onClick={() => {}}>
                <p className="text-[18px] font-bold">Найти свой идеальный букет</p>
              </Button>
              <p className="mt-[8px] text-[15px] text-center">В 2 раза выгоднее, чем в обычных <br/> цветочных магазинах</p>
            </div>
          </div>
        </div>
        <div className="absolute w-full bottom-[120px]">
          <Container>
            <div className="w-full h-[228px] border-[1px] border-border-gray bg-[#000000CC] rounded-[19px] border-dashed relative px-[43px] flex justify-between gap-[38px]">
              <div className="relative h-full w-[395px]">
                <div className="absolute bg-[#D8C5BF] opacity-80 h-[300px] w-full rounded-[21.8px] top-[-20%] left-[-10px] rotate-[-1.31deg]"></div>
                <div className="absolute bg-secondary-bg h-fit w-full rounded-[32px] top-[-12%] p-[46.8px_21.8px] roboto">
                  <h4 className="text-[30px] font-black">Букет 101 роза</h4>
                  <p className="text-[19px] leading-[100%] mt-[14px]">символ любви, внимания и роскоши. Безупречный букет для самого особенного повода.</p>
                  <div className="flex items-center gap-[14px] mt-[13px] h-[51px] roboto-serif">
                    <div className="bg-[#E2AFA0] w-[130px] h-full flex-center rounded-[7.6px]">
                      <p className="text-[36px] font-semibold text-black">16 000</p>
                    </div>
                    <div className="w-[130px] h-full flex-center">
                      <p className="text-[36px] font-semibold line-through text-[#D9D9D9]">35 000</p>
                    </div>
                  </div>
                  <div className="flex gap-[21.8px] justify-between h-[62px] mt-[21.8px]">
                    <Button onClick={() => {}} className="w-full bg-yellow rounded-[13.6px] active:scale-95 h-full flex-center gap-[8px]">
                      <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7979 7.96875V4.03125C11.7979 3.16101 11.4522 2.32641 10.8369 1.71106C10.2215 1.0957 9.38692 0.75 8.51668 0.75C7.64644 0.75 6.81184 1.0957 6.19649 1.71106C5.58113 2.32641 5.23543 3.16101 5.23543 4.03125V7.96875M15.1719 6.22487L16.2771 16.7249C16.3383 17.3067 15.8833 17.8125 15.2979 17.8125H1.73543C1.59736 17.8126 1.46081 17.7837 1.33463 17.7277C1.20846 17.6716 1.0955 17.5896 1.00308 17.4871C0.910653 17.3845 0.840842 17.2636 0.798177 17.1323C0.755513 17.001 0.740948 16.8622 0.75543 16.7249L1.86143 6.22487C1.88694 5.98299 2.0011 5.75911 2.1819 5.59641C2.3627 5.43371 2.59733 5.34371 2.84055 5.34375H14.1928C14.6968 5.34375 15.1194 5.72437 15.1719 6.22487ZM5.56355 7.96875C5.56355 8.05577 5.52898 8.13923 5.46745 8.20077C5.40591 8.26231 5.32245 8.29688 5.23543 8.29688C5.14841 8.29688 5.06495 8.26231 5.00341 8.20077C4.94188 8.13923 4.9073 8.05577 4.9073 7.96875C4.9073 7.88173 4.94188 7.79827 5.00341 7.73673C5.06495 7.67519 5.14841 7.64062 5.23543 7.64062C5.32245 7.64062 5.40591 7.67519 5.46745 7.73673C5.52898 7.79827 5.56355 7.88173 5.56355 7.96875ZM12.1261 7.96875C12.1261 8.05577 12.0915 8.13923 12.0299 8.20077C11.9684 8.26231 11.885 8.29688 11.7979 8.29688C11.7109 8.29688 11.6274 8.26231 11.5659 8.20077C11.5044 8.13923 11.4698 8.05577 11.4698 7.96875C11.4698 7.88173 11.5044 7.79827 11.5659 7.73673C11.6274 7.67519 11.7109 7.64062 11.7979 7.64062C11.885 7.64062 11.9684 7.67519 12.0299 7.73673C12.0915 7.79827 12.1261 7.88173 12.1261 7.96875Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <p className="text-[20px] font-bold text-[#2B2A24]">В корзину</p>
                    </Button>
                    <Button onClick={() => {}} className="w-full rounded-[13.6px] active:scale-95 h-full">
                      <p className="text-[20px] text-yellow">Подробнее</p>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center h-full gap-[38px] text-[32px] font-extrabold leading-[104%]">
                <p>
                  Мы продаём цветы <br/>
                  по себестоимости, <br/>
                  без наценки.
                </p>
                <p>
                  Мы зарабатываем <br/>
                  только на доставке <br/>
                  и оформлении.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </LgHidden>
    </main>
  );
};