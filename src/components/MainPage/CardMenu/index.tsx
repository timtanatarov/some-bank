import { useState, useMemo } from 'react';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { Stack, Typography, Box, Link, Skeleton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';

import { colors } from 'src/theme';

import { Slider } from 'src/shared/Slider';
import { Plate } from 'src/shared/Plate';

import { PaymentCard } from 'src/shared/cards/Payment';

import { useGetClientsCreditCardsQuery } from 'src/redux/apis/creditService';
import { useGetClientsDepositCardsQuery } from 'src/redux/apis/depositService';

import { getCardsData } from './utils';

export const CardMenu = () => {
    const clientId = useAppSelector(selectClientId);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const skeletons = useMemo(
        () =>
            [0, 0, 0, 0, 0].map((_, i) => (
                <Skeleton sx={{ borderRadius: '16px' }} variant="rectangular" key={i}>
                    <PaymentCard
                        type=""
                        currency="RUB"
                        currentBalance={0}
                        cardNumber=""
                        expirationDate=""
                        paymentSystem=""
                    />
                </Skeleton>
            )),
        []
    );

    const { data: depositCards, isLoading: depositCardsIsLoading } = useGetClientsDepositCardsQuery(clientId);
    const { data: creditCards, isLoading: creditCardsIsLoading } = useGetClientsCreditCardsQuery(clientId);

    const preparedCards = useMemo(
        () => (depositCards && creditCards ? getCardsData(depositCards, creditCards) : []),
        [depositCards, creditCards]
    );

    return (
        <Stack spacing={{ laptop: '32px', tablet: '24px' }}>
            <Box
                sx={{
                    margin: {
                        tablet: '36px 36px 0 36px',
                        mobile: '24px 24px 0 24px',
                    },
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="bold24" sx={{ color: colors.primary }}>
                    Мои карты
                </Typography>
                <Link
                    href="#"
                    onClick={handleOpen}
                    underline="none"
                    sx={{ textAlign: 'right', color: colors.neutral600 }}
                >
                    <Typography variant="descriptionRegular">Добавить</Typography>
                </Link>
            </Box>
            <Box sx={{ minHeight: '196px', height: '1px' }}>
                {!preparedCards.length ? (
                    <Plate
                        message="На данный момент у вас нет карт. Вы можете ознакомиться с картами и подать заявку на получение."
                        sx={{ margin: '0 36px', borderRadius: '4px' }}
                    />
                ) : (
                    <Slider>
                        {depositCardsIsLoading || creditCardsIsLoading
                            ? skeletons
                            : preparedCards.map((item) => (
                                  <Link component={RouterLink} to={`${item.id}`} key={item.id} underline="none">
                                      <PaymentCard
                                          key={item.id}
                                          type={item.type}
                                          currency={item.currencyCode}
                                          currentBalance={item.currentBalance}
                                          cardNumber={item.cardNumber}
                                          expirationDate={item.expirationDate}
                                          paymentSystem={item.paymentSystem}
                                      />
                                  </Link>
                              ))}
                    </Slider>
                )}
            </Box>
            <ComingSoonModal isOpen={open} onClose={handleClose} />
        </Stack>
    );
};
