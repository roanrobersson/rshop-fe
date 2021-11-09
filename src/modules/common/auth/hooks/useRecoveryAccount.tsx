import { useState } from 'react';
import { Control, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { RecoveryAccountFormData } from 'modules/common/auth/types';
import { recoveryAccount } from 'core/api/services/userService';

type useRecoveryAccountReturn = {
  isLoading: boolean;
  handleRecoveryAccountSubmit: UseFormHandleSubmit<RecoveryAccountFormData>;
  recoveryAccountFormControl: Control<RecoveryAccountFormData>;
};

const useRecoveryAccount = (): useRecoveryAccountReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleSubmit: handleRecoveryAccountSubmit, control: recoveryAccountFormControl } =
    useForm<RecoveryAccountFormData>({
      defaultValues: { email: '' },
      mode: 'onChange',
    });

  const onRecoveryAccountSubmit = (data: RecoveryAccountFormData): void => {
    setIsLoading(true);

    recoveryAccount(data.email)
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
