export type mockOperationsData = {
    transferOrderID: string;
    createadAt: string;
    purpose: string;
    payeeId: string;
    sum: number;
    completedAt: string;
    status: string;
    typeName: string;
    currencyCode: string;
}[];

export const operationsData: mockOperationsData = [
    {
        transferOrderID: '0',
        createadAt: '2023-02-09 07:01:54+00',
        purpose: 'own account transfer',
        payeeId: 'internal',
        sum: 4600,
        completedAt: '2022-12-08 7:01:54+00',
        status: 'completed',
        typeName: 'internal',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '1',
        createadAt: '2023-02-08 05:56:54+00',
        purpose: 'interbank transfer',
        payeeId: 'Алексей Алексеев',
        sum: 10000,
        completedAt: '2022-12-08 05:56:54+00',
        status: 'completed',
        typeName: 'incoming',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '2',
        createadAt: '2023-01-15 16:30:54+00',
        purpose: 'interbank transfer',
        payeeId: 'withdraw',
        sum: 5000,
        completedAt: '2022-12-07 16:30:54+00',
        status: 'completed',
        typeName: 'withdraw',
        currencyCode: 'RUB',
    },

    {
        transferOrderID: '3',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Dodo Pizza',
        sum: 2799,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '4',
        createadAt: '2022-06-26: 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Dodo Pizza',
        sum: 2099,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '5',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Dodo Pizza',
        sum: 584,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },

    {
        transferOrderID: '6',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Dodo Pizza',
        sum: 799,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '7',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Dodo Pizza',
        sum: 1499,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '8',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Dodo Pizza',
        sum: 1299,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '8',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Dodo Pizza',
        sum: 967,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '9',
        createadAt: '2023-01-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Спортмастер',
        sum: 32799,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '10',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Лента',
        sum: 5555,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '11',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Пятерочка',
        sum: 1999,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
    {
        transferOrderID: '11',
        createadAt: '2022-06-26 17:09:54+00',
        purpose: 'purchase',
        payeeId: 'Магнит',
        sum: 1299,
        completedAt: '2022-06-26 17:09:54+00',
        status: 'completed',
        typeName: 'purchase',
        currencyCode: 'RUB',
    },
];
