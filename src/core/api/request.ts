import qs from 'qs';
import axios, { AxiosPromise } from 'axios';
import { API_URL } from 'core/configs/env';
import { getSessionData, isRefreshTokenValid, saveSessionData } from './auth';
import { CLIENT_ID, CLIENT_SECRET } from 'core/configs/env';
import { AxiosRequestConfigCustom } from './types';

const apiToken = `${CLIENT_ID}:${CLIENT_SECRET}`;

const headers = {
  Authorization: `Basic ${window.btoa(apiToken)}`,
  'Content-Type': 'application/x-www-form-urlencoded',
};

const makePrivateRequestHeaders = () => ({
  Authorization: `Bearer ${getSessionData()?.access_token}`,
});

export const request = (params: AxiosRequestConfigCustom): AxiosPromise => {
  return axios({
    headers,
    baseURL: API_URL,
    ...params,
  });
};

export const makePrivateRequest = (params: AxiosRequestConfigCustom): AxiosPromise => {
  return request({ ...params, headers: makePrivateRequestHeaders() });
};

export const refreshAccessToken = () => {
  const payload = qs.stringify({
    grant_type: 'refresh_token',
    refresh_token: getSessionData()?.refresh_token,
  });

  localStorage.removeItem('authData');

  return request({
    url: '/oauth/token',
    data: payload,
    method: 'POST',
  });
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest: AxiosRequestConfigCustom = error.response.config;

    if (error.response?.status === 401 && !originalRequest.__retry && isRefreshTokenValid()) {
      originalRequest.__retry = true;

      const response = await refreshAccessToken();
      saveSessionData(response.data);
      return await makePrivateRequest(originalRequest).then((data) => {
        console.warn('Access token refreshed');
        return data;
      });
    } else {
      localStorage.removeItem('authData');
    }

    window.location.href = '/entrar';
    return Promise.reject(error);
  }
);
