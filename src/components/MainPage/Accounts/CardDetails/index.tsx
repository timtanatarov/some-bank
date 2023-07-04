import { useState, useMemo } from 'react';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { useParams, Link as RouterLink } from 'react-router-dom';

import { useGetClientsCreditCardsQuery } from 'src/redux/apis/creditService';
import { useGetClientsDepositCardsQuery } from 'src/redux/apis/depositService';

import { Plate } from 'src/shared/Plate';
import { Box, Stack, Typography, Button, Link, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';
import { PaymentCard } from 'src/shared/cards/Payment';
import { BackArrowButton } from 'src/shared/BackArrowButton';

import { AppRoutes } from 'src/constants';

import { colors } from 'src/theme';
import { separateStringByN } from 'src/utils/inputFormatters';

import { InfoTable } from 'src/shared/InfoTable';

import { cardDateFormatter } from '../../utils';

import { TransactionHistory } from './TransactionHistory';

const tabValues = ['Информация', 'История', 'Управление'];

export const CardDetails = () => {
    const clientId = useAppSelector(selectClientId);
    const { id = '' } = useParams();

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

    const [isOpen, setIsOpen] = useState(false);
    const [tabValue, setTabValue] = useState(tabValues[0]);

    const isCredit = creditCards?.find((el) => el.id === id);
    const isDebit = debitCards?.find((el) => el.id === id);

    const card = isCredit ? isCredit : isDebit;

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleTabChange = (event: React.SyntheticEvent, newTabValue: string) => {
        setTabValue(newTabValue);
    };

    const cardTableData = useMemo(() => {
        return card
            ? [
                  {
                      id: 1,
                      title: 'Статус',
                      info: card.status === 'ACTIVE' ? 'Активна' : 'Неактивна',
                      copyButton: false,
                  },
                  {
                      id: 2,
                      title: 'Cрок действия',
                      info: cardDateFormatter(card.expirationDate),
                      copyButton: false,
                  },
                  { id: 3, title: 'Номер карты', info: separateStringByN(card.cardNumber, 4), copyButton: true },
                  { id: 4, title: 'Держатель карты', info: card.holderName, copyButton: true },
                  { id: 5, title: 'Номер счёта', info: separateStringByN(card.accountNumber, 4), copyButton: true },
                  { id: 6, title: 'Валюта карты', info: card.currencyCode, copyButton: false },
              ]
            : null;
    }, [card]);

    if (creditCardsError || debitCardsError) {
        return <Plate message="Произошла ошибка" />;
    }

    if (debitCardsLoading || creditCardsLoading) {
        return <Plate message="Загружаем ваши данные" />;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '48px',
                padding: { tablet: '0 36px', mobile: '0 24px' },
            }}
        >
            <Link component={RouterLink} to={AppRoutes.accountsRoute} underline="none">
                <BackArrowButton sx={{ color: colors.primary, svg: { color: colors.primary } }} />
            </Link>

            {card === undefined ? (
                <Plate message="Нет информации по данной карте" />
            ) : (
                <Stack spacing="56px" alignItems="flex-start">
                    <Stack spacing="24px">
                        <Typography variant="subtitle2Semibold" sx={{ lineHeight: '30px' }}>
                            {card.cardName}
                        </Typography>
                        <PaymentCard
                            key={card.id}
                            type={isCredit ? 'credit' : 'debit'}
                            currency={card.currencyCode}
                            currentBalance={card.balance}
                            cardNumber={card.cardNumber}
                            expirationDate={card.expirationDate}
                            paymentSystem={card.paymentSystem}
                            size="large"
                        />
                        <Button variant="primary" onClick={handleOpen}>
                            Перевести с карты на карту
                        </Button>
                    </Stack>
                    <TabContext value={tabValue}>
                        <TabList
                            sx={{
                                minHeight: 'auto',
                                '.MuiTabs-indicator': {
                                    laptop: {
                                        background: colors.secondary200,
                                        height: '3px',
                                        borderRadius: '10px',
                                        display: 'block',
                                    },
                                    mobile: { display: 'none' },
                                },
                                '.MuiTabs-flexContainer': {
                                    borderBottom: `1px solid ${colors.neutral200}`,
                                },
                            }}
                            onChange={handleTabChange}
                        >
                            {tabValues.map((el) => (
                                <Tab
                                    sx={{
                                        p: '0 0 2px 0',
                                        textTransform: 'none',
                                        minWidth: '150px',
                                        minHeight: 'auto',
                                        '&:hover': {
                                            color: colors.primary,
                                        },

                                        '&.Mui-selected': {
                                            color: `${colors.primary} !important`,
                                        },
                                    }}
                                    label={<Typography variant="descriptionSemiBold">{el}</Typography>}
                                    value={el}
                                    key={el}
                                />
                            ))}
                        </TabList>
                        <TabPanel sx={{ p: 0, mt: '32px !important' }} value={tabValues[0]}>
                            <InfoTable data={cardTableData} />
                        </TabPanel>
                        <TabPanel sx={{ p: 0, mt: '8px !important', width: '100%' }} value={tabValues[1]}>
                            <TransactionHistory />
                        </TabPanel>
                    </TabContext>
                </Stack>
            )}

            <ComingSoonModal isOpen={isOpen} onClose={handleClose} />
        </Box>
    );
};
