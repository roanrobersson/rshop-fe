import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClientMainNavbar from 'modules/client/MainNavbar';
import AdminMainNavbar from 'modules/admin/MainNavbar';
import ClientFooter from 'modules/client/Footer';
import AuthProvider from 'modules/auth/providers/AuthProvider';
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
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Client />}>
            <Route path={'/'} element={<ClientHome />} />
            <Route path={'pesquisa'} element={<ClientSearch />} />
            <Route path={'produtos'} element={<ClientProduct />} />
            <Route path={'checkout'} element={<ClientCheckout />} />
            <Route path={'conta'} element={<ClientAccount />} />
          </Route>

          <Route path={'admin'} element={<Navigate to={'dashboard'} />} />
          <Route path={'admin'} element={<Admin />}>
            <Route path={'dashboard'} element={<AdminDashboard />} />
            <Route path={'produtos'} element={<AdminProduct />} />
            <Route path={'categorias'} element={<AdminCategory />} />
            <Route path={'usuarios'} element={<AdminUser />} />
          </Route>

          <Route path={'/'} element={<Auth />}>
            <Route path={'entrar'} element={<Login />} />
            <Route path={'cadastrar'} element={<Register />} />
          </Route>

          <Route path={'404'} element={<NotFound />} />
          <Route path={'*'} element={<Navigate to={'404'} />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
};
export default Router;
