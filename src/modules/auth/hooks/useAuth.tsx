import { useContext } from 'react';
import { AuthContext } from 'modules/auth/providers/AuthProvider';
import { CurrentUser } from '../types';

const useAuth = (): {
  makeLogin: (userName: string, password: string) => void;
  loading: boolean;
  makeLogout: () => void;
  currentUser: CurrentUser | null;
  authenticated: boolean;
} => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
