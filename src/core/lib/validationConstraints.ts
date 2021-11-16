import { CustomHelpers } from 'joi';

export const minDigits = (limit: Number) => (value: any, helpers: CustomHelpers) => {
  if (!value.match(/\d/)) return helpers.error('string.pattern.minDigits', { limit });
  return value;
};

export const minUppercase = (limit: Number) => (value: any, helpers: CustomHelpers) => {
  if (!value.match(/[A-Z]/)) return helpers.error('string.pattern.minUppercase', { limit });
  return value;
};

export const minLowercase = (limit: Number) => (value: any, helpers: CustomHelpers) => {
  if (!value.match(/[a-z]/)) return helpers.error('string.pattern.minLowercase', { limit });
  return value;
};

export const minSpecialCharacters = (limit: Number) => (value: any, helpers: CustomHelpers) => {
  if (!value.match(/[^A-Za-z0-9]/))
    return helpers.error('string.pattern.minSpecialCharacters', { limit });
  return value;
};
