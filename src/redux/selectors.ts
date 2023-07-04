import { RootState } from './store';

export const selectResetPassData = (state: RootState) => state.resetPass;

export const selectAuthToken = (state: RootState) => state.authToken.tokenString;

export const selectClientId = (state: RootState) => state.authToken.token.clientId;

export const selectRegistrationData = (state: RootState) => state.registrationInfo;

export const selectQuickFilter = (state: RootState) => state.branchesData.currentFilter;
