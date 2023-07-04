import { createSlice } from '@reduxjs/toolkit';
import { userService } from 'src/redux/apis/userService';

const parseJwt = (
    token: string
): {
    clientId: string;
    sub: string;
    exp: number;
    iat: number;
} => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );

    return JSON.parse(jsonPayload);
};

const initialState = {
    tokenString: '',
    token: {
        clientId: '',
        sub: '',
        exp: 0,
        iat: 0,
    },
};

const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        registerToken: (_, { payload }: { payload: string }) => ({
            tokenString: payload,
            token: parseJwt(payload),
        }),
        logOut: () => ({
            tokenString: '',
            token: {
                clientId: '',
                sub: '',
                exp: 0,
                iat: 0,
            },
        }),
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userService.endpoints.logIn.matchFulfilled, (_, { payload }: { payload: string }) => ({
                tokenString: payload,
                token: parseJwt(payload),
            }))
            .addMatcher(userService.endpoints.getAuthToken.matchFulfilled, (_, { payload }: { payload: string }) => ({
                tokenString: payload,
                token: parseJwt(payload),
            }));
    },
});

export const { logOut, registerToken } = authTokenSlice.actions;
export const authTokenReducer = authTokenSlice.reducer;
