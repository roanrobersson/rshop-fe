import { useContext, useState } from 'react';
import { LoginFormData } from 'modules/common/auth/types';
import { Control, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { login } from 'core/api/services/userService';
import { saveSessionData } from 'core/api/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useCurrentUser from './useCurrentUser';
import {
  CurrentUserContext,
  extractAndNormalizeCurrentUser,
} from 'modules/common/auth/providers/CurrentUserProvider';

type useLoginReturn = {
  isLoading: boolean;
  handleLoginSubmit: UseFormHandleSubmit<LoginFormData>;
  loginFormControl: Control<LoginFormData>;
  loginError: string | null;
};

const useLogin = (): useLoginReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const context = useContext(CurrentUserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAllowedByRoles } = useCurrentUser();
  const { handleSubmit: handleLoginSubmit, control: loginFormControl } = useForm<LoginFormData>({
    defaultValues: { email: '', password: '' },
    mode: 'onChange',
  });

  // TODO : Refactor to cover all auth routes in previousPath
  const from = () => {
    const previousPath = location.state?.from?.pathname;
    if (isAllowedByRoles(['ROLE_OPERATOR']) || isAllowedByRoles(['ROLE_ADMIN'])) {
      return '/admin';
    }
    if (previousPath === undefined || previousPath === '/entrar' || previousPath === '/cadastrar') {
      return '/';
    }
    return previousPath;
  };

  const onLoginSubmit = (data: LoginFormData): void => {
    setIsLoading(true);

    login(data.email, data.password)
      .then((response) => {
        try {
          saveSessionData(response.data);
          context.setCurrentUser(extractAndNormalizeCurrentUser(response.data));
          navigate(from(), { replace: true, state: { from: from() } });
        } catch (error) {
          Promise.reject(error);
        }
      })
      .catch((error) => {
        const errorStatus = error?.response?.status;
        if (errorStatus && errorStatus === 400) {
          setLoginError('Email ou senha inválidos');
        } else {
          setLoginError('Falha na comunicação com o servidor');
        }
      })
      .then(() => setIsLoading(false));
  };

  return {
    isLoading,
    loginError,
    handleLoginSubmit: () => handleLoginSubmit(onLoginSubmit),
    loginFormControl,
  };
};

export default useLogin;
