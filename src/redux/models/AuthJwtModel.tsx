export type AuthJWTState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User;
};

export type User = {
  id: string;
  displayName: string;
  email: string;
  password: string;
  photoURL: string;
  userName: string;
  access_token: string;
  token_type: string;
  expires_in: string;
  issued: string;
  expires: string;
  customerId: string;
};