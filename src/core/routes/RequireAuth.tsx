import { useEffect } from 'react';
import { Role } from 'core/lib/types';
import useCurrentUser from 'modules/common/auth/hooks/useCurrentUser';
import { useLocation, useNavigate } from 'react-router-dom';
import { AUTH_LOGIN, UNAUTHORIZED } from 'core/configs/routeKeys';

type PrivateProps = {
  allowedRoles?: Role[];
  children: JSX.Element;
};

const RequireAuth = ({ allowedRoles = [], children }: PrivateProps): JSX.Element => {
  const navigate = useNavigate();
  const { authenticated, isAllowedByRoles } = useCurrentUser();
  const location = useLocation();

  useEffect(() => {
    if (!authenticated) {
      navigate(AUTH_LOGIN, { state: { from: location } });
    } else if (authenticated && !isAllowedByRoles(allowedRoles)) {
      navigate(UNAUTHORIZED, { replace: true, state: { from: location } });
    }
  }, [authenticated, allowedRoles, navigate, isAllowedByRoles, location]);

  return children;
};

export default RequireAuth;
