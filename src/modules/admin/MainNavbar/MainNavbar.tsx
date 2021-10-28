import { AppBar, Toolbar, Box, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useIsMobile from 'core/hooks/useIsMobile';
import MainNavbarLogo from './MainNavbarLogo';

const AdminNavbar = () => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: 'static' }}>
        <Toolbar
          sx={{ minHeight: { md: 120 }, px: { md: 1, lg: 8 }, justifyContent: 'space-between' }}
        >
          <MainNavbarLogo href={'/admin'} isMobile={isMobile} />

          <Button size='large' onClick={() => {}} color='inherit'>
            <AccountCircle sx={{ mr: 1 }} />
            Entre ou cadastre-se
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminNavbar;
