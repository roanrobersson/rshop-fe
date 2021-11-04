import { useContext } from 'react';
import { AuthContext } from 'modules/auth/providers/AuthProvider';
import { CurrentUser } from '../types';
import { Role } from 'core/lib/types';

type useAuthReturn = {
  authenticated: boolean;
  currentUser: CurrentUser | null;
  isAllowedByRoles: (roles?: Role[]) => boolean;
  loading: boolean;
  makeLogin: (userName: string, password: string) => void;
  makeLogout: () => void;
  roles: Role[];
};

const useAuth = (): useAuthReturn => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
