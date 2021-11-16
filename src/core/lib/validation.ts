import Joi from 'joi';
import {
  minDigits,
  minUppercase,
  minLowercase,
  minSpecialCharacters,
} from 'core/lib/validationConstraints';

const requiredFieldMessage = 'Campo obrigatório';

export const loginEmail = Joi.string()
  .email({ allowUnicode: false, minDomainSegments: 2, tlds: false })
  .required()
  .messages({
    'string.email': 'Email inválido',
    'string.empty': requiredFieldMessage,
    'any.required': requiredFieldMessage,
  });

export const loginPassword = Joi.string().min(6).max(50).required().messages({
  'string.min': 'A senha contém no mínimo {#limit} caracteres',
  'string.max': 'A senha contém no máximo {#limit} caracteres',
  'string.empty': requiredFieldMessage,
  'any.required': requiredFieldMessage,
});

export const email = Joi.string()
  .email({ allowUnicode: false, minDomainSegments: 2, tlds: false })
  .required()
  .messages({
    'string.email': 'Email inválido',
    'string.empty': requiredFieldMessage,
    'any.required': requiredFieldMessage,
  });

export const firstName = Joi.string().min(2).max(50).trim().required().messages({
  'string.alphanum': 'Caractere(s) inválido(s)',
  'string.min': 'Tamanho mínimo de {#limit} caracteres',
  'string.max': 'Tamanho máximo de {#limit} caracteres',
  'string.empty': requiredFieldMessage,
  'any.required': requiredFieldMessage,
});

export const lastName = Joi.string().min(2).max(50).trim().required().messages({
  'string.alphanum': 'Caractere(s) inválido(s)',
  'string.min': 'Tamanho mínimo de {#limit} caracteres',
  'string.max': 'Tamanho máximo de {#limit} caracteres',
  'string.empty': requiredFieldMessage,
  'any.required': requiredFieldMessage,
});

export const password = Joi.string()
  .custom(minDigits(1))
  .custom(minUppercase(1))
  .custom(minLowercase(1))
  .custom(minSpecialCharacters(1))
  .min(6)
  .max(50)
  .required()
  .messages({
    'string.pattern.minDigits': 'Deve conter no mínimo {#limit} número',
    'string.pattern.minUppercase': 'Deve conter no mínimo {#limit} letra maiúscula',
    'string.pattern.minLowercase': 'Deve conter no mínimo {#limit} letra minúscula',
    'string.pattern.minSpecialCharacters': 'Deve conter no mínimo {#limit} caractere especial',
    'string.min': 'Deve conter no mínimo {#limit} caracteres',
    'string.max': 'Deve conter no máximo {#limit} caracteres',
    'string.empty': requiredFieldMessage,
    'any.required': requiredFieldMessage,
  });

export const passwordConfirmation = Joi.any().equal(Joi.ref('password')).required().messages({
  'any.only': 'As senhas precisam ser iguais',
  'string.empty': requiredFieldMessage,
  'any.required': requiredFieldMessage,
});
