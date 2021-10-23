import { ReactElement, MouseEventHandler, cloneElement } from 'react';
import { IconButton, Badge, Link } from '@mui/material';
import { SxProps } from '@mui/system';

type BadgeIconButtonTypes = {
  children: ReactElement;
  disabled?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLSpanElement>;
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;
  value: number;
};

const BadgeIconButton = ({
  children,
  disabled,
  href,
  onClick,
  size,
  sx,
  value,
}: BadgeIconButtonTypes) => (
  <IconButton
    component={Link}
    disabled={disabled}
    href={href}
    size={size}
    color='inherit'
    sx={{ flexShrink: 0, ...sx }}
    onClick={onClick}
  >
    <Badge badgeContent={value} color='error' max={99}>
      {cloneElement(children, { fontSize: size })}
    </Badge>
  </IconButton>
);

export default BadgeIconButton;
