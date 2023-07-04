import { Box, Typography, Stack, useTheme } from '@mui/material';
import { FC } from 'react';
import { currencyData } from 'src/services/exchangeRatesService/currencyData';

import { colors } from 'src/theme';

import { operationTypeImg, operationTypeLabel, operationTypeSum } from '../constants';
import { balanceFormatter, operationDateFormatter, operationTitleFormatter } from '../utils';

export type OperationProps = {
    date: string;
    payeeId: string;
    sum: number;
    typeName: string;
    currencyCode: string;
};

export const Operation: FC<OperationProps> = ({ date, payeeId, sum, typeName, currencyCode }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                padding: {
                    tablet: '0 0 10px',
                    mobile: '0 0 8px',
                },
                display: 'flex',
                justifyContent: 'space-between',
                '&:not(:last-child)': {
                    borderBottom: `1px solid ${colors.neutral200}`,
                },
            }}
        >
            <Stack direction="row" spacing={1}>
                <Box
                    component="img"
                    src={operationTypeImg[typeName as keyof typeof operationTypeImg]}
                    alt="operation type"
                    sx={{ alignSelf: 'flex-start' }}
                />
                <Stack>
                    <Typography
                        variant="descriptionRegular"
                        sx={{
                            color: colors.primary,
                            [theme.breakpoints.down('tablet')]: {
                                width: '154px',
                                fontSize: '14px',
                                lineHeight: '20px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                            },
                        }}
                    >
                        {operationTitleFormatter(payeeId, typeName)}
                    </Typography>
                    <Typography
                        variant="labelRegular12"
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: colors.neutral600,
                            [theme.breakpoints.down('tablet')]: { fontSize: '12px', lineHeight: '16px' },
                        }}
                    >
                        {operationTypeLabel[typeName as keyof typeof operationTypeLabel]}
                    </Typography>
                </Stack>
            </Stack>
            <Stack sx={{ alignItems: 'flex-end' }}>
                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ color: typeName === 'incoming' ? colors.secondary600 : colors.primary }}
                >
                    <Typography variant="descriptionSemiBold">
                        {operationTypeSum[typeName as keyof typeof operationTypeSum]}
                        {balanceFormatter(sum, 'operation')}
                        {' ' + currencyData[currencyCode as keyof typeof currencyData].symbol}
                    </Typography>
                </Stack>
                <Typography
                    variant="labelRegular12"
                    sx={{
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: colors.neutral600,
                        textAlign: 'right',
                        whiteSpace: 'nowrap',
                        [theme.breakpoints.down('tablet')]: {
                            fontSize: '12px',
                            lineHeight: '16px',
                        },
                    }}
                >
                    {operationDateFormatter(date)}
                </Typography>
            </Stack>
        </Box>
    );
};
