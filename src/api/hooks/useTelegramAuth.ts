import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { axiosInstance } from '../axios-instance'
import { AUTH_ENDPOINTS } from '../config'
import type { ApiError } from '../types/api'
import type { StartAppLinkResponse } from '../types/auth'

/**
 * Хук для генерации ссылки на Telegram бота для авторизации
 * Вызывает POST /auth/telegram/start-link без параметров
 */
export const useGenerateTelegramLink = () => {
  return useMutation<StartAppLinkResponse, AxiosError<ApiError>, void>({
    mutationFn: async () => {
      const response = await axiosInstance.post<StartAppLinkResponse>(
        AUTH_ENDPOINTS.telegramStartLink,
        {}
      );
      return response.data;
    },
    onError: (error) => {
      console.error('[Telegram Auth] Ошибка генерации ссылки:', error);
    },
  });
};

