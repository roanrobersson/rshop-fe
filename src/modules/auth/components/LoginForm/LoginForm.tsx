import { Button, Card, Typography } from '@mui/material';
import { Link, PasswordInput, EmailInput } from 'core/components';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import useAuth from 'modules/auth/hooks/useAuth';
import { loginEmailRules, loginPasswordRules } from 'core/lib/inputValidations';
import { useNavigate, useLocation } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  const { makeLogin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from: Location };
  let from = state ? state.from.pathname : '/';

  const defaultFormValues: FormData = { email: '', password: '' };
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: defaultFormValues,
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    makeLogin(data.email, data.password);
    navigate(from, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ mt: 6, mb: 13, pt: 7, px: 6, pb: 5, width: 550 }}>
        <Typography variant='h3' sx={{ mb: 10, width: '100%', textAlign: 'center' }}>
          Entrar
        </Typography>

        <EmailInput
          control={control}
          disabled={loading}
          fullWidth
          label='Email'
          name='email'
          placeholder={'exemplo@gmail.com'}
          rules={loginEmailRules}
          sx={{ display: 'block', mb: 2 }}
        />

        <PasswordInput
          control={control}
          disabled={loading}
          fullWidth
          label='Senha'
          name='password'
          rules={loginPasswordRules}
          sx={{ mb: 2 }}
        />

        <Button sx={{ mb: 16 }}>Esqueci a senha</Button>

        <LoadingButton
          loading={loading}
          variant='contained'
          fullWidth
          size='large'
          type='submit'
          sx={{ height: 57, mb: 5 }}
        >
          Entrar
        </LoadingButton>

        <Typography variant='body1' sx={{ textAlign: 'center' }}>
          Não tem cadastro? <Link href='/cadastrar'>CADASTRAR</Link>
        </Typography>
      </Card>
    </form>
  );
};

export default LoginForm;
