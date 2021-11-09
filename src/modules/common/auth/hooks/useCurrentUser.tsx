import { useContext } from 'react';
import { CurrentUserContext } from 'modules/common/auth/providers/CurrentUserProvider';
import { CurrentUser } from 'modules/common/auth/types';
import { Role } from 'core/lib/types';

type useCurrentUserReturn = {
  authenticated: boolean;
  currentUser: CurrentUser | null;
  isAllowedByRoles: (roles?: Role[]) => boolean;
  roles: Role[];
};

const useCurrentUser = (): useCurrentUserReturn => {
  const context = useContext(CurrentUserContext);

  return context;
};

export default useCurrentUser;
