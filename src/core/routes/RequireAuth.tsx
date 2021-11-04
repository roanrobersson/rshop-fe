import { useEffect } from 'react';
import { Role } from 'core/lib/types';
import useAuth from 'modules/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

type PrivateProps = {
  allowedRoles?: Role[];
  children: JSX.Element;
};

const RequireAuth = ({ allowedRoles = [], children }: PrivateProps): JSX.Element => {
  const navigate = useNavigate();
  const { authenticated, isAllowedByRoles } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      navigate('/entrar');
    } else if (authenticated && !isAllowedByRoles(allowedRoles)) {
      navigate('/nao-autorizado');
    }
  }, [authenticated, allowedRoles, navigate, isAllowedByRoles]);

  return children;
};

export default RequireAuth;
