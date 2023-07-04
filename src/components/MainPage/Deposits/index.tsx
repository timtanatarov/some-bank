import { useState } from 'react';
import { Skeleton, Stack, Typography, Tabs, Tab, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { DepositCard } from 'src/shared/cards/Deposit';

import { colors } from 'src/theme';

import { Product } from 'src/shared/Product';

import { Plate } from 'src/shared/Plate';

import { Slider } from 'src/shared/Slider';

import { formatAmountOutput } from 'src/utils/inputFormatters';

import { isServerError } from 'src/utils/isServerError';

import { currencyData } from 'src/services/exchangeRatesService/currencyData';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';

import { useGetDepositProductsQuery, useGetClientsDepositQuery } from 'src/redux/apis/depositService';

import { SkeletonProduct } from 'src/shared/Product/SkeletonProduct';

const tabStyle = {
    borderRadius: '16px',
    minWidth: '57px',
    minHeight: '40px',
    background: colors.neutral100,
    transition: 'background 0.2s ease-in',
    mr: '16px',
    color: colors.neutral600,
    '&.Mui-selected': {
        background: colors.primary,
        color: colors.neutral400,
    },
};

enum TabValues {
    rub = 'RUB',
    usd = 'USD',
    cny = 'CNY',
}

export const Deposits = () => {
    const clientId = useAppSelector(selectClientId);
    const [tabValue, setTabValue] = useState(TabValues.rub);
    const [isOpen, setIsOpen] = useState(false);

    const {
        data: clientsDeposits,
        isLoading: clientsDepositsLoading,
        error: clientsDepositsError,
    } = useGetClientsDepositQuery(clientId);

    const {
        data: depositProducts,
        isLoading: depositProductsLoading,
        error: depositProductsError,
    } = useGetDepositProductsQuery();

    const isClientsDepositServerError = isServerError(clientsDepositsError);
    const isDepositProductServerError = isServerError(depositProductsError);

    const handleChange = (event: React.SyntheticEvent, newTabValue: TabValues) => {
        setTabValue(newTabValue);
    };

    const toggleUndeveloped = () => {
        setIsOpen(!isOpen);
    };

    const filteredProducts = depositProducts?.filter((item) => item.currencyCode === tabValue);

    const skeletons = Array(3)
        .fill('')
        .map((_, i) => (
            <Skeleton variant="rectangular" sx={{ borderRadius: '12px' }} key={i} width={260} height={166} />
        ));

    const skeletonProducts = Array(3)
        .fill('')
        .map((_, i) => <SkeletonProduct key={i} />);
    return (
        <Stack spacing="44px">
            <Stack spacing={{ laptop: '32px', tablet: '24px' }}>
                <Box sx={{ pr: '36px', padding: { tablet: '0 36px', mobile: '0 24px' } }}>
                    <Typography variant="bold24" sx={{ color: colors.primary }}>
                        Мои депозиты
                    </Typography>
                </Box>
                <Box sx={{ minHeight: '196px', height: '1px' }}>
                    {!clientsDeposits && !clientsDepositsLoading ? (
                        <Plate
                            message={
                                isClientsDepositServerError
                                    ? 'Сервис временно недоступен'
                                    : 'На данный момент у вас нет карт. Вы можете ознакомиться с картами и подать заявку на получение.'
                            }
                            sx={{ border: 1, borderColor: colors.alert }}
                        />
                    ) : (
                        <Slider>
                            {clientsDepositsLoading
                                ? skeletons
                                : clientsDeposits?.map((item) => (
                                      <Link
                                          component={RouterLink}
                                          to={`${item.agreementId}`}
                                          key={item.agreementId}
                                          underline="none"
                                      >
                                          <DepositCard
                                              currencyCode={item.currencyCode}
                                              name={item.productName}
                                              amountMin={item.currentBalance}
                                              durationMonths={item.durationMonths}
                                          />
                                      </Link>
                                  ))}
                        </Slider>
                    )}
                </Box>
            </Stack>

            <Stack spacing="24px" sx={{ padding: { tablet: '0 36px', mobile: '0 24px' } }}>
                <Typography variant="h5" sx={{ lineHeight: '32px' }}>
                    Депозитные продукты
                </Typography>

                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTabs-indicator': {
                            display: 'none',
                        },
                    }}
                >
                    {[TabValues.rub, TabValues.usd, TabValues.cny].map((item) => (
                        <Tab sx={tabStyle} label={item} value={item} key={item} />
                    ))}
                </Tabs>
                {isDepositProductServerError ? (
                    <Plate message="Сервис временно недоступен" sx={{ border: 1, borderColor: colors.alert }} />
                ) : (
                    <Product.Stack>
                        {depositProductsLoading
                            ? skeletonProducts
                            : filteredProducts?.map((item) => (
                                  <Product
                                      key={item.id}
                                      card={
                                          <DepositCard
                                              currencyCode={item.currencyCode}
                                              name={item.name}
                                              amountMin={item.amountMin}
                                              durationMonths={item.durationMonths}
                                          />
                                      }
                                      title="Депозит"
                                      subtitle={item.name}
                                      description="Выплата процентов 2 раза в месяц"
                                      aboutItems={[
                                          <Product.AboutBlock
                                              key="0"
                                              title={`${item.interestRate}%`}
                                              subtitle="годовых"
                                          />,

                                          <Product.AboutBlock
                                              key="1"
                                              title={String(item.durationMonths)}
                                              subtitle="месяцев"
                                          />,
                                          <Product.AboutBlock
                                              key="2"
                                              title={`${formatAmountOutput(String(item.amountMin))} ${
                                                  currencyData[item.currencyCode as keyof typeof currencyData].symbol
                                              }`}
                                              subtitle="минимальная сумма депозита"
                                          />,
                                      ]}
                                  />
                              ))}
                    </Product.Stack>
                )}
            </Stack>
            <ComingSoonModal isOpen={isOpen} onClose={toggleUndeveloped} />
        </Stack>
    );
};
