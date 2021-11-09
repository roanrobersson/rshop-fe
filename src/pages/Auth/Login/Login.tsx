import { useState } from 'react';
import LoginForm from 'modules/common/auth/components/LoginForm';
import { Box } from '@mui/system';
import RecoveryAccountDialog from 'modules/common/auth/components/RecoveryAccountDialog';
import useRecoveryAccount from 'modules/common/auth/hooks/useRecoveryAccount';
import useLogin from 'modules/common/auth/hooks/useLogin';
import {
  DialogOnCloseFunction,
  LoginFormData,
  RecoveryAccountFormData,
} from 'modules/common/auth/types';

const Login = (): JSX.Element => {
  const [recoveryAccountDialogIsOpen, setRecoveryAccountDialogIsOpen] = useState<boolean>(false);
  const { isLoading: loginIsLoading, loginError, handleLoginSubmit, loginFormControl } = useLogin();
  const {
    isLoading: recoveryAccountIsLoading,
    handleRecoveryAccountSubmit,
    recoveryAccountFormControl,
  } = useRecoveryAccount();

  const handleRecoveryButtonClick = () => {
    setRecoveryAccountDialogIsOpen(true);
  };

  const handleRecoveryAccountDialogClose: DialogOnCloseFunction = (e, reason): void => {
    setRecoveryAccountDialogIsOpen(false);
  };

  const onRecoveryAccountSubmit = (data: RecoveryAccountFormData) => {};

  const onLoginSubmit = (data: LoginFormData) => {};

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <LoginForm
          control={loginFormControl}
          isLoading={loginIsLoading}
          loginError={loginError}
          onRecoveryButtonClick={handleRecoveryButtonClick}
          onSubmit={handleLoginSubmit(onLoginSubmit)}
        />
      </Box>

      <RecoveryAccountDialog
        control={recoveryAccountFormControl}
        isLoading={recoveryAccountIsLoading}
        isOpen={recoveryAccountDialogIsOpen}
        onClose={handleRecoveryAccountDialogClose}
        onSubmit={handleRecoveryAccountSubmit(onRecoveryAccountSubmit)}
      />
    </>
  );
};

export default Login;
