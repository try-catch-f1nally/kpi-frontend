import {authFetchBaseQuery} from './authFetchBaseQuery';
import {AuthResponse, ChangePasswordBody, UserData} from './types';
import {createApi} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'api/user',
  baseQuery: authFetchBaseQuery({baseUrl: process.env.REACT_APP_SERVER_API_URL + '/user'}),
  endpoints: builder => ({
    changeUserData: builder.mutation<UserData, UserData>({
      query: (body) => ({
        url: 'contacts',
        method: 'PUT',
        body
      })
    }),
    changeUserPassword: builder.mutation<{ message: string }, ChangePasswordBody>({
      query: (body) => ({
        url: 'password',
        method: 'PUT',
        body
      })
    })
  })
});

export const {useChangeUserDataMutation, useChangeUserPasswordMutation} = userApi;
export default userApi.reducer;
