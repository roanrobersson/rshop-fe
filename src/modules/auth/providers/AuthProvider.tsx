import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { login } from 'core/api/services/userService';
import {
  getAllowedRoles,
  getSessionData,
  isAuthenticated,
  saveSessionData,
  isAllowedByRoles,
} from 'core/api/auth';
import { CurrentUser } from '../types';
import { Role } from 'core/lib/types';

type AuthContextData = {
  authenticated: boolean;
  currentUser: CurrentUser | null;
  isAllowedByRoles: (roles?: Role[]) => boolean;
  loading: boolean;
  makeLogin: (userName: string, password: string) => void;
  makeLogout: () => void;
  roles: Role[];
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const extranctAndNormalizeCurrentUser = (data: any): CurrentUser | null => {
  if (!data) return null;
  const { userId, userFirstName, userLastName } = data;
  return { id: userId, firstName: userFirstName, lastName: userLastName };
};

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState<boolean>(isAuthenticated());
  const [roles, setRoles] = useState<Role[]>(getAllowedRoles());
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(
    extranctAndNormalizeCurrentUser(getSessionData())
  );

  useEffect(() => {
    if (currentUser) {
      setAuthenticated(true);
      setRoles(getAllowedRoles());
    } else {
      setAuthenticated(false);
      setRoles([]);
    }
  }, [currentUser]);

  const makeLogin = (userName: string, password: string): void => {
    setLoading(true);

    login(userName, password)
      .then((response) => {
        try {
          saveSessionData(response.data);
          setCurrentUser(extranctAndNormalizeCurrentUser(response.data));
        } catch (error) {
          Promise.reject(error);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => setLoading(false));
  };

  const makeLogout = (): void => {
    localStorage.removeItem('authData');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        makeLogin,
        loading,
        makeLogout,
        currentUser,
        authenticated,
        roles,
        isAllowedByRoles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
