import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
    updatePassword,
    getPhoneByPassportNumber,
    getVerificationCode,
    getVerificationStatus,
} from 'src/services/userService';

export type RequestPhoneParams = {
    passportNumber?: string;
};

export type RequestSmsParams = {
    mobilePhone: string;
};

export type RequestVerificateStatusParams = {
    mobilePhone: string;
    smsVerificationCode: string;
    needTokenInReturn: boolean;
};

export type RequestChangePasswordParams = {
    token: string;
    mobilePhone: string;
    newPassword?: string;
};

export const requestPhoneNumber = createAsyncThunk(
    'reset/requestPhone',
    async (passportNumber: RequestPhoneParams, { rejectWithValue }) => {
        try {
            const serverData = await getPhoneByPassportNumber(passportNumber);
            return serverData;
        } catch (e) {
            return rejectWithValue('Network error');
        }
    }
);

export const requestSmsCode = createAsyncThunk(
    'reset/requestSmsCode',
    async (mobilePhone: RequestSmsParams, { rejectWithValue }) => {
        try {
            const serverData = await getVerificationCode(mobilePhone);
            return serverData;
        } catch (e) {
            return rejectWithValue('Network error');
        }
    }
);

export const requestVerificateStatus = createAsyncThunk(
    'reset/requestVerificateStatus',
    async (
        { mobilePhone, smsVerificationCode, needTokenInReturn = false }: RequestVerificateStatusParams,
        { rejectWithValue }
    ) => {
        try {
            const serverData = await getVerificationStatus({ mobilePhone, smsVerificationCode, needTokenInReturn });
            const token = serverData.data.token;
            return token;
        } catch (e) {
            return rejectWithValue('Network error');
        }
    }
);

export const requestChangePassword = createAsyncThunk(
    'reset/requestChangePassword',
    async ({ token, mobilePhone, newPassword }: RequestChangePasswordParams, { rejectWithValue }) => {
        try {
            const serverData = await updatePassword({ token, mobilePhone, newPassword });
            return serverData;
        } catch (e) {
            return rejectWithValue('Network error');
        }
    }
);

type InitialState = {
    isRequestPending: boolean;
    mobilePhone: string;
    verificationCode: string;
    token: string;
    successMsg: string;
    errorMessage: string;
};

const initialState: InitialState = {
    isRequestPending: false,
    mobilePhone: '',
    verificationCode: '',
    token: '',
    successMsg: '',
    errorMessage: '',
};

const resetPassSlice = createSlice({
    name: 'reset',
    initialState,
    reducers: {
        clearAllResetData(state) {
            state.isRequestPending = false;
            state.mobilePhone = '';
            state.verificationCode = '';
            state.token = '';
            state.successMsg = '';
            state.errorMessage = '';
        },
        clearToken(state) {
            state.token = '';
        },
        clearSmsCode(state) {
            state.verificationCode = '';
        },
        clearPhoneNumber(state) {
            state.mobilePhone = '';
        },
        clearErrorMessage(state) {
            state.errorMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(requestPhoneNumber.pending, (state) => {
            state.isRequestPending = true;
            state.errorMessage = '';
        });
        builder.addCase(requestPhoneNumber.fulfilled, (state, { payload }) => {
            state.mobilePhone = payload.mobilePhone;
            state.isRequestPending = false;
        });
        builder.addCase(requestPhoneNumber.rejected, (state, { payload }) => {
            state.isRequestPending = false;
            state.errorMessage = payload as string;
        });
        builder.addCase(requestSmsCode.pending, (state) => {
            state.isRequestPending = true;
            state.errorMessage = '';
        });
        builder.addCase(requestSmsCode.fulfilled, (state, { payload }) => {
            state.verificationCode = payload.verificationCode;
            state.isRequestPending = false;
        });
        builder.addCase(requestSmsCode.rejected, (state, { payload }) => {
            state.isRequestPending = false;
            state.errorMessage = payload as string;
        });
        builder.addCase(requestVerificateStatus.pending, (state) => {
            state.isRequestPending = true;
            state.errorMessage = '';
        });
        builder.addCase(requestVerificateStatus.fulfilled, (state, { payload }) => {
            state.token = payload;
            state.isRequestPending = false;
        });
        builder.addCase(requestVerificateStatus.rejected, (state, { payload }) => {
            state.isRequestPending = false;
            state.errorMessage = payload as string;
        });
        builder.addCase(requestChangePassword.pending, (state) => {
            state.isRequestPending = true;
            state.errorMessage = '';
        });
        builder.addCase(requestChangePassword.fulfilled, (state, { payload }) => {
            state.successMsg = payload;
            state.isRequestPending = false;
        });
        builder.addCase(requestChangePassword.rejected, (state, { payload }) => {
            state.isRequestPending = false;
            state.errorMessage = payload as string;
        });
    },
});

export const { clearAllResetData, clearToken, clearSmsCode, clearPhoneNumber, clearErrorMessage } =
    resetPassSlice.actions;

export const resetPassReducer = resetPassSlice.reducer;
