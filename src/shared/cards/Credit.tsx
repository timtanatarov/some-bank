import { Typography, Stack } from '@mui/material';

import { colors } from 'src/theme';

import { balanceFormatter } from 'src/components/MainPage/utils';
import { currencyData, currencyKeys } from 'src/services/exchangeRatesService/currencyData';
import creditCoverBlue from 'src/images/cardCovers/creditCoverBlue.svg';

import { BaseCard } from './Base';

type CreditProps = {
    name: string;
    principalDebt: number;
    currencyCode: currencyKeys;
    size?: 'normal' | 'large';
    periodMonths?: number;
    amount?: number;
};

export const CreditCard = ({ name, principalDebt, currencyCode, size = 'normal', periodMonths }: CreditProps) => {
    return (
        <BaseCard cardCover={{ imgSrc: creditCoverBlue, defaultBackgroundColor: colors.creditCoverBlue }} size={size}>
            <Typography
                variant="descriptionSemiBold"
                component="h4"
                sx={{
                    fontSize: '16px',
                    height: '28px',
                    width: '128px',
                }}
            >
                {`«${name}»`}
            </Typography>

            <Stack
                spacing="15px"
                style={{ marginTop: '25px' }}
                sx={{
                    color: colors.neutral0,
                }}
            >
                <Typography>Остаток основного долга</Typography>
                <Typography variant="descriptionSemiBold" sx={{ lineHeight: '8px', fontSize: '24px' }}>
                    {currencyData[currencyCode].symbol} {balanceFormatter(principalDebt, '')}
                </Typography>
                <Typography>{periodMonths} месяцев</Typography>
            </Stack>
        </BaseCard>
    );
};
