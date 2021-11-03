import { TextField, TextFieldProps } from '@mui/material';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { SPACE_CHAR } from 'core/lib/constants';

type EmailInputProps<T> = UseControllerProps<T> & TextFieldProps & {};

const EmailInput = <T extends FieldValues>({
  fullWidth,
  helperText = SPACE_CHAR,
  label,
  ...props
}: EmailInputProps<T>): JSX.Element => {
  const { field } = useController(props);

  return (
    <TextField
      fullWidth
      id='outlined-basic'
      label={label}
      variant='outlined'
      sx={{ display: 'block', mb: 4 }}
      helperText={helperText}
      {...field}
      {...props}
    />
  );
};

export default EmailInput;
