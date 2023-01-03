import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const promoApi = createApi({
  reducerPath: 'api/promo',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_API_URL + '/promo'
  }),
  endpoints: builder => ({
    getCarouselImages: builder.query<string[], void>({
      query: () => 'carousel-img'
    })
  })
});

export const {useGetCarouselImagesQuery} = promoApi;
export default promoApi.reducer;
