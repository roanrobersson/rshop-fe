import { ReactElement } from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';

type LinkProps = {
  children: ReactElement;
  external?: boolean;
  href: string;
};

const Link = ({ children, external = false, href }: LinkProps) => {
  return (
    <>
      {external ? (
        <MuiLink href={href} color='inherit'>
          {children}
        </MuiLink>
      ) : (
        <ReactRouterLink to={href} color='inherit'>
          {children}
        </ReactRouterLink>
      )}
    </>
  );
};

export default Link;
