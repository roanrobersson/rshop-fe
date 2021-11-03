import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import useAuth from 'modules/auth/hooks/useAuth';

const Client = (): JSX.Element => {
  const { makeLogout, authenticated } = useAuth();

  const handleLogout = () => {
    makeLogout();
  };

  return (
    <Container maxWidth='xl'>
      {authenticated && <button onClick={handleLogout}>Sair</button>}
      <Outlet />
    </Container>
  );
};

export default Client;
