import { useEffect } from 'react';
import { Role } from 'core/lib/types';
import useAuth from 'modules/auth/hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

type PrivateProps = {
  allowedRoles?: Role[];
  children: JSX.Element;
};

const RequireAuth = ({ allowedRoles = [], children }: PrivateProps): JSX.Element => {
  const navigate = useNavigate();
  const { authenticated, isAllowedByRoles } = useAuth();
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
