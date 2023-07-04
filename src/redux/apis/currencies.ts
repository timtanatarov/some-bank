import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { INFO_SERVICE_URL } from 'src/constants';

type CurrencyDataResponse = {
    updateAt: string;
    name: string;
    buyingRateNew: number;
    buyingRateOld: number;
    sellingRateNew: number;
    sellingRateOld: number;
    currencyCode: string;
    unit: number;
}[];

export const currenciesApi = createApi({
    reducerPath: 'currenciesApi',
    baseQuery: fetchBaseQuery({ baseUrl: INFO_SERVICE_URL }),
    keepUnusedDataFor: 1000,
    endpoints: (builder) => ({
        getCurrencies: builder.query<CurrencyDataResponse, void>({
            query: () => '/exchange-rates/',
        }),
    }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
