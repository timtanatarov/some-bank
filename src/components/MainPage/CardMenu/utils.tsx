import { DepositCardInfo } from 'src/redux/apis/depositService/types';
import { CreditCardInfo } from 'src/redux/apis/creditService/types';

export const getCardsData = (debit: DepositCardInfo[], credit: CreditCardInfo[]) => {
    const depositCards = debit.map(
        ({ currencyCode, balance: currentBalance, cardNumber, expirationDate, paymentSystem }, i) => ({
            id: String(i),
            type: 'debit',
            currencyCode,
            currentBalance,
            cardNumber,
            expirationDate,
            paymentSystem,
        })
    );

    const creditCards = credit.map(
        ({ currencyCode, balance: currentBalance, cardNumber, expirationDate, paymentSystem }, i) => ({
            id: String(i),
            type: 'credit',
            currencyCode,
            currentBalance,
            cardNumber,
            expirationDate,
            paymentSystem,
        })
    );

    const currencies = ['RUB', 'EUR', 'USD', 'CNY'];

    const sortedData = [...depositCards, ...creditCards].sort((a, b) => {
        if (a.currencyCode === b.currencyCode) return a.expirationDate > b.expirationDate ? 1 : -1;
        return currencies.indexOf(a.currencyCode) - currencies.indexOf(b.currencyCode);
    });

    return sortedData;
};
