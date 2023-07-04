import { FC, useMemo } from 'react';

import { Table, TableHead, TableRow, TableBody, TableCell, Typography, Box, Skeleton, useTheme } from '@mui/material';

import { currencyData } from 'src/services/exchangeRatesService/currencyData';

import { ArrowUpIcon, ArrowDownIcon } from 'src/shared/icons';
import { useGetCurrenciesQuery } from 'src/redux/apis/currencies';

import { colors } from 'src/theme';

import { Plate } from './Plate';

type CurrencyTableProps = {
    variant?: 'wide' | 'small';
};

export const CurrencyTable: FC<CurrencyTableProps> = ({ variant = 'wide' }) => {
    const theme = useTheme();
    const { data, isLoading, isError } = useGetCurrenciesQuery(undefined, {
        selectFromResult: ({ data, isSuccess, isLoading, isError }) => ({
            data: data
                ? data
                      .filter((el) => el.currencyCode in currencyData)
                      .sort(
                          (a, b) =>
                              ['USD', 'EUR', 'CNY'].indexOf(a.currencyCode) -
                              ['USD', 'EUR', 'CNY'].indexOf(b.currencyCode)
                      )
                : undefined,
            isSuccess,
            isLoading,
            isError,
        }),
    });

    const skeletons = useMemo(
        () =>
            [0, 0, 0].map((_, i) => (
                <Skeleton
                    data-cy={`CurrencyTable-skeleton${i}`}
                    sx={{ width: '100%', height: '48px' }}
                    key={i}
                    component="div"
                />
            )),
        []
    );

    if (isLoading) {
        return <Box>{skeletons}</Box>;
    }

    if (isError || !data || !data?.length) {
        return (
            <Plate sx={{ height: '50px', border: `1px solid ${colors.alert}` }} message="Сервис временно недоступен" />
        );
    }

    const renderPriceCell = (newPrice: number, oldPrice: number) => (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                justifyContent: 'space-between',
            }}
        >
            <Typography variant="descriptionSemiBold">{newPrice.toFixed(2)}</Typography>
            {newPrice >= oldPrice ? (
                <ArrowUpIcon sx={{ color: colors.secondary600 }} />
            ) : (
                <ArrowDownIcon sx={{ color: colors.alert }} />
            )}
        </Box>
    );

    return (
        <Table>
            <TableHead>
                <TableRow
                    sx={{
                        borderColor: 'transparent',
                        '& :first-of-type': { width: '55%' },
                        '& .MuiTableCell-root': {
                            padding: '4px 0px',
                        },
                        '& > th': {
                            border: 'none',
                        },
                    }}
                >
                    {['Валюта', 'Покупка', 'Продажа'].map((el) => (
                        <TableCell key={el}>
                            <Typography variant="descriptionRegular" sx={{ color: colors.neutral600 }}>
                                {el}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody
                sx={{
                    '& td': {
                        borderBottom: 'none',
                    },
                }}
            >
                {data?.map((el) => (
                    <TableRow
                        key={el.currencyCode}
                        sx={{
                            '& .MuiTableCell-root': {
                                padding: {
                                    tablet: `4px ${variant === 'wide' ? '42px' : '21px'} 4px 0px`,
                                    mobile: '4px 8px 4px 0',
                                },
                                borderBottom: {
                                    laptop: `1px solid ${colors.neutral200}`,
                                    mobile: 'none',
                                },
                                '&:last-of-type': {
                                    pr: '0px',
                                },
                            },
                        }}
                    >
                        <TableCell>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Box
                                    component="img"
                                    src={currencyData[el.currencyCode as keyof typeof currencyData].icon}
                                />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: variant === 'wide' ? 'center' : 'start',
                                        columnGap: '10px',
                                        flexDirection: variant === 'wide' ? 'row' : 'column',
                                    }}
                                >
                                    <Typography variant="descriptionSemiBold" sx={{ color: '#212529', mr: '6px' }}>
                                        {el.currencyCode}
                                    </Typography>
                                    <Typography
                                        variant="labelRegular12"
                                        sx={{
                                            color: '#212529',
                                            [theme.breakpoints.down('tablet')]: {
                                                width: '90px',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            },
                                        }}
                                    >
                                        {currencyData[el.currencyCode as keyof typeof currencyData].name}
                                    </Typography>
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell>{renderPriceCell(el.buyingRateNew, el.buyingRateOld)}</TableCell>
                        <TableCell>{renderPriceCell(el.sellingRateNew, el.sellingRateOld)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
