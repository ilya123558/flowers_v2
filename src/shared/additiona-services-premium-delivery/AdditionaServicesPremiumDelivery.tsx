'use client'
import { useState } from "react";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { BoxWrapper } from "../wrappers/BoxWrapper";
import { BasketButton } from "../button/BasketButton";
import { AnimationHeightWrapper } from "../wrappers/AnimationHeightWrapper";

export const AdditionaServicesPremiumDelivery = () => {
  const [isCheckedPremiumDelivery, setIsCheckedPremiumDelivery] = useState(false)

  return (
    <BoxWrapper className="w-full p-[16px_24px] rounded-[14px]" withDashedBorder>
      <div className="">
        <div className="flex justify-between items-center">
          <Checkbox isChecked={isCheckedPremiumDelivery} setIsChecked={setIsCheckedPremiumDelivery}>
            Выбрать премиум доставку
          </Checkbox>
          <Button onClick={() => {}}>
            <p className="underline text-[16px] text-secondary">Подробнее об услуге</p>
          </Button>
        </div>
        <p className="mt-[16px] text-[16px] text-secondary leading-[150%]">
          Курьер в костюме и белых перчатках вручит букет по этикету. Согласуем время и после пришлём отчёт с реакцией.
        </p>
      </div>
      <AnimationHeightWrapper isOpen={isCheckedPremiumDelivery}>
        <div className="mt-[11px] flex items-center gap-[11px]">
          <div className="w-fit flex items-center gap-[4px] p-[9.5px_10px] rounded-[8px] bg-[#252525]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.362 17.037C19.6916 16.366 18.9082 15.8184 18.0477 15.4192C19.2611 14.4361 20.0352 12.9361 20.0352 11.254C20.0352 8.28612 17.5602 5.8513 14.5924 5.89683C11.67 5.94237 9.31558 8.32362 9.31558 11.254C9.31558 12.9361 10.0924 14.4361 11.3031 15.4192C10.4425 15.8181 9.65903 16.3658 8.98879 17.037C7.5263 18.5022 6.69594 20.4361 6.64237 22.4986C6.64165 22.5272 6.64667 22.5557 6.65711 22.5823C6.66756 22.6089 6.68323 22.6332 6.7032 22.6536C6.72317 22.6741 6.74704 22.6904 6.77339 22.7015C6.79975 22.7126 6.82805 22.7183 6.85665 22.7183H8.35665C8.47183 22.7183 8.56826 22.6272 8.57094 22.512C8.62183 20.9584 9.2513 19.504 10.3575 18.4004C10.9236 17.8313 11.597 17.3801 12.3386 17.073C13.0802 16.7659 13.8754 16.6089 14.6781 16.6111C16.3093 16.6111 17.8442 17.2459 18.9986 18.4004C20.1022 19.504 20.7317 20.9584 20.7852 22.512C20.7879 22.6272 20.8843 22.7183 20.9995 22.7183H22.4995C22.5281 22.7183 22.5564 22.7126 22.5828 22.7015C22.6091 22.6904 22.633 22.6741 22.653 22.6536C22.6729 22.6332 22.6886 22.6089 22.699 22.5823C22.7095 22.5557 22.7145 22.5272 22.7138 22.4986C22.6602 20.4361 21.8299 18.5022 20.362 17.037ZM14.6781 14.6825C13.762 14.6825 12.8995 14.3263 12.254 13.6781C11.93 13.3567 11.6741 12.9733 11.5015 12.5508C11.329 12.1284 11.2432 11.6755 11.2495 11.2192C11.2575 10.3406 11.6084 9.49148 12.2218 8.86201C12.8647 8.20308 13.7245 7.83612 14.6433 7.82541C15.5513 7.81737 16.4325 8.17094 17.0808 8.80576C17.745 9.45666 18.1093 10.3272 18.1093 11.254C18.1093 12.17 17.7531 13.0299 17.1049 13.6781C16.7868 13.9976 16.4086 14.2509 15.9921 14.4233C15.5755 14.5958 15.1289 14.6839 14.6781 14.6825ZM7.96826 11.9611C7.94415 11.7281 7.93076 11.4924 7.93076 11.254C7.93076 10.8281 7.97094 10.4129 8.04594 10.0084C8.06469 9.91201 8.01379 9.81291 7.9254 9.77273C7.56112 9.60933 7.22629 9.38433 6.93701 9.10041C6.59613 8.76989 6.3279 8.37195 6.14942 7.93197C5.97093 7.49199 5.88612 7.01964 5.9004 6.54505C5.92451 5.68523 6.27004 4.86826 6.87272 4.25219C7.53433 3.57451 8.42362 3.20487 9.36915 3.21558C10.2236 3.22362 11.0486 3.55308 11.6727 4.13701C11.8843 4.33523 12.0665 4.55487 12.2192 4.79058C12.2727 4.87362 12.3772 4.90844 12.4683 4.8763C12.9397 4.71291 13.4379 4.59773 13.9495 4.54416C14.0995 4.52808 14.1852 4.36737 14.1183 4.23344C13.2477 2.51112 11.4692 1.32183 9.41201 1.28969C6.44147 1.24416 3.96647 3.67898 3.96647 6.64416C3.96647 8.3263 4.74058 9.8263 5.95397 10.8093C5.10219 11.2031 4.31737 11.7468 3.63701 12.4272C2.16915 13.8924 1.33879 15.8263 1.28522 17.8915C1.28451 17.9201 1.28952 17.9485 1.29997 17.9751C1.31042 18.0017 1.32609 18.026 1.34606 18.0465C1.36603 18.0669 1.3899 18.0832 1.41625 18.0943C1.4426 18.1054 1.47091 18.1111 1.49951 18.1111H3.00219C3.11737 18.1111 3.21379 18.02 3.21647 17.9049C3.26737 16.3513 3.89683 14.8968 5.00308 13.7933C5.79058 13.0058 6.75487 12.4593 7.80754 12.1942C7.91201 12.1674 7.98165 12.0683 7.96826 11.9611Z" fill="#D9D9D9"/>
            </svg>
            <p className="text-white text-[14px] font-medium">Выбор каждого 5-го гостя</p>
          </div>
          <div className="w-fit flex items-center gap-[4px] p-[9.5px_10px] rounded-[8px] bg-[#252525]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="24" height="24" fill="url(#pattern0_1129_11866)"/>
              <defs>
              <pattern id="pattern0_1129_11866" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_1129_11866" transform="scale(0.01)"/>
              </pattern>
              <image id="image0_1129_11866" width="100" height="100" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIHUlEQVR4nO2ceYxfUxTHX7VULa0WtVZr1wqJjAhSS4iKNUFLlCgqRMRSVG2l2sQWJZbWlnQZy7ThnyaWhFKKsYTaQ6ydalNaahml7eh85Jozcl1vub/3u+/9ftM5nz/fcs/3nLfce89dokhRFEVRFEVRFEVRFEVRFEVRFEVRFEVRFC+A04AWYAXQBFwA7Op3t5KEiaHEsklia2J8WtZN2wG/E88XwFTgCKBnakFKBPQCjpSYmdjFYWK9XVoh4/HjJ6AROAHYuFRP6xgTC4lJo8TIh/FpBc6nclaJgJPMWxF1M4CNgOHAvcAPOeL3YlLBfYA1zsX3A+8C6z0L/w6YDOwSbeAAu4ivxmcf1kssTUxtTMz7xBlocC5cap0bIJX9DGClh/G/gGeAkzek+gboKT494/mSrpCYmdgNsMpZ6lzXEGdsjHPRsymiDpdPdLmHKPMGXQ/0i7oowFbig8/XsFxic3jSy2hi69wzJu6iO52LbvcQah7OCGAW8GuG0F+AW4GBURcBGCias3z7VWIwwuePYGLr3H9n3EXPOReNrlD8psAo4I0M8eaf+TAwKKpTgO0laKszfHkPuBDYosLyz8r8GwFLnIv2r8Khg+Tf+UeKM2uBu+1/a62RuvIe0ZbEavHtoCrs7O+UucS9oB/Qbl2wDtgkkIOmJfJzioOmvX5ZLSt/OjpxV0gTPgnjwy0hXiATW4lxJ+3/qWOBQx3jH1Vr1BGwJXA58H2Kw+8DB4a0W8Hb+naKrh+BSUD/wHY/duwcYp8c65x8MqRx58FMSOnFtonzPUv6KiaLzTh+Eq1bFmT/ScfeWPvkFOfkpCJEWPb6S6WZ9K9+q8iEpmlQAAsTbK+TRse2RdkXDebFs5lsnzSpD5vzihRj2d0XaE4IzErzKy3A5qEpndvXgWGhbSboOM+x3WiffNU5eVQZoqxc0KUJTcw/gZEBbY2SMl2M7UuMllC2PLQc7Wh41T5pcvM2u5clzNKwD/AB5fMpsF8N/N3D0bHYrtzsis3kaHqXLdBKcD5e4sN4zHRoa+RrbycfZp5BL3NiiCNyWS0EWkJ7SOunaEyfokeNfV3maBoSyaiWTXMtRVo9/aLJ3dMOBfCmo+kIc/Ac52BTzsLPlnRzm/R4W6RpORu4EjjMN+cDTHM0zcujySlznlPmNM/7tpDM7ZXiy0LxbZX4+g1wXE5NcxxN55iDEyvN8iYMXablrexxkk+AR4BTgb4J5bU491Xd0jJlOGW2JFzXV8YvHhWtRnMWS3NqusMpZ6I5+IBz8LKcFVRWZjSpE7YAuLpzlJGOTpubHd4sj8OOxs1jeuWDrNG/q0WLnWPyJe8DMekkmwfMwbnOwTNzFj46I1eVRTvwWkwndUEePQkaFzllN4pNO7FaKdX8stw0/Bxz8CXn4DEBMplbA0NlBsY44Ang25wO31qNnoy6yZdvxQeTET5efNu62ow4cKxjZ745+KFz8IBQAYgRsIPUHWaI82vPYIwOaN8dpk7iK9F4itEcyr7HPIYP4yrQwUUJiBE0DLhGRhnbE4LTENCeaenF0S4ajJahoex5zma0WRxJU9Wm0CxnirjBwLUxjYM9AtpwO8GrxWZpL2HMTFGbH8zBVudgRePDBYhcWdQLIrNHbFaEKjunHtPEtvktimkK1nT2If8fIwmWV5P+ks2aUGUH0tPWFR7Ixt3tgdT7L6tfd/tl1UulPiShUh/c3Sr1WjZ795WJBM0pzd7hJTV7m6XZW8oQblqzt8yO4Y45OoZjulHH8IMiUicm0biNdPpOlLS1mfKymHxMDxiA6Tk1LBYfxkk6aKj42LuI1MmcQMnF4yXRVm1ycbZzfFE1TnfF5GLV6feENQ8+mFT3y8BVVip8kHONaZZvnkdThen3q+ol/V71AFUFD0QHqDwGqEIN4R4nn+86Gd40lfYrwExJWw/3fdOpvyHcw6T+mCk+fS0+ritiCFcnOdTZJIe6mgZkAG4q4YHcFNWYpGlA9TRRrifwIOUxo1a5u5iJcn/9q6VOppJuA7xA+Zg6Yfu6mUpa68nWYv+QhBWua4DTA9o5I2YtPrKc7+BQdkJMtq7VcoReksuKa/uv+qeSK+bhm1VRLm2yZqXqpXyeOs537M+u2YIdqyWVNNv9syLHtiWp+XmC7UVlLK2LWbAzpfQlbWLLTJ95KGUnhKYyxmRkeZ07J62T9dK4KGyFcNaSNvMZ23xcgIB+8lYkLcJvBS4KbddD18Uxg3T2Zgc3F7ELRdaiz75FLIu2eroTMpYcLww5u6RSpC/2Yoq+36R+CfJgZDLh2sRl0aE3DrDGPiZlbFbzvay1q+k6DWtdytiMLZZWyhezY1QFmRsHJGytcVZOp44Cnk5Zbtz5Bd5VjxvS0PFrnZqR9TXnnhJfewRIuz8XZPMZ6969gRuldZRGmyTo6n4PR2A32VAmK9v7mfi+VwVle20+47U9k9N0vN5zoeZaSVPsGXUx6HjZZmXsf2LvRnFd1ri87/ZMDWlJRqkTRsk4gVvfJGE6YLdV+8+tB8T/2xM6lXG0yLjPSNf/mKRig+8Wf1Okre7mutIwn/jz8vBqkqQsISl4uvjou/Vh5wOaG9MJj9/ir4pNMDv5Uv6lO0fdBDqGmyeK73mZH2Kb2M628ztSj5S+8L7eMDEAbpCYVDJpYnzejZSRcfPHpb3e5euFogB2kl2sn4ipL/w3Una2Gm+VzVjuA87tii2kesE0iaUDfJ/EtNVrq3FFURRFURRFURRFURRFURRFURRFURRFUaJO/gaBfy4zffHRWAAAAABJRU5ErkJggg=="/>
              </defs>
            </svg>
            <p className="text-white text-[14px] font-medium">Курьер — представитель бренда</p>
          </div>
        </div>
        <div className="h-[51px] flex items-center justify-between mt-[11px]">
          <p className="text-[14px] font-semibold text-white">2 500 ₽</p>
          <BasketButton handleClick={() => {}} />
        </div>
      </AnimationHeightWrapper>
    </BoxWrapper>
  );
};