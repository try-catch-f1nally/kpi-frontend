import {RootState} from '../store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectUserInfo = (state: RootState) => state.auth.user!;
