import { Stack, Typography } from '@mui/material';
import { depositCardCovers } from 'src/components/MainPage/Deposits/constants';
import { currencyData } from 'src/services/exchangeRatesService/currencyData';
import { colors } from 'src/theme';
import { formatAmountOutput } from 'src/utils/inputFormatters';

import { BaseCard } from './Base';

export type DepositCardProps = {
    name: string;
    amountMin: number;
    durationMonths: number;
    currencyCode: string;
    size?: 'normal' | 'large';
};

export const DepositCard = ({ name, amountMin, durationMonths, currencyCode, size = 'normal' }: DepositCardProps) => {
    return (
        <BaseCard
            cardCover={{
                imgSrc: depositCardCovers[currencyCode as keyof typeof depositCardCovers],
                defaultBackgroundColor: colors.creditCoverBlue,
            }}
            size={size}
        >
            <Typography
                variant="descriptionSemiBold"
                sx={{
                    lineHeight: '19px',
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
                <Typography variant="descriptionSemiBold" sx={{ lineHeight: '28px', fontSize: '24px' }}>
                    {`от ${formatAmountOutput(String(amountMin))} ${
                        currencyData[currencyCode as keyof typeof currencyData].symbol
                    }`}
                </Typography>
                <Typography>{`${durationMonths} месяцев`}</Typography>
            </Stack>
        </BaseCard>
    );
};
