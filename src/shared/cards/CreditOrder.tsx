import { Typography, Stack, Box } from '@mui/material';

import { colors } from 'src/theme';

import { currencyData, currencyKeys } from 'src/services/exchangeRatesService/currencyData';
import creditCoverBlue from 'src/images/cardCovers/creditCoverBlue.svg';

import { formatAmountOutput } from 'src/utils/inputFormatters';

import { BaseCard } from './Base';

type CreditOrderProps = {
    amount: number;
    maxInterestRate: number;
    currencyCode: currencyKeys;
    size?: 'normal' | 'large';
};

export const CreditOrderCard = ({
    amount,
    maxInterestRate,
    currencyCode = 'RUB',
    size = 'normal',
}: CreditOrderProps) => {
    return (
        <BaseCard
            cardCover={{
                imgSrc: creditCoverBlue,
                defaultBackgroundColor: 'blue',
            }}
            size={size}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: '16px',
                }}
            >
                <Typography
                    variant="descriptionSemiBold"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '28px',
                        width: '148px',
                        position: 'absolute',
                        left: '0px',
                        zIndex: 10,
                        fontSize: '12px',
                        color: colors.neutral600,
                        background: colors.neutral0,
                        textIndent: '12px',
                    }}
                >
                    Заявка в обработке
                </Typography>
            </Box>

            <Stack
                spacing="15px"
                sx={{
                    color: colors.neutral0,
                }}
            >
                <Typography
                    variant="descriptionSemiBold"
                    sx={{ lineHeight: '8px', fontSize: '24px', mb: '1rem', mt: '1rem' }}
                >
                    {formatAmountOutput(String(amount))} {currencyData[currencyCode].symbol}
                </Typography>
                <Typography>Процентная ставка - {maxInterestRate} %</Typography>
            </Stack>
            <Box
                sx={{
                    width: size === 'large' ? '282px' : '260px',
                    height: size === 'large' ? '180px' : '166px',
                    position: 'absolute',
                    zIndex: '100',
                    top: '-35px',
                    borderRadius: '16px',
                    left: '0',
                    background: '#252525',
                    opacity: '0.4',
                }}
            />
        </BaseCard>
    );
};
