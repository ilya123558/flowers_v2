'use client'
import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container"
import { LgHidden } from "@/shared/wrappers/SizeHidden";
import { LgShow } from "@/shared/wrappers/SizeShow";
import clsx from "clsx";
import Image from "next/image";

const BgImage = ({position, src, width}: {src: string, width: number, position: {top: number, right: number}}) => {
  return (
    <div style={{top: position.top, right: position.right}} className={clsx("absolute")}>
      <div style={{width}} className={clsx("relative aspect-[149/117]")}>
        <Image src={src} alt="bg-img" fill/>
      </div>
    </div>
  )
} 

const HomeFlowersInBoxImage = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <div className="relative w-[710px] aspect-[710/495]">
          <Image src={'/images/home/flowers-in-box/flowers.png'} alt="flowers" fill/>
        </div>
      </div>
      <div className="">
        <BgImage position={{top: 33, right: 438}} src="/images/home/flowers-in-box/bg-img-1.png" width={150} />
        <BgImage position={{top: 134, right: 660}} src="/images/home/flowers-in-box/bg-img-2.png" width={150} />
        <BgImage position={{top: 331, right: 582}} src="/images/home/flowers-in-box/bg-img-3.png" width={150} />
        <BgImage position={{top: 43, right: 680}} src="/images/home/flowers-in-box/bg-img-4.png" width={70} />
        <BgImage position={{top: 58, right: 612}} src="/images/home/flowers-in-box/bg-img-5.png" width={36} />
        <BgImage position={{top: 34, right: 621}} src="/images/home/flowers-in-box/bg-img-6.png" width={16} />
      </div>
    </div>
  )
}

export const HomeFlowersInBox = () => {
  const list = [
    {
      title: 'Аромамасла для настроения',
      svg: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect opacity="0.6" width="17.7201" height="18.2738" fill="url(#pattern0_1460_18300)"/>
          <defs>
          <pattern id="pattern0_1460_18300" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1460_18300" transform="matrix(0.01 0 0 0.00969697 0 0.0151515)"/>
          </pattern>
          <image id="image0_1460_18300" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAH3ElEQVR4nO2daYxURRCAh0METw6BcKl4gqiYeKwrBEVjRAhggooBURMwakzEIN4oYDTigaKSXY4QAwqKoj+MJMph4i27eCHGA1ADLERFBQQF3d3PVOhJ1mXndb15/Wb67bwvmeyfna6qrvemq7urqzOZZgIwCHgH+Av4GXge6BmTrLbAVGATUAesB24BWsQhL3EAI4B/OZhtwHGOZR0CvE3TPJspdYA2QA25WeJY3jiCOTtTygBllg7aDxzpUN4qi7wHM6UMcCF2rnAk6whgn0XWjEwpA3QEai2dNNfhWGVjTKbUAT6xdNIWR3IqLXIk4uqSKXU4EILa6OdAjoS5QaxxY1HCAc5TOGRyRBl9FTKmubMqwQAtzWQwiNURZUxSOKTMnVUJB3gxzvAXWGlp/zeglVurEgwwVvEEj8yz7cMV4e5i91YlGOAYRfg7J8+2hyucPc69Vc0//N2cZ7sVinC3q3uLSiP8PS2GcLc6HotKI/y9I2SbpyrafCg+q5p/+LsqZJu3KxxSHp9VCQfH4W/A3keW39Nwt0DhL9DO7EAG8ZKmrVIPf+tchL/AMIVzr4/fqoQDrHER/gKzLe3UA93ityjhANNchL/ARksbnxbGoua/rWsNf4FTsPNw4awq8fAXmKhwyIDCWZVwgMVRwl/gLUW427qwViUY4FrFEz4iQri7tPBWNf/wtzLHd4cqnHlD4a1KOEBVPuGvZCAqwt3uhbco4QDTFU963ya+t8Hync+LY1HCATpIaqfl06HRd1oovtO7eFalpKSkpKSkpKSkpBRxWeTuBHwGZkoBoB/JoDSy4Ukd4hekDvELUof4BalD3AF0Ag6L2EY/koFfDjEHXcaa9M7NwD8NlN0jaTTAo8AFeZS3qMJ//HCIvAHAfcCvIZT/ALg0hIwTgb0B7X0NrG3isz1kp/6do521in334jtEEtCAdeTPIu1PGnB/2GPQyuSHhiwLkC9VgPx1CDDEPFFRqQKOVshrJblRwBQ5ZdvoHGAuh3RWJD80ZEIiHQIMVrzCYfhQxqCQOnQFHjDVgXIWCgg5/vRMnEPMU2fLFMyHOXnqI4P+oRGTH4R1FjneOuQV4qE+zEAfQt/zlfIfj+iQWlNETQKAucDlQQ+KK+POMB0XF1Ux6Cxjzw6F7MERHdIUv5i84XjSUIGFxM+AGPSW+ow2OsbgkCwyB+vl2qjWwG7iZ1YMZQH/zDf315FDMHOicwp9DNkFXzhT+oDeFyvlVlrakbEBB07pFbYk6ijgGROKfmcGKnk6vqUw1BnZG0xIKxPP5cC9+RSdDDE5/NHSjgzULlhrHVOA9sBjysGv2FQDV4U80PORsu2+Ae2cpPzp03BjkMKj8ljz8YEV2tffLPHYKvwIkyztDAR+cKC7vPltMk0kGk+NOYyNm23agdKsNNtYqQxuyuUtbfS5xiyyan/ah+RzejUJ7AROV2avyDZAEPvCLuHkWDmQRVN9EAGMTvib0ZifbPMIY/c87AyP4pAGTpGAyF5VyOziyQyyuTFX0VGyWmyjIqpDFNsFQk32H2fRPKkD+isirh1Rwt8QDpExJYjabPnsXTRf5is6apminT4OHCIDfSD57KAljT0HhZMHd9TkqOGvS4fMIX42mlzX/nJY36wlHWte4TcKEEyUWTpqpKKNFYVyyJfEh1yycpdEGBZFyxV1DaNwm0X+mYo2XIS/KofEtTQiKT/DQijbCfgsJl0eUWSwEHf4q3XIrmI8lTkU7hXTA/K0RW5PZTsVSXWI/Ay2zFPpiTHoM8NBKabI4a/WIXFkAI6PoHQ7xXJGWCYoxjAtfeJ2yALcE6nKMwciL5eUOyicmWVTQCaj7WMNXESZMbhldxRnCMBMh/pst5VxNZtvXpDdEZSrFlyxNVOYkuFaZivkfYwnZBV6wmGb+6PeeIm9+L2WfbaLJZU3rxWMhtu1LncIz4rokGpHesxUyLoOj2i8fBAmCTnviZilg05wtJQieU/tFPLexSMaK3eno3ZlbtM5T4cscrSN21t50ZdXm3K5Jma2m2o0vBm2SD1wpYMOkv3r45XyluIZuRS9RFHmTsNCbXKx+cncG0FWvbmyu6NS3kV4SJDCbc0xs6jIhGhQgJwupsZ6XUQ5N2scYWTK8v9XeEiQ0kc5zttdb8LrW+VGAbO/vNzRiSthQQiHPIenBCl9E8lirzxECmdMwGMSNeApCDzcY1I/ZeLqLUHKS15T0pjiYGewqORSvIXDSWIhmWdxSA88J2hPIom8oEgd9ZqgkNerGaySRRaHdMdvaoOUl/T4pDE94UVraqIeivSNsYpKEz6T+wpXhwuNhaLWtqAZUwKFSypsuUpJGkdWBzlDeQtosbnMZsDrJIehFlsklN+Cv2y15SBnz+G5WIqPm/cUb4fc++EzutQpc/TYZ/4ATlbY8RT+Uq3eOzKv+msOhbtcAajV5NualWtfz8BsDyoBFbR/4GJrVeY255rDpfUOVndHKPWfhL/OCF34oOGbck+E/QtJJujRoL2rIyRWfyNlPZR6tzd77D7+TIV7MwKWsF9uVGE0iO+lEEHApV1PhnByjTlvEhyN/F/GfPyLpsaHzTfQGNpNjhwAr5pO32kSzqSqwfumLEeZJmnOnKoaDSwx6TvyKovD5a+cGZF7BWXPPfDgTxPtSpGZYs6lZIyTh0gS2itlnmF7mP4Dmkm/okCONsoAAAAASUVORK5CYII="/>
          </defs>
        </svg>
      )
    },
    {
      title: 'Персональная открытка',
      svg: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect opacity="0.6" width="17.7201" height="18.2738" fill="url(#pattern0_1460_18303)"/>
          <defs>
          <pattern id="pattern0_1460_18303" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1460_18303" transform="matrix(0.01 0 0 0.00969697 0 0.0151515)"/>
          </pattern>
          <image id="image0_1460_18303" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVR4nO3dQW7CMBBGYd+jw4HS+3p6H3qQqSyx8I46yMnv8fskJFYI9FBmcBaUAgAAAAAAAAAAkFxEfEfEb+BurcHRghBDx7MFWV2NCHs9PBaXIYh1l99HLI4gYjIE8VeI9viJxWUIkgpBxGQIUtmytBhDXYsRRIuzZe2tRsTXwFnh0GwjyAeXyIEoj52C1Cu3rNEYXZT/vX6sz858E88iyHsE2XnLKgTRQhAxBHmPLUuMdR+aob7hWZadiLHVD0O/+CzLR6KMvq8MQVIhiJgMQSp3DLXYxUN9KoKIyRDEuWOIaQgiJkOQypalxRjqWowgWpwtC9MQRMx2W1a5yU5BbGSoE2Q+I8jCW1YhCEYQREyGIJWzLC3WXac5OhFgI0EY6vM5W9bCCkG0FIJMV9mytFj3LWTLEmAE0eLcMVxYYahrKQSZrnLHUIt1H5qjEwE2EkRdhiDOloVpCCImQ5DKWZYWY6hrMYJo8WxbFn/oIvaHLkd7cvc7QbQGxx2nCAAAAAAAAAAAAOVCfwalvcQydyZOAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>
      ), 
    },
    {
      title: 'Фото перед отправкой',
      svg: (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect opacity="0.6" width="17.7201" height="18.2738" fill="url(#pattern0_1460_18306)"/>
          <defs>
          <pattern id="pattern0_1460_18306" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1460_18306" transform="matrix(0.01 0 0 0.00969697 0 0.0151515)"/>
          </pattern>
          <image id="image0_1460_18306" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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"/>
          </defs>
        </svg>
      )
    }
  ]

  return (
    <div className="">
      <LgHidden>
        <Container className="mt-[87px]">
          <div className="relative w-full">
            <div className="bg-[#4D2638] absolute w-full h-full top-[-14px] left-[-10px] -z-10 rounded-[19px]" />
            <div className="w-full flex justify-between bg-black rounded-[19px] border-[1px] border-border-gray border-dashed overflow-hidden">
              <div className="p-[67px_69px_49px]">
                <h4 className="text-[34px] leading-[104%]">
                  Новый <br/> формат букета <br /> 
                  <span className="text-[54px] font-bold">в коробке</span>
                </h4>
                <p className="max-w-[337px] text-[24px] mt-[34px] leading-[104%]">Стильный букет в коробке, с ароматом, с подарочной открыткой, которую мы подпишем за вас бесплатно</p>
                <Button onClick={() => {}} className="bg-pink rounded-[11px] p-[17.3px_26px] mt-[62px] active:scale-95">
                  <p className="text-[18.4px] font-bold">Посмотреть все цветы в коробках</p>
                </Button>
              </div>
              <HomeFlowersInBoxImage />
            </div>
          </div>
        </Container>
      </LgHidden>
      <LgShow>
        <div className="bg-secondary-bg mt-[-1px] mb-[-1px]">
          <div className="">
            <div className="flex justify-between items-center gap-[20px] relative p-[32px_43px_32px_16px]">
              <p className="text-[#EBEBEB] text-[32px] leading-[100%] uppercase font-extrabold">ЦВЕТЫ В КОРОБКЕ</p>
              <div className="w-fit h-fit p-[4px] bg-[#50AF19] roboto rounded-[0px_6px_6px_6px]">
                <p className="text-[12px] font-semibold leading-[100%] text-[#252525]">Новинка</p>
              </div>
            </div>
          </div>

          <div className="relative w-screen aspect-[302/500] pt-[20px] overflow-hidden rounded-[18px_18px_0px_0px] bg-main-bg">
            <div className="z-[1] absolute top-[19px] px-[16px]">
              <p className="text-[20px] leading-[100%] text-white">
                Стильный букет в коробке, с ароматом, с подарочной открыткой, которую мы подпишем за вас бесплатно
              </p>
            </div>
            <div className="absolute top-[-50px] left-0 w-full h-full">
              <div className="relative w-full h-full">
                <Image src={'/images/home/flowers-in-box/flowers-mobile.png'} alt="flowers" fill className="object-cover object-top"/>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute w-full bottom-[40px] z-10">
              <div className="flex flex-col justify-between h-full roboto ">
                <div className="px-[16px]">
                  <Button onClick={() => {}} className="bg-pink rounded-[11px] p-[17.3px_26px] w-full active:scale-95 mt-[11px]">
                    <p className="text-[18.4px] font-bold">Посмотреть все цветы в коробках</p>
                  </Button>
                  <div className="mt-[38px] text-yellow text-[18px] flex flex-col gap-[7px]">
                    <div className="flex gap-[7px]">
                      <div className="w-fit p-[8.5px_12px] border-[2px] border-yellow rounded-[11px]">
                        <p className="text-[100%]">Аромамасла</p>
                      </div>
                      <div className="w-fit p-[8.5px_12px] border-[2px] border-yellow rounded-[11px]">
                        <p className="text-[100%]">Открытка</p>
                      </div>
                    </div>
                    <div className="w-fit p-[8.5px_12px] border-[2px] border-yellow rounded-[11px]">
                      <p className="text-[100%]">Фото перед отправкой</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LgShow>
    </div>
  );
};