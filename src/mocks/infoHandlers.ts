import { rest } from 'msw';

import { INFO_SERVICE_URL } from 'src/constants';

import { currencies, branches } from './data/infoServiceData';

export const infoHandlers = [
    rest.get(`${INFO_SERVICE_URL}exchange-rates/`, (req, res, ctx) => {
        return res(ctx.json(currencies));
    }),

    rest.get(`${INFO_SERVICE_URL}bank-branch`, (req, res, ctx) => res(ctx.json(branches))),
];
