export type CurrentUser = {
  id: number;
  firstName: string;
  lastName: string;
};

export type DialogOnCloseFunction =
  | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
  | undefined;

export type RecoveryAccountFormData = {
  loginEmail: string;
};

export type LoginFormData = {
  loginEmail: string;
  loginPassword: string;
};

export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

export type RegisterFormDataToSubmit = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
