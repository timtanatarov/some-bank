import { rest } from 'msw';

import { CREDIT_SERVICE_URL } from 'src/constants';

import {
    credits,
    creditProducts,
    creditOrders,
    creditProductsInfo,
    creditsInfo,
    creditCards,
    creditCardProducts,
} from './data/creditServiceData';

export const creditHandlers = [
    rest.get(`${CREDIT_SERVICE_URL}auth/credit-orders`, (req, res, ctx) => {
        return res(ctx.json(creditOrders));
    }),

    rest.get(`${CREDIT_SERVICE_URL}auth/credits`, (req, res, ctx) => {
        return res(ctx.json(credits));
    }),

    rest.get(`${CREDIT_SERVICE_URL}auth/credits/:id`, (req, res, ctx) => {
        return res(ctx.json(creditsInfo.find((el) => el.agreementId === req.params.id)));
    }),

    rest.get(`${CREDIT_SERVICE_URL}auth/credit-products`, (req, res, ctx) => {
        return res(ctx.json(creditProducts));
    }),

    rest.get(`${CREDIT_SERVICE_URL}auth/credit-products/:id`, (req, res, ctx) => {
        return res(ctx.json(creditProductsInfo.find((el) => el.id === +req.params.id)));
    }),

    rest.get(`${CREDIT_SERVICE_URL}auth/credit-cards`, (req, res, ctx) => {
        return res(ctx.json(creditCards));
    }),

    rest.get(`${CREDIT_SERVICE_URL}auth/credit-cards/:id`, (req, res, ctx) => {
        return res(ctx.json(creditCards.find((el) => el.id === req.params.id)));
    }),

    rest.get(`${CREDIT_SERVICE_URL}auth/cards-products`, (req, res, ctx) => {
        return res(ctx.json(creditCardProducts));
    }),
];
