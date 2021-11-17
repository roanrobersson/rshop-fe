import { PasswordInput, TextInput } from 'core/components';
import { Control } from 'react-hook-form';
import BaseAuthCard from 'modules/common/auth/components/BaseAuthCard';
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
        <TextInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Nome'
          maxLength={50}
          name='firstName'
          sx={{ display: 'block', mb: 2 }}
        />

        <TextInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Sobrenome'
          maxLength={50}
          name='lastName'
          sx={{ display: 'block', mb: 2 }}
        />

        <TextInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Email'
          maxLength={50}
          name='email'
          placeholder={'exemplo@gmail.com'}
          sx={{ display: 'block', mb: 2 }}
        />

        <PasswordInput
          control={control}
          disabled={isLoading}
          fullWidth
          hasPopper={true}
          label='Senha'
          name='password'
          sx={{ mb: 2 }}
        />

        <PasswordInput
          control={control}
          disabled={isLoading}
          fullWidth
          label='Repita a senha'
          name='passwordConfirmation'
          sx={{ mb: 2 }}
        />
      </BaseAuthCard>
    </form>
  );
};

export default RegisterForm;
