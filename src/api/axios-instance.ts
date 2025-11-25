import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { API_CONFIG, AUTH_ENDPOINTS } from './config'
import type { AuthResponse, RefreshTokenRequest } from './types/auth'

const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const axiosInstance = axios.create(API_CONFIG);

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setTokens = (accessToken: string, refreshToken: string): void => {
  if (typeof window === 'undefined') return;
  // Убеждаемся, что токены не содержат лишних пробелов
  const cleanedAccessToken = accessToken?.trim() || accessToken;
  const cleanedRefreshToken = refreshToken?.trim() || refreshToken;
  localStorage.setItem(TOKEN_KEY, cleanedAccessToken);
  localStorage.setItem(REFRESH_TOKEN_KEY, cleanedRefreshToken);
};

export const clearTokens = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// Request interceptor для добавления токена
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    
    if (token && config.headers) {
      // Убеждаемся, что токен не содержит лишних пробелов
      const cleanedToken = token.trim();
      config.headers.Authorization = `Bearer ${cleanedToken}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor для обработки ошибок и refresh token
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Если ошибка 401 и это не запрос на refresh
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      originalRequest.url !== AUTH_ENDPOINTS.refresh
    ) {
      if (isRefreshing) {
        // Если уже идет процесс обновления токена, добавляем запрос в очередь
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        clearTokens();
        processQueue(new Error('No refresh token available'), null);
        isRefreshing = false;
        return Promise.reject(error);
      }

      try {
        const response = await axios.post<AuthResponse>(
          `${API_CONFIG.baseURL}${AUTH_ENDPOINTS.refresh}`,
          { refresh_token: refreshToken } as RefreshTokenRequest,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const { access_token, refresh_token } = response.data;
        setTokens(access_token, refresh_token);

        processQueue(null, access_token);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
        }

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as Error, null);
        clearTokens();
        
        // Редирект на страницу логина (можно настроить)
        if (typeof window !== 'undefined') {
          window.location.href = '/';
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

