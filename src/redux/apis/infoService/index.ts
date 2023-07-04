import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { INFO_SERVICE_URL } from 'src/constants';

import { transformBranchesData } from './utils';

import { BranchesData, MarkType } from './types';

export const infoServiceApi = createApi({
    reducerPath: 'infoServiceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: INFO_SERVICE_URL,
    }),
    endpoints: (builder) => ({
        getBranchesData: builder.query<MarkType[], void>({
            query: () => ({ url: 'bank-branch/' }),

            transformResponse: (response: BranchesData[]): MarkType[] => {
                const preparedMarks = transformBranchesData(response);
                return preparedMarks;
            },
        }),
    }),
});

export const { useGetBranchesDataQuery } = infoServiceApi;
