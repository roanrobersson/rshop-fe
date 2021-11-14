import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientMainNavbar from 'modules/client/Header';
import AdminMainNavbar from 'modules/admin/Header';
import ClientFooter from 'modules/client/Footer';
import CurrentUserProvider from 'modules/common/auth/providers/CurrentUserProvider';
import RequireAuth from './RequireAuth';
import Unauthorized from 'pages/Unauthorized';
import routeKeys from 'core/configs/routeKeys';
import {
  Client,
  Admin,
  NotFound,
  ClientSearch,
  ClientProduct,
  ClientCheckout,
  ClientAccount,
  ClientHome,
  AdminDashboard,
  AdminProduct,
  AdminCategory,
  AdminUser,
  Register,
  Login,
  Auth,
} from 'pages';
import Loading from 'core/components/Loading';

const Navbar = (): JSX.Element => {
  return (
    <Routes>
      <Route path={`${routeKeys.ADMIN_ROOT}/*`} element={<AdminMainNavbar />} />
      <Route path={'*'} element={<ClientMainNavbar />} />
    </Routes>
  );
};

const Footer = (): JSX.Element => {
  return (
    <Routes>
      <Route path={`${routeKeys.ADMIN_ROOT}/*`} element={null} />
      <Route path={'*'} element={<ClientFooter />} />
    </Routes>
  );
};

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={routeKeys.CLIENT_ROOT} element={<Client />}>
              <Route path={routeKeys.CLIENT_HOME} element={<ClientHome />} />
              <Route path={routeKeys.CLIENT_SEARCH} element={<ClientSearch />} />
              <Route path={routeKeys.CLIENT_PRODUCTS} element={<ClientProduct />} />
              <Route path={routeKeys.CLIENT_CHECKOUT} element={<ClientCheckout />} />
              <Route
                path={routeKeys.CLIENT_ACCOUNT}
                element={
                  <RequireAuth allowedRoles={['ROLE_CLIENT']}>
                    <ClientAccount />
                  </RequireAuth>
                }
              />
            </Route>

            <Route
              path={routeKeys.ADMIN_ROOT}
              element={<Navigate to={routeKeys.ADMIN_DASHBOARD} />}
            />
            <Route
              path={routeKeys.ADMIN_ROOT}
              element={
                <RequireAuth allowedRoles={['ROLE_OPERATOR']}>
                  <Admin />
                </RequireAuth>
              }
            >
              <Route path={routeKeys.ADMIN_DASHBOARD} element={<AdminDashboard />} />
              <Route path={routeKeys.ADMIN_PRODUCTS} element={<AdminProduct />} />
              <Route path={routeKeys.ADMIN_CATEGORIES} element={<AdminCategory />} />
              <Route
                path={routeKeys.ADMIN_USERS}
                element={
                  <RequireAuth allowedRoles={['ROLE_ADMIN']}>
                    <AdminUser />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path={routeKeys.AUTH_ROOT} element={<Auth />}>
              <Route path={routeKeys.AUTH_LOGIN} element={<Login />} />
              <Route path={routeKeys.AUTH_REGISTER} element={<Register />} />
            </Route>

            <Route path={routeKeys.UNAUTHORIZED} element={<Unauthorized />} />
            <Route path={routeKeys.NOT_FOUND} element={<NotFound />} />
            <Route path={'*'} element={<Navigate to={routeKeys.NOT_FOUND} />} />
          </Routes>
        </Suspense>
        <Footer />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};
export default Router;
