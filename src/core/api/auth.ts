import jwtDecode from 'jwt-decode';
import { SessionData, AccessToken, Role } from './types';

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

export const isTokenValid = (): boolean => {
  const accessTokenDecoded: AccessToken | null = getAccessTokenDecoded();
  if (accessTokenDecoded === null) return false;
  return Date.now() <= accessTokenDecoded.exp * 1000;
};

export const isAuthenticated = (): boolean => {
  return isTokenValid();
};

export const isAllowedByRole = (routeRoles: Role[] = []): boolean => {
  if (routeRoles.length === 0) return true;
  const accessTokenDecoded: AccessToken | null = getAccessTokenDecoded();
  if (accessTokenDecoded === null) return false;

  const { authorities } = accessTokenDecoded;
  return routeRoles.some((role) => authorities?.includes(role));
};
