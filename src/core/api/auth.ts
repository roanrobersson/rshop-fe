import jwtDecode from 'jwt-decode';
import { SessionData, AccessToken, RefreshToken } from './types';
import { Role } from 'core/lib/types';

export const saveSessionData = (sessionData: SessionData): void => {
  localStorage.setItem('authData', JSON.stringify(sessionData));
};

export const getSessionData = (): SessionData | null => {
  try {
    const sessionData = localStorage.getItem('authData');
    if (sessionData === null) return null;
    return JSON.parse(sessionData);
  } catch (error) {
    return null;
  }
};

export const getAccessTokenDecoded = (): AccessToken | null => {
  const sessionData: SessionData | null = getSessionData();
  if (sessionData === null) return null;
  try {
    return jwtDecode(sessionData.access_token);
  } catch (error) {
    return null;
  }
};

export const getRefreshTokenDecoded = (): AccessToken | null => {
  const sessionData: SessionData | null = getSessionData();
  if (sessionData === null) return null;
  try {
    return jwtDecode(sessionData.refresh_token);
  } catch (error) {
    return null;
  }
};

export const getAllowedRoles = (): Role[] => {
  const accessTokenDecoded: AccessToken | null = getAccessTokenDecoded();
  if (accessTokenDecoded === null) return [];
  const { authorities = [] } = accessTokenDecoded;
  return authorities;
};

export const isAccessTokenValid = (): boolean => {
  const accessTokenDecoded: AccessToken | null = getAccessTokenDecoded();
  if (accessTokenDecoded === null) return false;
  return Date.now() <= accessTokenDecoded.exp * 1000;
};

export const isRefreshTokenValid = (): boolean => {
  const refreshTokenDecoded: RefreshToken | null = getRefreshTokenDecoded();
  if (refreshTokenDecoded === null) return false;
  return Date.now() <= refreshTokenDecoded.exp * 1000;
};

export const isAuthenticated = (): boolean => {
  return isAccessTokenValid();
};

export const isAllowedByRoles = (roles: Role[] = []): boolean => {
  const allowedRoles: Role[] = getAllowedRoles();
  return roles.some((role) => allowedRoles.includes(role));
};
