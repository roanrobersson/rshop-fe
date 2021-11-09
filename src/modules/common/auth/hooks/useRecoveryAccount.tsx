import { Control, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { RecoveryAccountFormData } from 'modules/common/auth/types';

type useRecoveryAccountReturn = {
  handleRecoveryAccountSubmit: UseFormHandleSubmit<RecoveryAccountFormData>;
  recoveryAccountFormControl: Control<RecoveryAccountFormData>;
};

const useRecoveryAccount = (): useRecoveryAccountReturn => {
  const defaultFormValues: RecoveryAccountFormData = { email: '' };
  const { handleSubmit: handleRecoveryAccountSubmit, control: recoveryAccountFormControl } =
    useForm<RecoveryAccountFormData>({
      defaultValues: defaultFormValues,
      mode: 'onChange',
    });

  return { handleRecoveryAccountSubmit, recoveryAccountFormControl };
};

export default useRecoveryAccount;
