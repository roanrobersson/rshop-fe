import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { SPACE_CHAR } from 'core/lib/constants';
import {
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  FormControlProps,
} from '@mui/material';

type PasswordInputProps<T> = UseControllerProps<T> &
  FormControlProps & {
    helperText?: string;
    label: string;
  };

const PasswordInput = <T extends FieldValues>({
  helperText = SPACE_CHAR,
  label,
  ...props
}: PasswordInputProps<T>): JSX.Element => {
  const { field } = useController(props);
  const [visible, setVisible] = useState<boolean>(false);

  const handleVisibilityToggle = () => {
    setVisible(!visible);
  };

  return (
    <FormControl variant='outlined' {...field} {...props}>
      <InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
      <OutlinedInput
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
      />
      <FormHelperText id='outlined-adornment-password-text'>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default PasswordInput;
