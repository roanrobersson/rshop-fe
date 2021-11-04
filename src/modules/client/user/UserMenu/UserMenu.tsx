import { MouseEventHandler, MouseEvent } from 'react';
import { Menu, MenuItem, Divider, Avatar, ListItemIcon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAuth from 'modules/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type UserMenuProps = {
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  disableScrollLock?: boolean;
  isOpen: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  onClose?: ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void) | undefined;
};

const UserMenu = ({
  anchorEl,
  disableScrollLock = false,
  isOpen,
  onClick,
  onClose,
}: UserMenuProps) => {
  const { makeLogout } = useAuth();
  const navigate = useNavigate();

  const handleMenuClick: MouseEventHandler<HTMLDivElement> = (
    ev: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (onClick) onClick(ev);
  };

  return (
    <>
      <Menu
        disableScrollLock={disableScrollLock}
        anchorEl={anchorEl}
        open={isOpen}
        onClick={handleMenuClick}
        onClose={onClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => navigate('conta')}>
          <Avatar /> Minha conta
        </MenuItem>

        <MenuItem onClick={() => {}}>
          <ListItemIcon>
            <ShoppingCartIcon fontSize='small' />
          </ListItemIcon>
          Compras
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => makeLogout()}>
          <ListItemIcon>
            <LogoutIcon fontSize='small' />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
