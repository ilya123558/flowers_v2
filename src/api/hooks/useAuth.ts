import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { axiosInstance, clearTokens } from '../axios-instance';
import { AUTH_ENDPOINTS } from '../config';
import type { ApiError } from '../types/api';
import type { User } from '../types/auth';

const AUTH_KEYS = {
  me: ['auth', 'me'] as const,
};

// Logout mutation
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation<void, AxiosError<ApiError>, void>({
    mutationFn: async () => {
      try {
        await axiosInstance.post(AUTH_ENDPOINTS.logout);
      } catch (error) {
        // Игнорируем ошибки при logout
        console.error('Logout error:', error);
      }
    },
    onSettled: () => {
      clearTokens();
      queryClient.clear();
      
      // Редирект на главную
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
    },
  });
};

// Get current user query
export const useMe = (enabled: boolean = true) => {
  return useQuery<User, AxiosError<ApiError>>({
    queryKey: AUTH_KEYS.me,
    queryFn: async () => {
      const response = await axiosInstance.get<User>(AUTH_ENDPOINTS.me);
      return response.data;
    },
    enabled,
    retry: false,
  });
};

// Check if user is authenticated
export const useIsAuthenticated = () => {
  const { data, isLoading } = useMe(false);
  return {
    isAuthenticated: !!data,
    isLoading,
    user: data,
  };
};

