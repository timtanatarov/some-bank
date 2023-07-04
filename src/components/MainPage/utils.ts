import { mockOperationsData } from './Operations/constants';

export const operationDateFormatter = (date: string) => {
    const incomingDate = new Date(date);
    const time = incomingDate.toTimeString().slice(0, 5);
    const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: '2-digit', day: '2-digit' };
    const yymmdd = incomingDate.toLocaleDateString('en-GB', options);
    const midnight = new Date().setHours(0, 0, 0);

    if (incomingDate.getTime() < midnight - 86400000) {
        return yymmdd + ' ' + time;
    } else if (incomingDate.getTime() < midnight) {
        return `Вчера ${time}`;
    } else {
        return time;
    }
};

export const balanceFormatter = (balance: number, type: string) => {
    const isCardBalance = type === 'card';
    return String(balance).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, isCardBalance ? '$1,' : '$1 ');
};

export const cardDateFormatter = (date: string) => {
    return date.slice(5, 7) + '/' + date.slice(2, 4);
};

export const cardNumberFormatter = (cardNumber: string) => {
    return '**** ' + cardNumber.slice(-4);
};

export const getNameOfSender = (payeeId: string) => {
    const name = payeeId.split(' ');
    return name[0] + ' ' + name[1].slice(0, 1) + '.';
};

export const operationTitleFormatter = (payeeId: string, operationName: string) => {
    switch (operationName) {
        case 'incoming':
            return `Перевод от ${getNameOfSender(payeeId)}`;
        case 'internal':
            return 'Перевод между счетами';
        case 'withdraw':
            return 'Снятие наличных';
        case 'purchase':
            return payeeId;
        default:
            return payeeId;
    }
};

export const filterTransactions = (searchText: string, data: mockOperationsData) => {
    if (!searchText) {
        return data;
    }
    return data.filter(({ payeeId }) => payeeId.toLowerCase().includes(searchText.toLowerCase()));
};
