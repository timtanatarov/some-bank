import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';

import { IS_LOGGED_IN } from 'src/constants';

import { logOut } from 'src/redux/slices/authToken';
import { userService } from 'src/redux/apis/userService';

export const logOutCleaner = createListenerMiddleware();

logOutCleaner.startListening({
    matcher: isAnyOf(logOut, userService.endpoints.getAuthToken.matchRejected),
    effect: (_, listenerApi) => {
        localStorage.setItem(IS_LOGGED_IN, 'false');
        listenerApi.dispatch(userService.util.resetApiState());
    },
});
