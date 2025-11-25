import { useEffect, useRef, useState } from 'react'
import { API_CONFIG, AUTH_ENDPOINTS } from '../config'

interface SSEAuthData {
  access_token: string;
  refresh_token: string;
}

interface UseSSEResult {
  data: SSEAuthData | null;
  error: Error | null;
  isConnected: boolean;
}

/**
 * Хук для подключения к Server-Sent Events (SSE) для авторизации
 * Подключается к /auth/stream/{auth_token} и ожидает событие auth_completed
 */
export const useSSE = (authToken: string | null): UseSSEResult => {
  const [data, setData] = useState<SSEAuthData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const eventSourceRef = useRef<EventSource | null>(null);

  useEffect(() => {
    if (!authToken) {
      return;
    }

    const streamUrl = `${API_CONFIG.baseURL}${AUTH_ENDPOINTS.authStream(authToken)}`;
    
    const eventSource = new EventSource(streamUrl);
    eventSourceRef.current = eventSource;

    eventSource.onopen = () => {
      setIsConnected(true);
      setError(null);
    };

    eventSource.addEventListener('auth_completed', (event) => {
      try {
        const tokens = JSON.parse(event.data);
        
        // Убеждаемся, что токены не содержат лишних пробелов
        const cleanedTokens = {
          access_token: tokens.access_token?.trim(),
          refresh_token: tokens.refresh_token?.trim()
        };
        
        // Проверяем, что токены не пустые после очистки
        if (!cleanedTokens.access_token || !cleanedTokens.refresh_token) {
          console.error('[SSE] Ошибка: токены пустые после очистки');
          setError(new Error('Токены пустые после обработки'));
          return;
        }
        
        setData(cleanedTokens);
        
        // Закрываем соединение после получения токенов
        eventSource.close();
        setIsConnected(false);
      } catch (err) {
        console.error('[SSE] Ошибка парсинга токенов:', err);
        console.error('[SSE] Данные, которые не удалось распарсить:', event.data);
        setError(err as Error);
      }
    });

    eventSource.addEventListener('heartbeat', () => {
      // Heartbeat для поддержания соединения
    });

    eventSource.addEventListener('auth_timeout', () => {
      setError(new Error('Время ожидания авторизации истекло'));
      eventSource.close();
      setIsConnected(false);
    });

    eventSource.addEventListener('error', (event) => {
      console.error('[SSE] Ошибка события:', event);
      setError(new Error('Ошибка SSE соединения'));
    });

    eventSource.onerror = (event) => {
      console.error('[SSE] Ошибка соединения:', event);
      setError(new Error('Ошибка подключения к серверу'));
      setIsConnected(false);
      eventSource.close();
    };

    // Cleanup при размонтировании
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        setIsConnected(false);
      }
    };
  }, [authToken]);

  return { data, error, isConnected };
};

