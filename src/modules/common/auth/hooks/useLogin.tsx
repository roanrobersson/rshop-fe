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
import { joiResolver } from '@hookform/resolvers/joi';
import { loginValidationSchema } from 'modules/common/auth/lib/validationSchemas';

type useLoginReturn = {
  error: string | null;
  formControl: Control<LoginFormData>;
  handleSubmit: UseFormHandleSubmit<LoginFormData>;
  isLoading: boolean;
};

const useLogin = (): useLoginReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const context = useContext(CurrentUserContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAllowedByRoles } = useCurrentUser();
  const { handleSubmit, control: formControl } = useForm<LoginFormData>({
    defaultValues: { loginEmail: '', loginPassword: '' },
    mode: 'onChange',
    resolver: joiResolver(loginValidationSchema),
  });

  // TODO : Refactor to cover all auth routes in previousPath
  const from = () => {
    const previousPath = location.state?.from?.pathname;
    if (isAllowedByRoles(['ROLE_OPERATOR']) || isAllowedByRoles(['ROLE_ADMIN'])) {
      return '/admin';
    }
    if (
      previousPath === undefined ||
      previousPath === '/entrar' ||
      previousPath === '/cadastrar' ||
      previousPath === '/404'
    ) {
      return '/';
    }
    return previousPath;
  };

  const onSubmit = (data: LoginFormData): void => {
    setIsLoading(true);

    login(data)
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
          setError('Email ou senha inválidos');
        } else {
          setError('Falha na comunicação com o servidor');
        }
      })
      .then(() => setIsLoading(false));
  };

  return {
    isLoading,
    error,
    handleSubmit: () => handleSubmit(onSubmit),
    formControl,
  };
};

export default useLogin;
