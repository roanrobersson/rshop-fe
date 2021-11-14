import { lazy } from 'react';

export const Client = lazy(() => import('pages/Client'));
export const ClientHome = lazy(() => import('pages/Client/Home'));
export const ClientSearch = lazy(() => import('pages/Client/Search'));
export const ClientProduct = lazy(() => import('pages/Client/Product'));
export const ClientAccount = lazy(() => import('pages/Client/Account'));
export const ClientCheckout = lazy(() => import('pages/Client/Checkout'));

export const Admin = lazy(() => import('pages/Admin'));
export const AdminDashboard = lazy(() => import('pages/Admin//Dashboard'));
export const AdminProduct = lazy(() => import('pages/Admin/Product'));
export const AdminCategory = lazy(() => import('pages/Admin/Category'));
export const AdminUser = lazy(() => import('pages/Admin/User'));

export const Auth = lazy(() => import('pages/Auth'));
export const Login = lazy(() => import('pages/Auth/Login'));
export const Register = lazy(() => import('pages/Auth/Register'));

export const NotFound = lazy(() => import('pages/NotFound'));
