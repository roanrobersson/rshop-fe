import { PasswordInput, EmailInput } from 'core/components';
import { Control } from 'react-hook-form';
import BaseAuthCard from 'modules/common/auth/components/BaseAuthCard';
import { emailRules, passwordRules } from 'core/lib/inputValidations';
import { RegisterFormData } from 'modules/common/auth/types';

type RegisterFormProps = {
  control: Control<RegisterFormData>;
  isLoading: boolean;
  onSubmit: () => void;
  onCancelClick: () => void;
  registerError: string | null;
};

const RegisterForm = ({
  control,
  isLoading,
  registerError,
  onSubmit,
  onCancelClick,
}: RegisterFormProps) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <BaseAuthCard
        cancelButtonText={'Cancelar'}
        isLoading={isLoading}
        submitButtonText={'Cadastrar'}
        title={'Cadastrar'}
        onSubmitClick={() => onSubmit()}
        onCancelClick={onCancelClick}
      >
        <EmailInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Nome'
          name='firstName'
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
