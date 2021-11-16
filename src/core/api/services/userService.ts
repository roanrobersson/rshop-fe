import qs from 'qs';
import { loginRequest, privateRequest, request } from 'core/api/request';
import { AxiosPromise } from 'axios';
import { LoginFormData, RegisterFormDataToSubmit } from 'modules/common/auth/types';

export const login = (data: LoginFormData): AxiosPromise => {
  // payload username need to be in lowercase!
  const payload = qs.stringify({
    username: data.loginEmail,
    password: data.loginPassword,
    grant_type: 'password',
  });

  return loginRequest({ url: '/oauth/token', data: payload, method: 'POST' });
};

export const recoveryAccount = (userName: string): AxiosPromise => {
  // payload username need to be in lowercase!
  const payload = qs.stringify({ username: userName });

  return request({ url: '/mudar/esse/caminho/aqui', data: payload, method: 'POST' });
};

export const register = (data: RegisterFormDataToSubmit): AxiosPromise => {
  return request({ url: '/users', data, method: 'POST' });
};

export const userData = (): AxiosPromise => {
  return privateRequest({ url: '/users/3', method: 'GET' });
};
