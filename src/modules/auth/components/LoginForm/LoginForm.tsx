import { Button, Card, Typography } from '@mui/material';
import { Link, PasswordInput, EmailInput } from 'core/components';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import useAuth from 'modules/auth/hooks/useAuth';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  const { makeLogin, loading } = useAuth();

  const defaultFormValues: FormData = { email: '', password: '' };
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: defaultFormValues,
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    makeLogin(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card sx={{ mt: 6, mb: 13, pt: 7, px: 6, pb: 5, width: 550 }}>
        <Typography variant='h3' sx={{ mb: 10, width: '100%', textAlign: 'center' }}>
          Entrar
        </Typography>

        <EmailInput
          control={control}
          name='email'
          fullWidth
          label='Email'
          sx={{ display: 'block', mb: 2 }}
        />

        <PasswordInput control={control} name='password' fullWidth label='Senha' sx={{ mb: 2 }} />

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
