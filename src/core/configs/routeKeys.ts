export const CLIENT_ROOT = `/`;
export const CLIENT_SEARCH = `${CLIENT_ROOT}pesquisa`;
export const CLIENT_HOME = `${CLIENT_ROOT}`;
export const CLIENT_PRODUCTS = `${CLIENT_ROOT}produtos`;
export const CLIENT_CHECKOUT = `${CLIENT_ROOT}checkout`;
export const CLIENT_ACCOUNT = `${CLIENT_ROOT}conta`;

export const ADMIN_ROOT = `/admin`;
export const ADMIN_DASHBOARD = `${ADMIN_ROOT}/dashboard`;
export const ADMIN_PRODUCTS = `${ADMIN_ROOT}/produtos`;
export const ADMIN_CATEGORIES = `${ADMIN_ROOT}/categorias`;
export const ADMIN_USERS = `${ADMIN_ROOT}/usuarios`;

export const AUTH_ROOT = `/`;
export const AUTH_LOGIN = `${AUTH_ROOT}entrar`;
export const AUTH_REGISTER = `${AUTH_ROOT}registrar`;

export const UNAUTHORIZED = '/nao-autorizado';
export const NOT_FOUND = `/404`;

const routeKeys = {
  CLIENT_ROOT,
  CLIENT_SEARCH,
  CLIENT_HOME,
  CLIENT_PRODUCTS,
  CLIENT_CHECKOUT,
  CLIENT_ACCOUNT,

  ADMIN_ROOT,
  ADMIN_DASHBOARD,
  ADMIN_PRODUCTS,
  ADMIN_CATEGORIES,
  ADMIN_USERS,

  AUTH_ROOT,
  AUTH_LOGIN,
  AUTH_REGISTER,

  UNAUTHORIZED,
  NOT_FOUND,
};

export default routeKeys;
