import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

const Admin = (): JSX.Element => {
  return (
    <Box sx={{ backgroundColor: '#F2F2F2', position: 'relative', height: '100vh' }}>
      <Outlet />
    </Box>
  );
};

export default Admin;
