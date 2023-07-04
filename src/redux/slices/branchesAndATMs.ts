import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum QuickFiltersEnum {
    cashWithdraw = 'cashWithdraw',
    replenishCard = 'replenishCard',
    currencyExchange = 'currencyExchange',
    moneyTransfer = 'moneyTransfer',
    acceptPayment = 'acceptPayment',
}

type InitialState = {
    currentFilter: QuickFiltersEnum | null;
};

const initialState: InitialState = {
    currentFilter: null,
};

export const branchesAndAtmSlice = createSlice({
    name: 'branchesAndAtm',
    initialState,
    reducers: {
        setQuickFilter(state, action: PayloadAction<QuickFiltersEnum | null>) {
            state.currentFilter = action.payload;
        },
    },
});

export const { setQuickFilter } = branchesAndAtmSlice.actions;

export const branchesReducer = branchesAndAtmSlice.reducer;
