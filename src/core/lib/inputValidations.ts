import { InputValidationRules } from './types';

const requiredMessage = 'Preencha esse dado';

export const loginPasswordRules: InputValidationRules = {
  required: {
    value: true,
    message: requiredMessage,
  },
};

export const loginEmailRules: InputValidationRules = {
  required: {
    value: true,
    message: requiredMessage,
  },
};

export const passwordRules: InputValidationRules = {
  required: {
    value: true,
    message: requiredMessage,
  },
};

export const emailRules: InputValidationRules = {
  required: {
    value: true,
    message: requiredMessage,
  },
};
