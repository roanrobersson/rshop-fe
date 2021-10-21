import { IconButton, AppBar, Toolbar, Box, Button, Link } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useIsMobile from 'core/hooks/useIsMobile';
import MainNavbarLogo from './MainNavbarLogo';
import { BadgeIconButton } from 'core/components';
import { StyledLink, LinksWrapper, ButtonsWrapper } from './styled';

const MainNavbar = () => {
  const isMobile = useIsMobile();

  return (
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

          <MainNavbarLogo href={'#'} isMobile={isMobile} />

          <ButtonsWrapper>
            <IconButton
              component={Link}
              href='#'
              size='large'
              color='inherit'
              sx={{ flexShrink: 0, mr: { xs: 1, lg: 2 } }}
            >
              <SearchIcon fontSize='large' />
            </IconButton>

            <Button size='large' onClick={() => {}} color='inherit' sx={{ flexShrink: 0, mr: 2 }}>
              <AccountCircle fontSize='large' sx={{ mr: 1 }} />
              Entre ou cadastre-se
            </Button>

            <BadgeIconButton size='large' sx={{ mr: 2 }} value={150} onClick={() => {}} href={'#'}>
              <FavoriteIcon />
            </BadgeIconButton>

            <BadgeIconButton size='large' sx={{ mr: 2 }} onClick={() => {}} value={150}>
              <ShoppingCartIcon />
            </BadgeIconButton>
          </ButtonsWrapper>

          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton color='inherit' onClick={() => {}} size='large'>
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainNavbar;
