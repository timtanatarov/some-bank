import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { registerToken, logOut } from 'src/redux/slices/authToken';

import { USER_SERVICE_URL } from 'src/constants';

import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { RootState } from 'src/redux/store';

export type TokenResponse = {
    data: {
        accessToken: string;
        refreshToken: string;
        tokenType: string;
    };
};

const mutex = new Mutex();

export const createBaseQueryWithReauth = (url: string | undefined) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: url,
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).authToken.tokenString;
            if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
            return headers;
        },
    });

    const baseReauthQuery = fetchBaseQuery({ baseUrl: USER_SERVICE_URL });

    const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
        args,
        api,
        extraOptions
    ) => {
        await mutex.waitForUnlock();
        let result = await baseQuery(args, api, extraOptions);

        if (
            result.error &&
            result.error.status === 401 &&
            !result.meta?.request.url.endsWith(`${USER_SERVICE_URL}user-service/login`)
        ) {
            if (!mutex.isLocked()) {
                const release = await mutex.acquire();
                try {
                    const refreshResult = (await baseReauthQuery(
                        {
                            url: 'user-service/refreshtoken',
                            method: 'GET',
                            headers: { 'Is-Web-Request': 'true' },
                            credentials: 'include',
                        },
                        api,
                        extraOptions
                    )) as TokenResponse;
                    if (refreshResult.data) {
                        api.dispatch(registerToken(refreshResult.data.accessToken));
                        result = await baseQuery(args, api, extraOptions);
                    } else {
                        api.dispatch(logOut());
                    }
                } finally {
                    release();
                }
            } else {
                await mutex.waitForUnlock();
                result = await baseQuery(args, api, extraOptions);
            }
        }
        return result;
    };
    return baseQueryWithReauth;
};
