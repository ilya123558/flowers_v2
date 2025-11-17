import { useEffect, useState } from "react";

interface IProps {
  setSelectSocial: (value: "whatsapp" | "telegram" | null) => void
}

export const LoginStatus = ({ setSelectSocial }: IProps) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [successGifIsHidden, setSuccessGifIsHidden] = useState(false)

  // удалить
  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(true)
    }, 2000)
  }, [])

  // через 2 скунды убираем гифку и меняем на статичную фотку чтобы гифка на была цикличной
  useEffect(() => {
    if(isSuccess) {
      const timer = setTimeout(() => {
        setSuccessGifIsHidden(true)
      }, 2000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isSuccess])
  
  return (
    <div>
      {isSuccess
        ? (
          <div className="flex flex-col items-center mt-[23px] text-center">
            <p className="text-[#C8C8C8] font-bold text-[24px] leading-[144%] mb-[30px]">Вход выполнен!</p>
            {successGifIsHidden
              ? (
                <div className="h-[100px] w-[100px] flex-center">
                  <div className="flex-center bg-[#50CE5B] rounded-full w-[36px] aspect-square">
                    <svg className="mt-[-2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                      <path fill="white" d="M 20.738281 5.9941406 A 1.250125 1.250125 0 0 0 19.878906 6.3730469 L 9 17.234375 L 4.1152344 12.361328 A 1.250125 1.250125 0 1 0 2.3496094 14.130859 L 8.1171875 19.884766 A 1.250125 1.250125 0 0 0 9.8828125 19.884766 L 21.644531 8.140625 A 1.250125 1.250125 0 0 0 20.738281 5.9941406 z"/>
                    </svg>
                  </div>
                </div>
              )
              : (
                <img
                  src="/gif/login-success.gif"
                  alt="loading"
                  width={100}
                  height={100}
                  className=""
                />
              )
            }
            <p className="text-[#BCBCBC] text-[14px] leading-[144%]">Добро пожаловать 👋</p>
          </div>
        )
        : (
          <>
            <div className="flex flex-col items-center mt-[60px] text-center">
              <img
                src="/gif/loading.gif"
                alt="loading"
                width={100}
                height={100}
              />
              <p className="text-[#BCBCBC] text-[14px] leading-[144%] mt-[25px]">Проверяем данные, секундочку</p>
            </div>
          </>
        )
      }
    </div>
  );
};