import { useEffect } from 'react';
import { Role } from 'core/lib/types';
import useCurrentUser from 'modules/common/auth/hooks/useCurrentUser';
import { useLocation, useNavigate } from 'react-router-dom';

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
      navigate('/entrar', { state: { from: location } });
    } else if (authenticated && !isAllowedByRoles(allowedRoles)) {
      navigate('/nao-autorizado', { replace: true, state: { from: location } });
    }
  }, [authenticated, allowedRoles, navigate, isAllowedByRoles, location]);

  return children;
};

export default RequireAuth;
