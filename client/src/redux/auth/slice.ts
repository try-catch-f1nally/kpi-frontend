import {createSlice, Draft, isAnyOf, PayloadAction} from '@reduxjs/toolkit';
import {AuthResponse, AuthState, UserData} from './types';
import {authApi} from './auth-api';
import {userApi} from './user-api';

const initialState: AuthState = {
  isAuth: JSON.parse(localStorage.getItem('isAuth') || 'false'),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  accessToken: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, {payload}: PayloadAction<AuthResponse | null>) => {
      userReducer(state, payload);
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.register.matchFulfilled,
        authApi.endpoints.login.matchFulfilled
      ),
      (state, {payload}) => {
        userReducer(state, payload);
      }
    );
    builder.addMatcher(
      userApi.endpoints.changeUserData.matchFulfilled,
      (state, {payload}) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.logout.matchFulfilled,
        authApi.endpoints.logout.matchRejected
      ),
      (state) => {
        userReducer(state, null);
      }
    );
  }
});

const userReducer = (state: Draft<AuthState>, payload: AuthResponse | null) => {
  if (payload) {
    const {accessToken, user} = payload;
    state.isAuth = true;
    state.accessToken = accessToken;
    state.user = user;
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    state.isAuth = false;
    state.accessToken = null;
    state.user = null;
    localStorage.removeItem('isAuth');
    localStorage.removeItem('user');
  }
}

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;
