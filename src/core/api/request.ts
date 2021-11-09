import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { API_URL } from 'core/configs/env';
//import { getSessionData } from 'core/api/auth';

export const request = (params: AxiosRequestConfig): AxiosPromise => {
  return axios({
    ...params,
    baseURL: API_URL,
  });
};

// export const makePrivateRequest = (params: AxiosRequestConfig): AxiosPromise => {
//   const sessionData = getSessionData();

//   const headers = {
//     Authorization: `Bearer ${sessionData.access_token}`,
//   };

//   return request({ ...params, headers });
// };
