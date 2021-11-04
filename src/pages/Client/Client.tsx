import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

const Client = (): JSX.Element => {
  return (
    <Container maxWidth='xl'>
      <Outlet />
    </Container>
  );
};

export default Client;
