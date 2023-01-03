export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthResponse {
  accessToken: string;
  user: UserData;
}

export interface AuthState {
  isAuth: boolean;
  user: UserData | null;
  accessToken: string | null;
}

export interface RegisterBody extends UserData {
  password: string;
  passwordConfirm: string;
  userAgree: boolean;
}

export interface LogInBody {
  email: string;
  password: string;
}

export interface ChangePasswordBody {
  oldPassword: string,
  password: string,
  passwordConfirm: string,
}
