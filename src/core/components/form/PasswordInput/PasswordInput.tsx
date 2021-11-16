import { useState, SyntheticEvent } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { SPACE_CHAR } from 'core/lib/constants';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  FormControlProps,
} from '@mui/material';

type PasswordInputProps<T> = Omit<UseControllerProps<T>, 'rules'> &
  Omit<FormControlProps, 'onChange' | 'onBlur'> & {
    helperText?: string;
    label: string;
    onChange?: (e: SyntheticEvent) => void;
    onBlur?: (e: SyntheticEvent) => void;
    maxLength?: number;
  };

const PasswordInput = <T extends FieldValues>({
  control,
  helperText = SPACE_CHAR,
  label,
  name,
  defaultValue,
  onChange,
  onBlur,
  maxLength = 50,
  ...props
}: PasswordInputProps<T>): JSX.Element => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { onChange, onBlur },
    defaultValue,
  });
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisibilityToggle = () => {
    setVisible(!visible);
  };

  return (
    <FormControl error={invalid} variant='outlined' {...props}>
      <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
      <OutlinedInput
        inputRef={ref}
        id='outlined-adornment-password'
        label={label}
        type={visible ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={handleVisibilityToggle} edge='end'>
              {visible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        inputProps={{ maxLength: maxLength }}
        {...inputProps}
      />
      <FormHelperText id='outlined-adornment-password-text'>
        {error?.message || helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default PasswordInput;
