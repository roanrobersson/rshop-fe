import { Outlet } from 'react-router-dom';
import { Image } from 'core/components';
import authBackground from 'core/assets/svgs/auth_background.svg';
import { Box } from '@mui/material';

const Auth = (): JSX.Element => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', pt: 6, pb: 13 }}>
      <Image
        src={authBackground}
        sx={{ position: 'absolute', zIndex: -1, top: 0, width: '100%' }}
      />
      <Outlet />
    </Box>
  );
};

export default Auth;
