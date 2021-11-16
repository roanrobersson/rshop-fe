import { TextField, TextFieldProps } from '@mui/material';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { SPACE_CHAR } from 'core/lib/constants';
import { SyntheticEvent } from 'react';

type TextInputProps<T> = Omit<UseControllerProps<T>, 'rules'> &
  Omit<TextFieldProps, 'onChange' | 'onBlur'> & {
    onChange?: (e: SyntheticEvent) => void;
    onBlur?: (e: SyntheticEvent) => void;
    maxLength?: number;
  };

const TextInput = <T extends FieldValues>({
  control,
  helperText = SPACE_CHAR,
  label,
  name,
  defaultValue,
  onChange,
  onBlur,
  maxLength = 127,
  ...props
}: TextInputProps<T>): JSX.Element => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { onChange, onBlur },
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
      inputProps={{ maxLength: maxLength }}
      {...inputProps}
      {...props}
    />
  );
};

export default TextInput;
