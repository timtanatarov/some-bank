export type DepositProduct = {
    id: string;
    name: string;
    interestRate: number;
    interestRateEarly: number;
    currencyCode: string;
    revocable: boolean;
    schemaName: string;
    capitalization: boolean;
    durationMonths: number;
    amountMin: number;
    amountMax: number;
    details: string;
};

export type ClientsDeposit = {
    agreementId: string;
    productName: string;
    currentBalance: number;
    currencyCode: string;
    startDate: string;
    endDate: string;
    durationMonths: number;
};

export type DepositCard = {
    id: string;
    cardNumber: string;
    accountId: string;
    transactionLimit: number;
    status: string;
    expirationDate: string;
    holderName: string;
    digitalWallet: boolean;
    isDefault: boolean;
    balance: number;
    currencyCode: string;
    cardDuration: number;
    details: string;
    accountNumber: string;
    cardName: string;
    paymentSystem: string;
    deliveryPoint: string;
    virtual: boolean;
    coBrand: string;
};

export type DepositCardProduct = {
    id: string;
    cardName: string;
    paymentSystem: string;
    cashback: number;
    coBrand: string;
    virtual: boolean;
    premiumStatus: string;
    servicePrice: number;
    productPrice: number;
    currencyCode: string;
    active: boolean;
    cardDuration: number;
    details: string;
};

export type DepositDetails = {
    accountNumber: string;
    startDate: string;
    endDate: string;
    interestRate: number;
    currentBalance: number;
    autoRenewal: boolean;
    name: string;
    currencyCode: string;
    capitalization: boolean;
    revocable: boolean;
};

export type DepositCardInfo = {
    id: string;
    cardNumber: string;
    accountId: string;
    transactionLimit: number;
    status: 'BLOCKED' | 'ACTIVE';
    expirationDate: string;
    holderName: string;
    digitalWallet: boolean;
    isDefault: boolean;
    balance: number;
    currencyCode: string;
    accountNumber: string;
    cardName: string;
    paymentSystem: string;
    deliveryPoint: string;
    virtual: boolean;
    coBrand: string;
};
