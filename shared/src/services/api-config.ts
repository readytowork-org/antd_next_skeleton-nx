import { AxiosResponse } from 'axios';

import { ApiError } from 'next/dist/server/api-utils';
import { HttpClient } from './http-client';
import { auth } from '@skeleton/shared';

const _httpClient = new HttpClient({
  format: 'json',
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

_httpClient.instance.interceptors.request.use(
  async (config) => {
    const token = await auth.currentUser?.getIdToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    const data = error.response?.data || undefined;
    return data
      ? Promise.reject<ApiError>(data)
      : Promise.reject<AxiosResponse>(error.response);
  }
);

_httpClient.instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const data = error.response?.data || undefined;
    return data
      ? Promise.reject<ApiError>(data)
      : Promise.reject<AxiosResponse>(error.response);
  }
);

export { _httpClient };
