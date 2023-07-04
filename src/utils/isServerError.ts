import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';

export const isServerError = (serverError: SerializedError | FetchBaseQueryError | undefined): boolean => {
    return serverError
        ? !!(
              'status' in serverError &&
              typeof serverError?.status === 'number' &&
              serverError.status >= 500 &&
              serverError.status <= 599
          )
        : false;
};
