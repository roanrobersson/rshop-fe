import { useContext } from 'react';
import { CurrentUserContext } from 'modules/common/auth/providers/CurrentUserProvider';
import { clearSessionData } from 'core/api/auth';

type useLogoutReturn = () => void;

const useLogout = (): useLogoutReturn => {
  const context = useContext(CurrentUserContext);

  const makeLogout = (): void => {
    clearSessionData();
    context.setCurrentUser(null);
  };

  return makeLogout;
};

export default useLogout;
