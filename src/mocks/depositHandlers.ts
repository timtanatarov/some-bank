import { rest } from 'msw';
import { DEPOSIT_SERVICE_URL } from 'src/constants';

import { deposits, depositDetails, depositProducts, debitCardProducts, debitCards } from './data/depositServiceData';

export const depositHandlers = [
    rest.get(`${DEPOSIT_SERVICE_URL}auth/deposits`, (req, res, ctx) => {
        return res(ctx.json(deposits));
    }),

    rest.get(`${DEPOSIT_SERVICE_URL}auth/deposits/:id`, (req, res, ctx) => {
        const id = req.params.id;
        const matchedDeposit = depositDetails.find((deposit) => id === deposit.agreementId);
        return res(ctx.json(matchedDeposit));
    }),

    rest.get(`${DEPOSIT_SERVICE_URL}auth/deposit-products`, (req, res, ctx) => {
        return res(ctx.json(depositProducts));
    }),

    rest.get(`${DEPOSIT_SERVICE_URL}auth/cards-products`, (req, res, ctx) => {
        return res(ctx.json(debitCardProducts));
    }),

    rest.get(`${DEPOSIT_SERVICE_URL}auth/deposit-cards`, (req, res, ctx) => {
        return res(ctx.json(debitCards));
    }),
];
