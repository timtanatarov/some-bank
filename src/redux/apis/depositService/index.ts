import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DEPOSIT_SERVICE_URL } from 'src/constants';

import { DepositProduct, ClientsDeposit, DepositDetails, DepositCardProduct, DepositCardInfo } from './types';

export const depositServiceApi = createApi({
    reducerPath: 'depositServiceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: DEPOSIT_SERVICE_URL,
    }),
    tagTypes: ['Deposits'],
    endpoints: (builder) => ({
        getDepositProducts: builder.query<DepositProduct[], void>({
            query: () => ({ url: 'auth/deposit-products' }),
        }),

        getClientsDeposit: builder.query<ClientsDeposit[], string>({
            query: (clientId) => ({
                url: 'auth/deposits',
                params: { clientId },
            }),
        }),

        getDepositDetails: builder.query<DepositDetails, string>({
            query: (agreementId) => ({ url: `auth/deposits/${agreementId}` }),
            providesTags: (result, error, arg) => [{ type: 'Deposits', id: arg }],
        }),

        getDepositCardsProducts: builder.query<DepositCardProduct[], void>({
            query: () => ({ url: 'auth/cards-products' }),
        }),

        getClientsDepositCards: builder.query<DepositCardInfo[], string>({
            query: (clientId) => ({
                url: 'auth/deposit-cards',
                params: { clientId },
            }),
        }),

        updateRenewalStatus: builder.mutation({
            query: ({ agreementId, autoRenewal }: { agreementId: string; autoRenewal: boolean }) => ({
                url: `auth/deposits/${agreementId}/auto-renewal`,
                method: 'PATCH',
                credentials: 'include',
                body: { autoRenewal },
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Deposits', id: arg.agreementId }],
        }),

        updateActiveStatus: builder.mutation({
            query: ({ agreementId, accountNumber }: { agreementId: string; accountNumber: string | undefined }) => ({
                url: `auth/deposits/${agreementId}/revocaction`,
                method: 'PATCH',
                credentials: 'include',
                body: { accountNumber },
            }),
        }),
    }),
});

export const {
    useGetDepositProductsQuery,
    useGetClientsDepositQuery,
    useGetDepositDetailsQuery,
    useGetClientsDepositCardsQuery,
    useLazyGetClientsDepositCardsQuery,
    useGetDepositCardsProductsQuery,
    useUpdateRenewalStatusMutation,
    useUpdateActiveStatusMutation,
} = depositServiceApi;
