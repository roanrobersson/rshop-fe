import { useState, MouseEvent } from 'react';
import { IconButton, AppBar, Toolbar, Box, Button, Link } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useIsMobile from 'core/hooks/useIsMobile';
import HeaderLogo from './HeaderLogo';
import { BadgeIconButton } from 'core/components';
import { StyledLink, LinksWrapper, ButtonsWrapper } from './styled';
import useCurrentUser from 'modules/common/auth/hooks/useCurrentUser';
import { useLocation, useNavigate } from 'react-router-dom';
import UserMenu from '../user/components/UserMenu';
import { AUTH_LOGIN } from 'core/configs/routeKeys';

const Header = (): JSX.Element => {
  const isMobile = useIsMobile();
  const { authenticated, currentUser } = useCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState<HTMLElement | null>(null);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState<boolean>(false);

  const handleLoginClick = (ev: MouseEvent<HTMLElement>) => {
    navigate(AUTH_LOGIN, { state: { from: location } });
  };

  const handleAccountClick = (ev: MouseEvent<HTMLElement>) => {
    setUserMenuAnchorEl(ev.currentTarget);
    setUserMenuIsOpen(true);
  };

  const handleUserMenuClose = () => {
    setUserMenuIsOpen(false);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ position: 'static', boxShadow: 'none' }}>
          <Toolbar
            sx={{ minHeight: { md: 120 }, px: { md: 1, lg: 8 }, justifyContent: 'space-between' }}
          >
            <LinksWrapper color='inherit'>
              <StyledLink href='#' children='Lançamentos' />
              <StyledLink href='#' children='Sobrancelhas' />
              <StyledLink href='#' children='Cílios' />
              <StyledLink href='#' children='Higienização' />
              <StyledLink href='#' children='Cérum' />
              <StyledLink href='#' children='Maquiagem' />
            </LinksWrapper>

            <HeaderLogo href={'/'} isMobile={isMobile} />

            <ButtonsWrapper>
              <IconButton
                component={Link}
                href='#'
                color='inherit'
                sx={{ flexShrink: 0, mr: { xs: 1, lg: 2 } }}
              >
                <SearchIcon />
              </IconButton>

              {authenticated ? (
                <Button
                  size='large'
                  onClick={handleAccountClick}
                  color='inherit'
                  sx={{ flexShrink: 0, mr: 2 }}
                >
                  <AccountCircle sx={{ mr: 1 }} />
                  {currentUser?.firstName}
                </Button>
              ) : (
                <Button
                  size='large'
                  onClick={handleLoginClick}
                  color='inherit'
                  sx={{ flexShrink: 0, mr: 2 }}
                >
                  <AccountCircle sx={{ mr: 1 }} />
                  Entre ou cadastre-se
                </Button>
              )}

              <BadgeIconButton sx={{ mr: 2 }} value={150} onClick={() => {}} href={'#'}>
                <FavoriteIcon />
              </BadgeIconButton>

              <BadgeIconButton sx={{ mr: 2 }} onClick={() => {}} value={150}>
                <ShoppingCartIcon />
              </BadgeIconButton>
            </ButtonsWrapper>

            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton color='inherit' onClick={() => {}}>
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <UserMenu
        anchorEl={userMenuAnchorEl}
        isOpen={userMenuIsOpen}
        onClick={handleUserMenuClose}
        onClose={handleUserMenuClose}
      />
    </>
  );
};

export default Header;
