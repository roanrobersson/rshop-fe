import { TextField, TextFieldProps } from '@mui/material';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { SPACE_CHAR } from 'core/lib/constants';
import { SyntheticEvent } from 'react';
import { InputValidationRules } from 'core/lib/types';

type EmailInputProps<T> = Omit<UseControllerProps<T>, 'rules'> &
  Omit<TextFieldProps, 'onChange' | 'onBlur'> & {
    onChange?: (e: SyntheticEvent) => void;
    onBlur?: (e: SyntheticEvent) => void;
    rules: InputValidationRules;
  };

const EmailInput = <T extends FieldValues>({
  control,
  helperText = SPACE_CHAR,
  label,
  name,
  defaultValue,
  onChange,
  onBlur,
  rules,
  ...props
}: EmailInputProps<T>): JSX.Element => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { ...rules, onChange, onBlur },
    defaultValue,
  });

  return (
    <TextField
      error={invalid}
      id='outlined-basic'
      inputRef={ref}
      helperText={error?.message || helperText}
      label={label}
      variant='outlined'
      sx={{ display: 'block', mb: 4 }}
      {...inputProps}
      {...props}
    />
  );
};

export default EmailInput;
