import { useState } from 'react';
import { Control, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { RecoveryAccountFormData } from 'modules/common/auth/types';
import { recoveryAccount } from 'core/api/services/userService';
import { joiResolver } from '@hookform/resolvers/joi';
import { recoveryAccountValidationSchema } from 'modules/common/auth/lib/validationSchemas';

type useRecoveryAccountReturn = {
  isLoading: boolean;
  handleRecoveryAccountSubmit: UseFormHandleSubmit<RecoveryAccountFormData>;
  recoveryAccountFormControl: Control<RecoveryAccountFormData>;
};

const useRecoveryAccount = (): useRecoveryAccountReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit: handleRecoveryAccountSubmit, control: recoveryAccountFormControl } =
    useForm<RecoveryAccountFormData>({
      defaultValues: { loginEmail: '' },
      mode: 'onChange',
      resolver: joiResolver(recoveryAccountValidationSchema),
    });

  const onRecoveryAccountSubmit = (data: RecoveryAccountFormData): void => {
    setIsLoading(true);

    recoveryAccount(data.loginEmail)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      })
      .then(() => setIsLoading(false));
  };

  return {
    isLoading,
    handleRecoveryAccountSubmit: () => handleRecoveryAccountSubmit(onRecoveryAccountSubmit),
    recoveryAccountFormControl,
  };
};

export default useRecoveryAccount;
