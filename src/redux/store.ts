import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { IS_LOGGED_IN } from 'src/constants';

import { currenciesApi } from './apis/currencies';
import { registrationReducer } from './slices/registration';

import { logOutCleaner } from './middlewares/logoutCleaner';
import { logInStorageUpdater } from './middlewares/logInStorageUpdater';

import { branchesReducer } from './slices/branchesAndATMs';
import { resetPassReducer } from './slices/resetPass';
import { userService } from './apis/userService';
import { authTokenReducer } from './slices/authToken';
import { creditServiceApi } from './apis/creditService';
import { depositServiceApi } from './apis/depositService';
import { infoServiceApi } from './apis/infoService';

export const store = configureStore({
    reducer: {
        authToken: authTokenReducer,
        resetPass: resetPassReducer,
        branchesData: branchesReducer,
        registrationInfo: registrationReducer,
        [userService.reducerPath]: userService.reducer,
        [creditServiceApi.reducerPath]: creditServiceApi.reducer,
        [depositServiceApi.reducerPath]: depositServiceApi.reducer,
        [currenciesApi.reducerPath]: currenciesApi.reducer,
        [infoServiceApi.reducerPath]: infoServiceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userService.middleware,
            creditServiceApi.middleware,
            depositServiceApi.middleware,
            infoServiceApi.middleware,
            currenciesApi.middleware,
            logOutCleaner.middleware,
            logInStorageUpdater.middleware
        ),
});

setupListeners(store.dispatch);

localStorage.getItem(IS_LOGGED_IN) === 'true' && store.dispatch(userService.endpoints.getAuthToken.initiate());

if (window.Cypress) {
    window.store = store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
