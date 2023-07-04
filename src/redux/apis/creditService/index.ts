import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CREDIT_SERVICE_URL } from 'src/constants';

import { CreditProduct, CreditProductInfo, CreditCardInfo, Credit, CreditInfo, CreditOrder } from './types';

export const creditServiceApi = createApi({
    reducerPath: 'creditServiceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: CREDIT_SERVICE_URL,
    }),
    endpoints: (builder) => ({
        getCreditOrders: builder.query<Array<CreditOrder>, string>({
            query: (id) => ({
                url: `auth/credit-orders?clientId=${id}`,
            }),
        }),

        getCreditProducts: builder.query<CreditProduct[], void>({
            query: () => ({
                url: 'auth/credit-products',
            }),
        }),

        getCreditProductInfo: builder.query<CreditProductInfo, string>({
            query: (id) => ({
                url: `auth/credit-products/${id}`,
            }),
        }),

        getClientsCreditCards: builder.query<CreditCardInfo[], string>({
            query: (clientId) => ({
                url: 'auth/credit-cards',
                params: { clientId },
            }),
        }),

        getCreditCardInfo: builder.query<CreditCardInfo, string>({
            query: (cardId) => ({
                url: `auth/credit-cards/${cardId}`,
            }),
        }),

        getClientsCredits: builder.query<Credit[], string>({
            query: (clientId) => ({
                url: 'auth/credits',
                params: { clientId },
            }),
        }),

        getCreditInfo: builder.query<CreditInfo, string>({
            query: (creditId) => ({
                url: `auth/credits/${creditId}`,
            }),
        }),
    }),
});

export const {
    useGetCreditProductsQuery,
    useGetCreditProductInfoQuery,
    useGetClientsCreditCardsQuery,
    useGetCreditCardInfoQuery,
    useGetClientsCreditsQuery,
    useGetCreditInfoQuery,
    useGetCreditOrdersQuery,
} = creditServiceApi;
