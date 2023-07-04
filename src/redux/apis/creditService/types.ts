import { currencyKeys } from 'src/services/exchangeRatesService/currencyData';

export type CreditProduct = {
    id: number;
    cardName?: string;
    name: string;
    minSum: number;
    maxSum: number;
    currencyCode: currencyKeys;
    minInterestRate: number;
    maxInterestRate: number;
    details: string;
};

export type CreditProductInfo = CreditProduct & {
    needGuarantees: boolean;
    earlyRepayment: boolean;
    minPeriodMonths: number;
    maxPeriodMonths: number;
    details: string;
    type: string;
    needIncomeDetails: boolean;
};

export type CreditCardInfo = {
    id: string;
    cardNumber: string;
    accountId: string;
    transactionLimit: number;
    status: 'BLOCKED' | 'ACTIVE';
    expirationDate: string;
    holderName: string;
    digitalWallet: boolean;
    balance: number;
    currencyCode: string;
    accountNumber: string;
    cardName: string;
    paymentSystem: string;
    deliveryPoint: string;
    virtual: boolean;
    coBrand: string;
};

export type Credit = {
    creditId: string;
    name: string;
    principalDebt: number;
    creditLimit: number;
    currencyCode: currencyKeys;
    terminationData: string;
    periodMonths: number;
};

export type CreditOrder = {
    id: string;
    productId: number;
    status: 'APPROVED' | 'PENDING' | 'REJECTED';
    amount: number;
    periodMonths: number;
    creationDate: string;
    minInterestRate: number;
    maxInterestRate: number;
    name: string;
    currencyCode: currencyKeys;
};

export type CreditInfo = {
    type: string;
    name: string;
    agreementNumber: string;
    agreementDate: string;
    terminationDate: string;
    agreementId: string;
    currencyCode: string;
    personalGuarantees: boolean;
    creditLimit: number;
    interestRate: number;
    accountNumber: string;
    principalDebt: number;
    interestDebt: number;
    paymentDate: string;
    paymentPrincipal: number;
    paymentInterest: number;
};

export type CreditPaymentSchedule = {
    accountNumber: string;
    agreementId: string;
    principalDebt: number;
    interestDebt: number;
    payments: [
        {
            paymentDate: string;
            paid: boolean;
            paymentPrincipal: number;
            paymentInterest: number;
        }
    ];
};

export type CreditCardProduct = {
    id: number;
    minInterestRate: number;
    maxInterestRate: number;
    maxSum: number;
    minSum: number;
    name: string;
    currencyCode: currencyKeys;
    details: string;
};

export type CreditCardStatus = {
    cardNumber: string;
    status: string;
};

export type SuccessMessageResponse = {
    message: string;
};

export type ErrorMessageResponse = { errorMessage: string };
