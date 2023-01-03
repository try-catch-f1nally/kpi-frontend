import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AuthResponse, LogInBody, RegisterBody, UserData} from './types';

export const authApi = createApi({
  reducerPath: 'api/auth',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_API_URL + '/auth',
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, { data: { message: string } }>,
  endpoints: builder => ({
    register: builder.mutation<AuthResponse, RegisterBody>({
      query: (body) => ({
        url: 'register',
        method: 'POST',
        body
      })
    }),
    login: builder.mutation<AuthResponse, LogInBody>({
      query: (body) => ({
        url: 'login',
        method: 'POST',
        body
      })
    }),
    logout: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'logout',
        method: 'DELETE'
      })
    })
  })
});

export const {useRegisterMutation, useLoginMutation, useLogoutMutation} = authApi;
export default authApi.reducer;
