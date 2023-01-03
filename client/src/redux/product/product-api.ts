import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {GetProductQuery, GetProductsQuery, ProductCardData, ProductData} from './types';

export const productApi = createApi({
  reducerPath: 'api/product',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER_API_URL + '/products'
  }),
  endpoints: builder => ({
    getProduct: builder.query<ProductData, GetProductQuery>({
      query: (productId) => productId
    }),
    getProducts: builder.query<ProductCardData[], GetProductsQuery>({
      query: (params) => ({
        url: '',
        params: params
      }),
      transformResponse: (response: ProductData[]) => response.map(
        ({
           name,
           images,
           rating,
           reviews,
           price,
           oldPrice,
           productType,
           model,
           memory,
           color
         }) => ({
          name,
          imgName: images[0],
          rating,
          reviewsAmount: reviews.length,
          price,
          oldPrice,
          link: [productType, model, memory, color].join('-')
        })
      )
    })
  })
});

export const {useGetProductQuery, useGetProductsQuery} = productApi;
export default productApi.reducer;
