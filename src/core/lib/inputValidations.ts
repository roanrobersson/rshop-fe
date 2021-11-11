import { InputValidationRules } from './types';

const requiredMessage = 'Preencha esse dado';

export const loginPasswordRules: InputValidationRules = {
  validate: {
    required: (v) => v !== '' || requiredMessage,
  },
};

export const loginEmailRules: InputValidationRules = {
  validate: {
    required: (v) => v !== '' || requiredMessage,
    // positive: (v) => parseInt(v) > 0 || 'precisa ser positivo',
    // lessThanTen: (v) => parseInt(v) < 10 || 'presia ser menor que 10',
    // teste: (v) => /[A-Za-z]{3}/.test(v) || 'nao passou na regex',
  },
};

export const passwordRules: InputValidationRules = {
  validate: {
    required: (v) => v !== '' || requiredMessage,
  },
};

export const emailRules: InputValidationRules = {
  validate: {
    required: (v) => v !== '' || requiredMessage,
  },
};
