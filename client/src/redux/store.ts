import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import {authApi} from './auth/auth-api';
import {userApi} from './auth/user-api';
import {promoApi} from './promo/promo-api';
import {productApi} from './product/product-api';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [promoApi.reducerPath]: promoApi.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    authApi.middleware,
    userApi.middleware,
    promoApi.middleware,
    productApi.middleware
  )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
