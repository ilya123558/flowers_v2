export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
} as const;

export const AUTH_ENDPOINTS = {
  login: '/auth/login',
  refresh: '/auth/refresh',
  logout: '/auth/logout',
  me: '/auth/me',
  telegramStartLink: '/auth/telegram/start-link',
  whatsappStartLink: '/auth/whatsapp/start-link',
  authStream: (token: string) => `/auth/stream/${token}`,
};

