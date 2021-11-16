import Joi from 'joi';
import {
  loginEmail,
  loginPassword,
  email,
  firstName,
  lastName,
  passwordConfirmation,
  password,
} from 'core/lib/validation';

export const loginValidationSchema = Joi.object({
  loginEmail,
  loginPassword,
});

export const registerValidationSchema = Joi.object({
  email,
  firstName,
  lastName,
  password,
  passwordConfirmation,
});

export const recoveryAccountValidationSchema = Joi.object({
  loginEmail,
});
