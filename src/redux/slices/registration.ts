import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserRegistartionStatus } from 'src/services/userService';

export type RequestRegistrationParams = {
    mobilePhone: string;
};

export const checkUserInfo = createAsyncThunk(
    'checkUserRequest',
    async (mobilePhone: RequestRegistrationParams, { rejectWithValue }) => {
        try {
            const serverData = await getUserRegistartionStatus(mobilePhone);
            return serverData;
        } catch {
            return rejectWithValue('Network error');
        }
    }
);

type InitialState = {
    isRequestPending: boolean;
    mobilePhone: string;
    clientStatus: string;
    clientId: null | string;
    errorMessage: string;
};

const initialState: InitialState = {
    isRequestPending: false,
    mobilePhone: '',
    clientStatus: '',
    clientId: '',
    errorMessage: '',
};

const registrationSlice = createSlice({
    name: 'registrationInfo',
    initialState,
    reducers: {
        clearAllRegisterData() {
            return initialState;
        },
        clearDataExcludingPhone(state) {
            state.isRequestPending = initialState.isRequestPending;
            state.clientStatus = initialState.clientStatus;
            state.clientId = initialState.clientId;
            state.errorMessage = initialState.errorMessage;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(checkUserInfo.pending, (state) => {
            state.isRequestPending = true;
            state.errorMessage = '';
        });
        builder.addCase(checkUserInfo.fulfilled, (state, { payload }) => {
            state.isRequestPending = false;
            state.mobilePhone = payload.mobilePhone;
            state.clientStatus = payload.clientStatus;
            state.clientId = payload.clientId;
        });
        builder.addCase(checkUserInfo.rejected, (state, { payload }) => {
            state.isRequestPending = false;
            state.errorMessage = payload as string;
        });
    },
});

export const { clearAllRegisterData, clearDataExcludingPhone } = registrationSlice.actions;

export const registrationReducer = registrationSlice.reducer;
