import { useState, useMemo } from 'react';

import { useGetCreditProductsQuery } from 'src/redux/apis/creditService';
import { useGetDepositCardsProductsQuery } from 'src/redux/apis/depositService';

import { Typography, Tab, Tabs, Stack } from '@mui/material';

import { SkeletonProduct } from 'src/shared/Product/SkeletonProduct';

import { PaymentCard } from 'src/shared/cards/Payment';
import { ComingSoonModal } from 'src/shared/ComingSoonModal';

import { colors } from 'src/theme';

import { Product } from 'src/shared/Product';

import { TabValues } from '.';

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

export const CardProducts = () => {
    const { data: depositCardProducts, isLoading: depositCardProductsLoading } = useGetDepositCardsProductsQuery();
    const { data: creditCardProducts, isLoading: creditCardProductsLoading } = useGetCreditProductsQuery();

    const [tabValue, setTabValue] = useState('debit');
    const [isOpen, setIsOpen] = useState(false);

    const preparedDebitCardProducts = useMemo(() => {
        return depositCardProducts?.map((el) => ({
            ...el,
            type: 'debit',
            rusType: 'Дебетовая карта',
            balance: 10000,
            info: [
                { title: 5 + '%', subtitle: 'кэшбэк' },
                { title: 332 + ' ₽', subtitle: 'обслуживание в месяц' },
            ],
        }));
    }, [depositCardProducts]);

    const preparedCreditCardProducts = useMemo(() => {
        return creditCardProducts?.map((el) => ({
            ...el,
            type: 'credit',
            rusType: 'Кредитная карта',
            balance: 15000,
            info: [
                { title: el.minInterestRate + '%', subtitle: 'минимальная ставка' },
                { title: 442 + ' ₽', subtitle: 'обслуживание в месяц' },
            ],
        }));
    }, [creditCardProducts]);

    const activeProducts = tabValue === TabValues.credit ? preparedCreditCardProducts : preparedDebitCardProducts;

    const handleChange = (event: React.SyntheticEvent, newTabValue: string) => {
        setTabValue(newTabValue);
    };

    const toggleUndeveloped = () => {
        setIsOpen(!isOpen);
    };

    const skeletonProducts = Array(3)
        .fill('')
        .map((_, i) => <SkeletonProduct key={i} />);

    return (
        <Stack spacing="24px" sx={{ mt: '44px', padding: { tablet: '0 36px', mobile: '0 24px' } }}>
            <Typography variant="h5" sx={{ lineHeight: '32px' }}>
                Карточные продукты
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
                <Tab sx={tabStyle} label="Дебетовые" value="debit" key="Дебетовые" />
                <Tab sx={tabStyle} label="Кредитные" value="credit" key="Кредитные" />
            </Tabs>
            <Product.Stack>
                {creditCardProductsLoading || depositCardProductsLoading
                    ? skeletonProducts
                    : activeProducts?.map((el) => (
                          <Product
                              key={el.id}
                              card={
                                  <PaymentCard
                                      type={el.type}
                                      currency={el.currencyCode}
                                      currentBalance={el.balance}
                                      cardNumber="**** 7756"
                                      expirationDate="2025-01-13"
                                      paymentSystem="VISA"
                                  />
                              }
                              title={el.rusType}
                              subtitle={el.cardName ? el.cardName : 'Placeholder'}
                              description={el.details}
                              onClick={toggleUndeveloped}
                              aboutItems={el.info.map((el, i) => (
                                  <Product.AboutBlock key={i} title={el.title} subtitle={el.subtitle} />
                              ))}
                          />
                      ))}
            </Product.Stack>
            <ComingSoonModal isOpen={isOpen} onClose={toggleUndeveloped} />
        </Stack>
    );
};
