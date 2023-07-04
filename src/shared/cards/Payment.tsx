import { Box, Stack, Typography } from '@mui/material';
import { paymentSystemImg } from 'src/components/MainPage/constants';
import { balanceFormatter, cardDateFormatter, cardNumberFormatter } from 'src/components/MainPage/utils';
import { currencyData } from 'src/services/exchangeRatesService/currencyData';
import { colors } from 'src/theme';
import { getCardCover } from 'src/utils/getCardCover';

import { BaseCard } from './Base';

export type PaymentCardProps = {
    type: string;
    currency: string;
    currentBalance: number;
    cardNumber: string;
    expirationDate: string;
    paymentSystem: string;
    size?: 'normal' | 'large';
};

enum PaymentCardType {
    CreditCard = 'credit',
    DebitCard = 'debit',
}

export const PaymentCard = ({
    type,
    currency,
    currentBalance,
    cardNumber,
    expirationDate,
    paymentSystem,
    size = 'normal',
}: PaymentCardProps) => {
    const currencySymbol = currencyData.hasOwnProperty(currency)
        ? currencyData[currency as keyof typeof currencyData].symbol
        : '';
    return (
        <BaseCard cardCover={getCardCover(currency, type, paymentSystem)} size={size}>
            <Typography
                variant="descriptionSemiBold"
                sx={{
                    lineHeight: '19px',
                    color: type === PaymentCardType.CreditCard && currency === 'RUB' ? colors.primary : colors.neutral0,
                }}
            >
                {type === PaymentCardType.CreditCard ? 'Кредитная карта' : 'Дебетовая карта'}
            </Typography>
            <Stack
                spacing="33px"
                sx={{
                    color: type === PaymentCardType.CreditCard && currency === 'RUB' ? colors.primary : colors.neutral0,
                }}
            >
                <Typography variant="descriptionSemiBold" sx={{ lineHeight: '28px', fontSize: '24px' }}>
                    {`${currencySymbol} ${balanceFormatter(currentBalance, 'card')}`}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Typography variant="descriptionSemiBold" sx={{ lineHeight: '19px' }}>
                        {cardNumberFormatter(cardNumber)}
                    </Typography>
                    <Typography variant="descriptionSemiBold" sx={{ lineHeight: '19px' }}>
                        {cardDateFormatter(expirationDate)}
                    </Typography>
                    <Box
                        component="img"
                        src={paymentSystemImg[paymentSystem as keyof typeof paymentSystemImg]}
                        alt="payment system"
                    />
                </Stack>
            </Stack>
        </BaseCard>
    );
};
