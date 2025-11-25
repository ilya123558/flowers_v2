'use client'
import { setTokens, useGenerateTelegramLink, useSSE } from "@/api"
import { Button } from "@/shared/button/Button"
import { Container } from "@/shared/container/Container"
import { TClassNameWithChildren } from "@/utils/types/main"
import { useQueryClient } from "@tanstack/react-query"
import clsx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"

export const ProfileUnauth = ({children,  className}: TClassNameWithChildren) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const generateTelegramLink = useGenerateTelegramLink();
  const { data: sseData } = useSSE(authToken);
  const queryClient = useQueryClient();

  const handleTelegramAuth = async () => {
    if (generateTelegramLink.isPending) return;
    
    try {
      const response = await generateTelegramLink.mutateAsync();
      
      // Открываем Telegram в новой вкладке
      window.open(response.link, '_blank');
      
      // Начинаем слушать SSE
      setAuthToken(response.auth_token);
    } catch (error) {
      console.error('[Telegram Auth] Ошибка при генерации ссылки:', error);
    }
  };

  // Обработка получения токенов через SSE
  useEffect(() => {
    if (sseData?.access_token && sseData?.refresh_token) {
      // Сохраняем токены
      setTokens(sseData.access_token, sseData.refresh_token);
      
      // Проверяем, что токены действительно сохранились
      const savedToken = localStorage.getItem('access_token');
      const savedRefreshToken = localStorage.getItem('refresh_token');
      
      // Убеждаемся, что токены сохранены перед инвалидацией
      if (savedToken && savedRefreshToken) {
        // Небольшая задержка перед инвалидацией, чтобы убедиться, что токены применены
        setTimeout(() => {
          // Инвалидируем кеш пользователя - это вызовет повторный запрос с новым токеном
          queryClient.invalidateQueries({ queryKey: ['auth', 'me'] });
          
          // Сбрасываем auth_token
          setAuthToken(null);
        }, 50);
      } else {
        console.error('[Telegram Auth] Ошибка: токены не сохранились в localStorage');
      }
    }
  }, [sseData, queryClient]);

  return (
    <Container>
      <div className={clsx("", className)}>
        <h4 className="lg:text-[24px] text-[16px] font-bold lg:mt-[40px] mt-[20px] text-[#C8C8C8]">{children}</h4>
        <div className="w-full lg:p-[53px_46px] p-[30px_20px] bg-[#1E1D1A] rounded-[24px] lg:mt-[40px] mt-[20px]">
          <div className="flex flex-col items-center">
            <p className="text-center lg:text-[22px] text-[16px] font-medium">Чтобы просматривать этот раздел, верифицируйтесь через мессенджер.</p>
            <div className="mt-[32px] flex sm:flex-row flex-col gap-[16px] sm:w-fit w-full">
              <Button 
                onClick={handleTelegramAuth}
                className="flex-center bg-[#00699C1A] gap-[8px] p-[17.5px_16px] border-[2px] border-[#3FC1FF] rounded-[10px] lg:active:scale-95 active:scale-[0.98]"
              >
                <div className="aspect-square w-[21px] relative">
                  <Image src={'/images/home/review/telegram.png'} alt="telegram" fill />
                </div>
                <p className="text-[19px] font-bold text-nowrap">Написать в Telegram</p>
              </Button>
              <Button onClick={() => {}} className="flex-center bg-[#3589051A] gap-[8px] p-[17.5px_16px] border-[2px] border-[#37A806] rounded-[10px] lg:active:scale-95 active:scale-[0.98]">
                <div className="aspect-square w-[21px] relative">
                  <Image src={'/images/home/review/whatsapp.png'} alt="whatsapp" fill />
                </div>
                <p className="text-[19px] font-bold text-nowrap">Написать в WhatsApp</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};