import creditCoverPurple from 'src/images/cardCovers/creditCoverPurple.svg';
import creditCoverBlue from 'src/images/cardCovers/creditCoverBlue.svg';

export const creditCardCovers = {
    1: creditCoverPurple,
    2: creditCoverBlue,
};

export const userCredits = [
    {
        id: 1,
        cardName: 'Экпресс-кредит',
        minSum: 30000,
        maxSum: 120000,
        currencyCode: 'RUB',
        minInterestRate: 2,
        maxInterestRate: 16,
        status: 'APPROVED',
    },
    {
        id: 2,
        cardName: 'Универсальный',
        minSum: 50000,
        maxSum: 3000000,
        currencyCode: 'RUB',
        minInterestRate: 4,
        maxInterestRate: 25.4,
        status: 'REJECTED',
    },
    {
        id: 3,
        cardName: 'Первая помощь',
        minSum: 20000,
        maxSum: 50000,
        currencyCode: 'RUB',
        minInterestRate: 4,
        maxInterestRate: 25.4,
        status: 'PENDING',
    },
    {
        id: 4,
        cardName: 'Всегда c тобой',
        minSum: 30000,
        maxSum: 60000,
        currencyCode: 'RUB',
        minInterestRate: 4,
        maxInterestRate: 25.4,
        status: 'APPROVED',
    },
    {
        id: 5,
        cardName: 'Семейный',
        minSum: 100000,
        maxSum: 300000,
        currencyCode: 'RUB',
        minInterestRate: 4,
        maxInterestRate: 25.4,
        status: 'PENDING',
    },
];

export const creditCardProducts = [
    {
        cardName: 'Удобный',
        cashback: 2,
        minSum: 50000,
        minInterestRate: 2,
        isVirtual: false,
        currencyCode: 'RUB',
        servicePrice: 70,
        isActive: false,
        details: 'Для тех кто уверен в завтрашнем дне',
    },
    {
        cardName: 'Выгодный',
        cashback: 3,
        minSum: 30000,
        minInterestRate: 4,
        isVirtual: false,
        currencyCode: 'RUB',
        servicePrice: 110,
        isActive: false,
        details: 'Для тех кому нужен надежный платежный инструмент здесь и прямо сейчас',
    },
    {
        cardName: 'Премиальный',
        cashback: 4,
        minSum: 50000,
        minInterestRate: 6,
        isVirtual: false,
        currencyCode: 'RUB',
        servicePrice: 90,
        isActive: false,
        details: 'Ваш надежный помощник в любых ситуациях на максимально выгодных условиях',
    },
];
