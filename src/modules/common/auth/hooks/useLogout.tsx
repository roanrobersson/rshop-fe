import { useContext } from 'react';
import { CurrentUserContext } from 'modules/common/auth/providers/CurrentUserProvider';

type useLogoutReturn = () => void;

const useLogout = (): useLogoutReturn => {
  const context = useContext(CurrentUserContext);

  const makeLogout = (): void => {
    localStorage.removeItem('authData');
    context.setCurrentUser(null);
  };

  return makeLogout;
};

export default useLogout;
