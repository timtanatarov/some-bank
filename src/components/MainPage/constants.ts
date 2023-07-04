import incoming from 'src/images/operations/incoming.svg';
import internal from 'src/images/operations/internal.svg';
import withdraw from 'src/images/operations/withdraw.svg';
import purchase from 'src/images/operations/purchase.svg';
import VISA from 'src/images/cardCovers/visa.svg';
import MASTERCARD from 'src/images/cardCovers/mastercard.svg';
import MIR from 'src/images/cardCovers/mir.svg';

export const paymentSystemImg = { VISA, MASTERCARD, MIR };

export const operationTypeImg = { incoming, internal, withdraw, purchase };

export const operationTypeLabel = {
    incoming: 'Пополнения',
    internal: 'Переводы',
    withdraw: 'Наличные',
    purchase: 'Покупки',
};

export const operationTypeSum = {
    incoming: '+',
    internal: '',
    withdraw: '-',
    purchase: '-',
};
