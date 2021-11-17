import { useState, SyntheticEvent, FocusEventHandler } from 'react';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { SPACE_CHAR } from 'core/lib/constants';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PasswordChecklistPopper, { PasswordChecklistItem } from './PasswordChecklistPopper';
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
    onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    maxLength?: number;
    hasPopper?: boolean;
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
  hasPopper = false,
  ...props
}: PasswordInputProps<T>): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(null);
  const isOpen = hasPopper && Boolean(anchorEl);
  const [visible, setVisible] = useState<boolean>(false);

  const handleFocus = (e: SyntheticEvent): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleBlur = (e: SyntheticEvent): void => {
    setAnchorEl(null);
  };

  const handleVisibilityToggle = () => {
    setVisible(!visible);
  };

  const {
    field: { ref, value, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules: { onChange, onBlur: handleBlur },
    defaultValue,
  });

  const isFullfied = (type: string): boolean => {
    return error?.types?.[type] || !value ? false : true;
  };

  const message = (!isOpen && error?.message) || helperText;

  const checklistItems: PasswordChecklistItem[] = [
    {
      text: 'No mínimo 8 caracteres',
      fullfied: isFullfied('string.min'),
    },
    { text: 'No mínimo 1 número', fullfied: isFullfied('string.pattern.minDigits') },
    {
      text: 'No mínimo 1 letra maiúscula',
      fullfied: isFullfied('string.pattern.minUppercase'),
    },
    {
      text: 'No mínimo 1 letra minúscula',
      fullfied: isFullfied('string.pattern.minLowercase'),
    },
    {
      text: 'No mínimo 1 caractere especial',
      fullfied: isFullfied('string.pattern.minSpecialCharacters'),
    },
  ];

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
        inputProps={{ maxLength }}
        onFocus={handleFocus}
        {...inputProps}
      />

      <FormHelperText id='outlined-adornment-password-text'>{message}</FormHelperText>

      {hasPopper && (
        <PasswordChecklistPopper isOpen={isOpen} anchorEl={anchorEl} items={checklistItems} />
      )}
    </FormControl>
  );
};

export default PasswordInput;
