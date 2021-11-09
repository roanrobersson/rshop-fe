import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';
import { getAllowedRoles, getSessionData, isAuthenticated, isAllowedByRoles } from 'core/api/auth';
import { CurrentUser } from 'modules/common/auth/types';
import { Role } from 'core/lib/types';

type CurrentUserContextData = {
  authenticated: boolean;
  currentUser: CurrentUser | null;
  setCurrentUser: Dispatch<SetStateAction<CurrentUser | null>>;
  isAllowedByRoles: (roles?: Role[]) => boolean;
  roles: Role[];
};

type CurrentUserProviderProps = {
  children: React.ReactNode;
};

export const extractAndNormalizeCurrentUser = (data: any): CurrentUser | null => {
  if (!data) return null;
  const { userId, userFirstName, userLastName } = data;
  return { id: userId, firstName: userFirstName, lastName: userLastName };
};

export const CurrentUserContext = createContext<CurrentUserContextData>(
  {} as CurrentUserContextData
);

const CurrentUserProvider = ({ children }: CurrentUserProviderProps): JSX.Element => {
  const [authenticated, setAuthenticated] = useState<boolean>(isAuthenticated());
  const [roles, setRoles] = useState<Role[]>(getAllowedRoles());
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(
    extractAndNormalizeCurrentUser(getSessionData())
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

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        authenticated,
        roles,
        isAllowedByRoles,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
