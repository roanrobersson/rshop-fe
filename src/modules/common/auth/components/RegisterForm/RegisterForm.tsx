import { PasswordInput, EmailInput } from 'core/components';
import { useForm } from 'react-hook-form';
import BaseAuthCard from 'modules/common/auth/components/BaseAuthCard';
import { emailRules, passwordRules } from 'core/lib/inputValidations';
import { useNavigate } from 'react-router-dom';

type FormData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const isLoading = false; /////////////////////////////////////
  const navigate = useNavigate();

  const defaultFormValues: FormData = { name: '', lastName: '', email: '', password: '' };
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: defaultFormValues,
    mode: 'onChange',
  });

  const onSubmit = (data: FormData) => {
    navigate('/entrar');
  };

  const handleCancelClick = () => {
    navigate('/entrar');
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <BaseAuthCard
        cancelButtonText={'Cancelar'}
        onCancelClick={handleCancelClick}
        isLoading={isLoading}
        submitButtonText={'Cadastrar'}
        title={'Cadastrar'}
        onSubmitClick={() => handleSubmit(onSubmit)}
      >
        <EmailInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Nome'
          name='name'
          rules={emailRules}
          sx={{ display: 'block', mb: 2 }}
        />

        <EmailInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Sobrenome'
          name='lastName'
          rules={emailRules}
          sx={{ display: 'block', mb: 2 }}
        />

        <EmailInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Email'
          name='email'
          placeholder={'exemplo@gmail.com'}
          rules={emailRules}
          sx={{ display: 'block', mb: 2 }}
        />

        <PasswordInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Senha'
          name='password'
          rules={passwordRules}
          helperText='A sua senha deve contar pelo menos 8 caracteres e conter pelo menos um número'
          sx={{ mb: 2 }}
        />

        <PasswordInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Repita a senha'
          name='password'
          rules={passwordRules}
          sx={{ mb: 2 }}
        />
      </BaseAuthCard>
    </form>
  );
};

export default RegisterForm;
