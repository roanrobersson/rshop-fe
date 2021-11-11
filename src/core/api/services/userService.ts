import qs from 'qs';
import { makePrivateRequest, request } from 'core/api/request';
import { AxiosPromise } from 'axios';
import { LoginFormData, RegisterFormData } from 'modules/common/auth/types';

export const login = (data: LoginFormData): AxiosPromise => {
  // payload username need to be in lowercase!
  const payload = qs.stringify({
    username: data.email,
    password: data.password,
    grant_type: 'password',
  });

  return request({ url: '/oauth/token', data: payload, method: 'POST' });
};

export const recoveryAccount = (userName: string): AxiosPromise => {
  // payload username need to be in lowercase!
  const payload = qs.stringify({ username: userName });

  return request({ url: '/mudar/esse/caminho/aqui', data: payload, method: 'POST' });
};

export const register = (data: RegisterFormData): AxiosPromise => {
  const payload = qs.stringify({ ...data });

  return request({ url: '/user', data: payload, method: 'POST' });
};

export const userData = (): AxiosPromise => {
  return makePrivateRequest({ url: '/users/3', method: 'GET' });
};
