export const currencies = [
    {
        updateAt: '2023-02-09T06:00:12.139Z',
        currencyCode: 'CNY',
        name: 'Китайский юань',
        sign: 'CN¥',
        buyingRateOld: 10.7919,
        buyingRateNew: 10.7919,
        sellingRateOld: 6.7919,
        sellingRateNew: 6.7919,
        unit: 1,
    },
    {
        updateAt: '2023-02-09T06:00:12.143Z',
        currencyCode: 'EUR',
        name: 'Евро',
        sign: '€',
        buyingRateOld: 78.5731,
        buyingRateNew: 78.5731,
        sellingRateOld: 74.5731,
        sellingRateNew: 74.5731,
        unit: 1,
    },
    {
        updateAt: '2023-02-09T06:00:12.149Z',
        currencyCode: 'USD',
        name: 'Доллар США',
        sign: '$',
        buyingRateOld: 73.2815,
        buyingRateNew: 73.2815,
        sellingRateOld: 69.2815,
        sellingRateNew: 69.2815,
        unit: 1,
    },
];

export const branches = [
    {
        bankBranchType: 'LOCAL_BRANCH',
        branchNumber: '5',
        branchCoordinates: '59.929467, 30.350086',
        city: 'Санкт-Петербург',
        branchAddress: 'наб. р. Фонтанки, д. 251',
        closed: true,
        openingTime: '09:00:00',
        closingTime: '18:00:00',
        shortenedDay: '17:00:00',
        workAtWeekends: false,
        cashWithdraw: true,
        moneyTransfer: true,
        acceptPayment: false,
        currencyExchange: true,
        exoticCurrency: true,
        ramp: false,
        replenishCard: true,
        replenishAccount: false,
        consultation: true,
        insurance: true,
    },
    {
        bankBranchType: 'LOCAL_BRANCH',
        branchNumber: '1',
        branchCoordinates: '59.925176, 30.345130',
        city: 'Санкт-Петербург',
        branchAddress: 'Владимирский пр., д.1',
        closed: false,
        openingTime: '09:00:00',
        closingTime: '18:00:00',
        shortenedDay: '17:00:00',
        workAtWeekends: false,
        cashWithdraw: true,
        moneyTransfer: true,
        acceptPayment: true,
        currencyExchange: true,
        exoticCurrency: true,
        ramp: true,
        replenishCard: true,
        replenishAccount: false,
        consultation: true,
        insurance: false,
    },
    {
        bankBranchType: 'TERMINAL',
        branchNumber: '3',
        branchCoordinates: '59.926859, 30.343660',
        city: 'Санкт-Петербург',
        branchAddress: 'Загородный пр., д. 9',
        closed: false,
        openingTime: '00:00:00',
        closingTime: '11:30:00',
        shortenedDay: '10:30:00',
        workAtWeekends: false,
        cashWithdraw: false,
        moneyTransfer: true,
        acceptPayment: true,
        currencyExchange: false,
        exoticCurrency: false,
        ramp: true,
        replenishCard: false,
        replenishAccount: false,
        consultation: false,
        insurance: false,
    },
    {
        bankBranchType: 'ATM',
        branchNumber: '6',
        branchCoordinates: '59.924401, 30.351403',
        city: 'Санкт-Петербург',
        branchAddress: 'Владимирский пр., д. 51, корп. 2',
        closed: false,
        openingTime: '00:00:00',
        closingTime: '01:00:00',
        shortenedDay: '00:00:00',
        workAtWeekends: true,
        cashWithdraw: false,
        moneyTransfer: true,
        acceptPayment: true,
        currencyExchange: true,
        exoticCurrency: true,
        ramp: true,
        replenishCard: true,
        replenishAccount: false,
        consultation: false,
        insurance: false,
    },
    {
        bankBranchType: 'ATM',
        branchNumber: '7',
        branchCoordinates: '59.923965, 30.353313',
        city: 'Санкт-Петербург',
        branchAddress: 'Свечной пер., д. 1',
        closed: false,
        openingTime: '05:00:00',
        closingTime: '05:00:00',
        shortenedDay: '04:00:00',
        workAtWeekends: true,
        cashWithdraw: true,
        moneyTransfer: false,
        acceptPayment: true,
        currencyExchange: false,
        exoticCurrency: false,
        ramp: false,
        replenishCard: false,
        replenishAccount: false,
        consultation: true,
        insurance: false,
    },
    {
        bankBranchType: 'ATM',
        branchNumber: '2',
        branchCoordinates: '59.925687, 30.346578',
        city: 'Санкт-Петербург',
        branchAddress: 'ул. Марата, д.5, корп. 1',
        closed: false,
        openingTime: '23:00:00',
        closingTime: '10:00:00',
        shortenedDay: '09:00:00',
        workAtWeekends: true,
        cashWithdraw: true,
        moneyTransfer: true,
        acceptPayment: false,
        currencyExchange: true,
        exoticCurrency: false,
        ramp: false,
        replenishCard: false,
        replenishAccount: false,
        consultation: true,
        insurance: false,
    },
    {
        bankBranchType: 'ATM',
        branchNumber: '4',
        branchCoordinates: '59.928951, 30.346739',
        city: 'Санкт-Петербург',
        branchAddress: 'Графский пер., д. 2/1',
        closed: false,
        openingTime: '22:00:00',
        closingTime: '05:00:00',
        shortenedDay: '04:00:00',
        workAtWeekends: true,
        cashWithdraw: false,
        moneyTransfer: true,
        acceptPayment: false,
        currencyExchange: true,
        exoticCurrency: false,
        ramp: false,
        replenishCard: false,
        replenishAccount: false,
        consultation: false,
        insurance: false,
    },
];