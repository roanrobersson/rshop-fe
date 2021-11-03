import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { login } from 'core/api/services/userService';
import { getSessionData, isAuthenticated, saveSessionData } from 'core/api/auth';
import { useNavigate } from 'react-router-dom';
import { CurrentUser } from '../types';

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthContextData = {
  makeLogin: (userName: string, password: string) => void;
  loading: boolean;
  makeLogout: () => void;
  currentUser: CurrentUser | null;
  authenticated: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const normalizeCurrentUserData = (data: any): CurrentUser => {
  const { userId, userFirstName, userLastName } = data;
  return { id: userId, firstName: userFirstName, lastName: userLastName };
};

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      const sessionData = getSessionData();
      setCurrentUser(normalizeCurrentUserData(sessionData));
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    setAuthenticated(currentUser ? true : false);
  }, [currentUser]);

  const makeLogin = (userName: string, password: string): void => {
    setLoading(true);

    login(userName, password)
      .then((response) => {
        try {
          saveSessionData(response.data);
          setCurrentUser(normalizeCurrentUserData(response.data));
          navigate('/');
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
    <AuthContext.Provider value={{ makeLogin, loading, makeLogout, currentUser, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
