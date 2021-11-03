export type Role = 'ROLE_CLIENT' | 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type LoginData = {
  username: string;
  password: string;
};

export type SessionData = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userId: string;
  userFirstName: string;
  userLastName: string;
};

export type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export type SimpleCurrentUser = {
  id: number;
  firstName: string;
  lastName: string;
};
