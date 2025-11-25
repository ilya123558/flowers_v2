export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export interface RefreshTokenRequest {
  refresh_token: string;
}

export interface StartAppLinkResponse {
  link: string;
  auth_token: string;
  expires_in: number;
}

export interface User {
  id: string;
  phone?: string;
  first_name: string;
  last_name?: string;
  photo_url?: string;
  bonus_balance: number;
  bonus_level: number;
  is_active: boolean;
  telegram_connected: boolean;
  telegram_username?: string;
  whatsapp_connected: boolean;
  whatsapp_phone?: string;
}

