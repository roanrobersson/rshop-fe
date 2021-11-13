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

  return request({
    url: '/oauth/token',
    data: payload,
    method: 'POST',
    __isTryRefreshToken: true,
  });
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const originalRequest: AxiosRequestConfigCustom = err.response.config;

    if (err.response?.status === 401 && !isRefreshTokenValid()) {
      window.dirtLogout = true;
      return Promise.reject(err);
    }

    if (
      err.response?.status === 401 &&
      !originalRequest.__isRetry &&
      !originalRequest.__isTryRefreshToken
    ) {
      originalRequest.__isRetry = true;

      try {
        const response = await refreshAccessToken();
        saveSessionData(response.data);
        console.warn('Access token refreshed');
        return makePrivateRequest(originalRequest);
      } catch (_error) {
        window.dirtLogout = true;
        console.error('Access token expirated');
        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  }
);
