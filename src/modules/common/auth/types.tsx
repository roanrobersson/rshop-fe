export type CurrentUser = {
  id: number;
  firstName: string;
  lastName: string;
};

export type DialogOnCloseFunction =
  | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
  | undefined;

export type RecoveryAccountFormData = {
  email: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};
