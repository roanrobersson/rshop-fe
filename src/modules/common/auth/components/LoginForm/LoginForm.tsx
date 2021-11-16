import { Button, Typography } from '@mui/material';
import { Link, PasswordInput, TextInput } from 'core/components';
import { Control } from 'react-hook-form';
import BaseAuthCard from 'modules/common/auth/components/BaseAuthCard';
import { LoginFormData } from 'modules/common/auth/types';
import { AUTH_REGISTER } from 'core/configs/routeKeys';

type LoginFormProps = {
  control: Control<LoginFormData>;
  isLoading: boolean;
  loginError: string | null;
  onRecoveryButtonClick: () => void;
  onSubmit: () => void;
};

const LoginForm = ({
  control,
  isLoading,
  loginError,
  onRecoveryButtonClick,
  onSubmit,
}: LoginFormProps): JSX.Element => {
  const registerLink = (
    <Typography variant='body1' sx={{ textAlign: 'center' }}>
      Não tem cadastro? <Link href={AUTH_REGISTER}>CADASTRAR</Link>
    </Typography>
  );

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <BaseAuthCard
        title={'Entrar'}
        isLoading={isLoading}
        submitButtonText={'Logar'}
        children2={registerLink}
        onSubmitClick={() => onSubmit()}
      >
        <TextInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Email'
          maxLength={50}
          name='loginEmail'
          placeholder={'exemplo@gmail.com'}
          sx={{ display: 'block', mb: 2 }}
        />

        <PasswordInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Senha'
          name='loginPassword'
          sx={{ mb: 2 }}
        />

        <Button sx={{ mb: 16 }} onClick={() => onRecoveryButtonClick()}>
          Esqueci a senha
        </Button>

        <Typography variant='h6' sx={{ textAlign: 'center', color: 'error.main' }}>
          {loginError}
        </Typography>
      </BaseAuthCard>
    </form>
  );
};

export default LoginForm;
