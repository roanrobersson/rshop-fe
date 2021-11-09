import { AppBar, Toolbar, Box, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useIsMobile from 'core/hooks/useIsMobile';
import HeaderLogo from './HeaderLogo';
import useCurrentUser from 'modules/common/auth/hooks/useCurrentUser';

const Header = (): JSX.Element => {
  const isMobile = useIsMobile();
  const { authenticated, currentUser } = useCurrentUser();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: 'static' }}>
        <Toolbar
          sx={{ minHeight: { md: 120 }, px: { md: 1, lg: 8 }, justifyContent: 'space-between' }}
        >
          <HeaderLogo href={'/admin'} isMobile={isMobile} />

          {authenticated ? (
            <Button size='large' onClick={() => {}} color='inherit'>
              <AccountCircle sx={{ mr: 1 }} />
              {currentUser?.firstName}
            </Button>
          ) : (
            <Button size='large' onClick={() => {}} color='inherit'>
              <AccountCircle sx={{ mr: 1 }} />
              Entre ou cadastre-se
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
