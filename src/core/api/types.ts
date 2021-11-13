import { AxiosRequestConfig } from 'axios';
import { Role } from 'core/lib/types';

declare global {
  interface Window {
    dirtLogout: boolean;
  }
}

export type LoginData = {
  username: string;
  password: string;
};

export type SessionData = {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
};

export type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export type RefreshToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export type SimpleCurrentUser = {
  id: number;
  firstName: string;
  lastName: string;
};

export type AxiosRequestConfigCustom = AxiosRequestConfig & {
  __isRetry?: boolean;
  __isTryRefreshToken?: boolean;
};
