import { Stack, Typography } from '@mui/material';

import { colors } from 'src/theme';
import { creditCardCovers } from 'src/components/MainPage/Credits/constants';
import { balanceFormatter } from 'src/components/MainPage/utils';

import { currencyData } from 'src/services/exchangeRatesService/currencyData';

import { BaseCard } from './Base';

export type CreditProductCardProps = {
    id: number;
    name: string;
    currencyCode: string;
    minInterestRate: number;
    minSum: number;
    size?: 'normal' | 'large';
};

export const CreditProductCard = ({
    id,
    name,
    currencyCode,
    minInterestRate,
    minSum,
    size = 'normal',
}: CreditProductCardProps) => {
    return (
        <BaseCard
            cardCover={{
                imgSrc: creditCardCovers[id as keyof typeof creditCardCovers],
                defaultBackgroundColor: colors.creditCoverBlue,
            }}
            size={size}
        >
            <Typography
                variant="descriptionSemiBold"
                sx={{
                    lineHeight: '16px',
                    color: colors.neutral0,
                }}
            >
                {`«${name}»`}
            </Typography>
            <Stack
                spacing="33px"
                sx={{
                    color: colors.neutral0,
                }}
            >
                <Typography variant="descriptionSemiBold" sx={{ lineHeight: '12px', fontSize: '24px' }}>
                    {`от ${currencyData[currencyCode as keyof typeof currencyData].symbol} ${balanceFormatter(
                        minSum,
                        ''
                    )}`}
                </Typography>
                <Typography>{`Процентная ставка - ${minInterestRate}%`}</Typography>
            </Stack>
        </BaseCard>
    );
};
