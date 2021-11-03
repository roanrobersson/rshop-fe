import { ReactNode } from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';

type LinkProps = {
  children: ReactNode;
  external?: boolean;
  href: string;
  color?: string;
};

const Link = ({ children, external = false, href, color = 'inherit' }: LinkProps): JSX.Element => (
  <>
    {external ? (
      <MuiLink href={href} color={color}>
        {children}
      </MuiLink>
    ) : (
      <ReactRouterLink to={href} color={color}>
        {children}
      </ReactRouterLink>
    )}
  </>
);

export default Link;
