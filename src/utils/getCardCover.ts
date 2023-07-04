import debitRubleDark from 'src/images/cardCovers/debitRubleDark.svg';
import debitNotRuble from 'src/images/cardCovers/debitNotRuble.svg';
import debitRubleBlue from 'src/images/cardCovers/debitRubleBlue.svg';
import creditRubleLight from 'src/images/cardCovers/creditRubleLight.svg';
import creditRubleVisa from 'src/images/cardCovers/creditRubleVisa.svg';
import creditNotRubleMastercard from 'src/images/cardCovers/creditNotRuble.svg';
import creditNotRubleVisa from 'src/images/cardCovers/creditNotRubleVisa.svg';
import { colors } from 'src/theme';

type Currency = 'RUB' | 'notRUB' | string;
type CardTypeKeys = 'debit' | 'credit' | string;
type PaymentSystem = 'MIR' | 'VISA' | 'MASTERCARD' | string;

export interface CardBackground {
    imgSrc: string;
    defaultBackgroundColor: string;
}

type PaymentSystemType = {
    [key in PaymentSystem]: CardBackground;
};
type CardType = {
    [key in CardTypeKeys]: PaymentSystemType;
};

type IMapping = {
    [key in Currency]: CardType;
};

const covers: IMapping = {
    RUB: {
        debit: {
            MIR: {
                imgSrc: debitRubleBlue,
                defaultBackgroundColor: colors.debitRubleBlue,
            },
            VISA: {
                imgSrc: debitRubleDark,
                defaultBackgroundColor: colors.debitRubleDark,
            },

            MASTERCARD: {
                imgSrc: debitRubleDark,
                defaultBackgroundColor: colors.debitRubleDark,
            },
        },
        credit: {
            VISA: {
                imgSrc: creditRubleVisa,
                defaultBackgroundColor: colors.creditRubleVisa,
            },
            MASTERCARD: {
                imgSrc: creditRubleLight,
                defaultBackgroundColor: colors.creditRubleLight,
            },
            MIR: {
                imgSrc: creditRubleVisa,
                defaultBackgroundColor: colors.creditRubleVisa,
            },
        },
    },
    notRUB: {
        debit: {
            MIR: {
                imgSrc: debitNotRuble,
                defaultBackgroundColor: colors.debitNotRuble,
            },
            VISA: {
                imgSrc: debitNotRuble,
                defaultBackgroundColor: colors.debitNotRuble,
            },
            MASTERCARD: {
                imgSrc: debitNotRuble,
                defaultBackgroundColor: colors.debitNotRuble,
            },
        },
        credit: {
            VISA: {
                imgSrc: creditNotRubleVisa,
                defaultBackgroundColor: colors.creditNotRubleVisa,
            },
            MASTERCARD: {
                imgSrc: creditNotRubleMastercard,
                defaultBackgroundColor: colors.creditNotRubleMastercard,
            },
        },
    },
};

export const getCardCover = (currency: Currency, type: CardTypeKeys, paymentSystem: PaymentSystem): CardBackground => {
    const cardCurrency: Currency = currency === 'RUB' ? 'RUB' : 'notRUB';
    const cardType = type;
    const cardPayment = paymentSystem;

    return covers[cardCurrency][cardType][cardPayment];
};
