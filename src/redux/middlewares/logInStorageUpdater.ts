import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import { IS_LOGGED_IN } from 'src/constants';

import { registerToken } from 'src/redux/slices/authToken';

import { userService } from 'src/redux/apis/userService';

export const logInStorageUpdater = createListenerMiddleware();

logInStorageUpdater.startListening({
    matcher: isAnyOf(registerToken, userService.endpoints.logIn.matchFulfilled),
    effect: () => {
        localStorage.setItem(IS_LOGGED_IN, 'true');
    },
});
