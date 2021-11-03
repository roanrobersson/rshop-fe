import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET } from 'core/configs/env';
import { request } from 'core/api/request';
import { AxiosPromise } from 'axios';

export const login = (userName: string, password: string): AxiosPromise => {
  const token = `${CLIENT_ID}:${CLIENT_SECRET}`;

  const headers = {
    Authorization: `Basic ${window.btoa(token)}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  // payload username need to be in lowercase
  const payload = qs.stringify({ username: userName, password, grant_type: 'password' });

  return request({ url: '/oauth/token', data: payload, method: 'POST', headers });
};
