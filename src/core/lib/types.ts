import { RegisterOptions } from 'react-hook-form';

export type Role = 'ROLE_CLIENT' | 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type InputValidationRules = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled' | 'onChange' | 'onBlur'
>;
