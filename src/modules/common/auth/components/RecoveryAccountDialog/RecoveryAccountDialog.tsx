import BaseAuthCard from 'modules/common/auth/components/BaseAuthCard';
import { emailRules } from 'core/lib/inputValidations';
import { Control } from 'react-hook-form';
import { EmailInput } from 'core/components';
import { DialogOnCloseFunction, RecoveryAccountFormData } from 'modules/common/auth/types';
import { Typography, Dialog } from '@mui/material';

type RecoveryAccountDialogProps = {
  isOpen: boolean;
  isLoading: boolean;
  onClose: DialogOnCloseFunction;
  onSubmit: () => void;
  control: Control<RecoveryAccountFormData>;
};

const RecoveryAccountDialog = ({
  isLoading,
  isOpen,
  onClose,
  onSubmit,
  control,
}: RecoveryAccountDialogProps): JSX.Element => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        PaperProps={{ sx: { minWidth: 'unset', maxWidth: 'unset' } }}
      >
        <BaseAuthCard
          title={'Recuperação de conta'}
          isLoading={isLoading}
          onSubmitClick={() => onSubmit()}
          submitButtonText={'Enviar'}
          sx={{ width: 800 }}
        >
          <Typography sx={{ mb: 4 }}>Informe seu email de cadastro</Typography>

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
        </BaseAuthCard>
      </Dialog>
    </>
  );
};

export default RecoveryAccountDialog;
