import { useContext, useState } from 'react';
import { LoginFormData } from 'modules/common/auth/types';
import { Control, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { login } from 'core/api/services/userService';
import { saveSessionData } from 'core/api/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CurrentUserContext,
  extractAndNormalizeCurrentUser,
} from 'modules/common/auth/providers/CurrentUserProvider';

type useLoginReturn = {
  isLoading: boolean;
  handleLoginSubmit: UseFormHandleSubmit<LoginFormData>;
  loginFormControl: Control<LoginFormData>;
};

const useLogin = (): useLoginReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const context = useContext(CurrentUserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const defaultFormValues: LoginFormData = { email: '', password: '' };
  const { handleSubmit: handleLoginSubmit, control: loginFormControl } = useForm<LoginFormData>({
    defaultValues: defaultFormValues,
    mode: 'onChange',
  });

  // TODO : Refactor to cover all auth routes in previousPath
  const from = () => {
    const previousPath = location.state?.from?.pathname;
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
        console.log(error);
      })
      .then(() => setIsLoading(false));
  };

  return { isLoading, handleLoginSubmit: () => handleLoginSubmit(onLoginSubmit), loginFormControl };
};

export default useLogin;
