import jwtDecode from 'jwt-decode';
import { SessionData, AccessToken } from './types';
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

export const getAllowedRoles = (): Role[] => {
  const accessTokenDecoded: AccessToken | null = getAccessTokenDecoded();
  if (accessTokenDecoded === null) return [];
  const { authorities = [] } = accessTokenDecoded;
  return authorities;
};

export const isTokenValid = (): boolean => {
  const accessTokenDecoded: AccessToken | null = getAccessTokenDecoded();
  if (accessTokenDecoded === null) return false;
  return Date.now() <= accessTokenDecoded.exp * 1000;
};

export const isAuthenticated = (): boolean => {
  return isTokenValid();
};

export const isAllowedByRoles = (roles: Role[] = []): boolean => {
  const allowedRoles: Role[] = getAllowedRoles();
  return roles.some((role) => allowedRoles.includes(role));
};
