export interface UserLoginOutput {
  token: string;
  refreshToken: string;
  isPasswordChange: true;
  userId: number;
}
