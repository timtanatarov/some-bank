import { useGetClientsCreditCardsQuery } from 'src/redux/apis/creditService';
import { useGetClientsDepositCardsQuery } from 'src/redux/apis/depositService';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { Link as RouterLink } from 'react-router-dom';

import { Typography, Box, Link, Skeleton } from '@mui/material';

import { Slider } from 'src/shared/Slider';
import { Plate } from 'src/shared/Plate';
import { PaymentCard } from 'src/shared/cards/Payment';

import { CreditCardInfo } from 'src/redux/apis/creditService/types';
import { DepositCard } from 'src/redux/apis/depositService/types';

import { CardProducts } from './CardProducts';

const currencyOrder = ['RUB', 'EUR', 'USD', 'CNY'];

export enum TabValues {
    debit = 'debit',
    credit = 'credit',
}

type CreditCardInfoWithType = CreditCardInfo & {
    type: `${TabValues}`;
};

type DepositCardWithType = DepositCard & {
    type: `${TabValues}`;
};

export const Accounts = () => {
    const clientId = useAppSelector(selectClientId);

    const {
        data: creditCards,
        isError: creditCardsError,
        isLoading: creditCardsLoading,
    } = useGetClientsCreditCardsQuery(clientId);

    const {
        data: debitCards,
        isError: debitCardsError,
        isLoading: debitCardsLoading,
    } = useGetClientsDepositCardsQuery(clientId);

    const userCards: (CreditCardInfoWithType | DepositCardWithType)[] = [];

    if (creditCards?.length) {
        userCards.push(...creditCards.map((el) => ({ ...el, type: TabValues.credit })));
    }

    if (debitCards?.length) {
        userCards.push(...debitCards.map((el) => ({ ...el, type: TabValues.debit })));
    }

    const sortedUserCards = userCards
        .map((el) => ({
            ...el,
            paymentSystem: el.paymentSystem,
        }))
        .sort((a, b) => currencyOrder.indexOf(a.currencyCode) - currencyOrder.indexOf(b.currencyCode));

    const skeletons = Array(3)
        .fill('')
        .map((_, i) => (
            <Skeleton variant="rectangular" sx={{ borderRadius: '12px' }} key={i} width={260} height={166} />
        ));

    return (
        <Box>
            <Typography component="p" variant="bold24" sx={{ ml: '36px' }}>
                Мои карты
            </Typography>
            <Box sx={{ minHeight: '196px', height: '1px', mt: '24px' }}>
                <Slider>
                    {debitCardsLoading || creditCardsLoading ? (
                        skeletons
                    ) : creditCardsError || debitCardsError ? (
                        <Plate message="Произошла ошибка" />
                    ) : userCards.length ? (
                        sortedUserCards.map((item) => (
                            <Link component={RouterLink} to={`${item.id}`} key={item.id} underline="none">
                                <PaymentCard
                                    key={item.id}
                                    type={item.type}
                                    currency={item.currencyCode}
                                    currentBalance={item.balance}
                                    cardNumber={item.cardNumber}
                                    expirationDate={item.expirationDate}
                                    paymentSystem={item.paymentSystem}
                                />
                            </Link>
                        ))
                    ) : (
                        <Plate
                            message="На данный момент у вас нет карт. Вы можете ознакомиться с картами и подать заявку на получение."
                            sx={{ margin: '0 36px', borderRadius: '4px' }}
                        />
                    )}
                </Slider>
            </Box>
            <CardProducts />
        </Box>
    );
};
