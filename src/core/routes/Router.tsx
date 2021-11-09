import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientMainNavbar from 'modules/client/Header';
import AdminMainNavbar from 'modules/admin/Header';
import ClientFooter from 'modules/client/Footer';
import CurrentUserProvider from 'modules/common/auth/providers/CurrentUserProvider';
import RequireAuth from './RequireAuth';
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
import Unauthorized from 'pages/Unauthorized';

const Navbar = (): JSX.Element => {
  return (
    <Routes>
      <Route path={'admin/*'} element={<AdminMainNavbar />} />
      <Route path={'*'} element={<ClientMainNavbar />} />
    </Routes>
  );
};

const Footer = (): JSX.Element => {
  return (
    <Routes>
      <Route path={'admin/*'} element={null} />
      <Route path={'*'} element={<ClientFooter />} />
    </Routes>
  );
};

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Client />}>
            <Route path={'/'} element={<ClientHome />} />
            <Route path={'pesquisa'} element={<ClientSearch />} />
            <Route path={'produtos'} element={<ClientProduct />} />
            <Route path={'checkout'} element={<ClientCheckout />} />
            <Route
              path={'conta'}
              element={
                <RequireAuth allowedRoles={['ROLE_CLIENT']}>
                  <ClientAccount />
                </RequireAuth>
              }
            />
          </Route>

          <Route path={'admin'} element={<Navigate to={'dashboard'} />} />
          <Route
            path={'admin'}
            element={
              <RequireAuth allowedRoles={['ROLE_OPERATOR']}>
                <Admin />
              </RequireAuth>
            }
          >
            <Route path={'dashboard'} element={<AdminDashboard />} />
            <Route path={'produtos'} element={<AdminProduct />} />
            <Route path={'categorias'} element={<AdminCategory />} />
            <Route
              path={'usuarios'}
              element={
                <RequireAuth allowedRoles={['ROLE_ADMIN']}>
                  <AdminUser />
                </RequireAuth>
              }
            />
          </Route>

          <Route path={'/'} element={<Auth />}>
            <Route path={'entrar'} element={<Login />} />
            <Route path={'cadastrar'} element={<Register />} />
          </Route>

          <Route path={'nao-autorizado'} element={<Unauthorized />} />
          <Route path={'404'} element={<NotFound />} />
          <Route path={'*'} element={<Navigate to={'404'} />} />
        </Routes>
        <Footer />
      </CurrentUserProvider>
    </BrowserRouter>
  );
};
export default Router;
