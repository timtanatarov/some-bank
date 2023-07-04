import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { CreditCard } from 'src/shared/cards/Credit';
import { CreditOrderCard } from 'src/shared/cards/CreditOrder';
import { Box, Link, Skeleton } from '@mui/material';
import { Plate } from 'src/shared/Plate';
import { Slider } from 'src/shared/Slider';

import { colors } from 'src/theme';

import { isServerError } from 'src/utils/isServerError';

import { useGetClientsCreditsQuery, useGetCreditOrdersQuery } from 'src/redux/apis/creditService';

export const CreditSlider: React.FC = () => {
    const clientId = useAppSelector(selectClientId);
    const {
        data: clientsCredits,
        isError: isCreditsError,
        error: creditsError,
        isLoading: isCreditsLoading,
    } = useGetClientsCreditsQuery(clientId);

    const {
        data: clientsCreditOrders,
        isError: isOrdersError,
        isLoading: isCreditOrdersLoading,
    } = useGetCreditOrdersQuery(clientId);

    const isClientsCreditsServerError = isServerError(creditsError);

    if (isOrdersError && isCreditsError) {
        return (
            <Plate
                message={
                    isClientsCreditsServerError
                        ? 'Сервис временно недоступен'
                        : 'На данный момент у вас нет карт. Вы можете ознакомиться с картами и подать заявку на получение.'
                }
                sx={{ margin: '0 36px', borderRadius: '4px', border: `1px solid ${colors.alert}` }}
            />
        );
    }

    if (isCreditOrdersLoading || isCreditsLoading) {
        const skeletons = Array(6)
            .fill('')
            .map((_, i) => (
                <Skeleton key={i} variant="rectangular" sx={{ borderRadius: '12px' }} width={260} height={166} />
            ));

        return (
            <Box>
                <Box sx={{ minHeight: '196px', height: '1px' }}>
                    <Slider children={skeletons} />
                </Box>
            </Box>
        );
    }

    if (clientsCredits?.length || clientsCreditOrders?.length) {
        const resultArray = [];

        if (Array.isArray(clientsCredits) && clientsCredits.length !== 0) {
            resultArray.push(
                ...clientsCredits.map((item) => (
                    <Link to={`${item.creditId}`} key={item.creditId} underline="none" component={RouterLink}>
                        <CreditCard {...item} />
                    </Link>
                ))
            );
        }

        if (Array.isArray(clientsCreditOrders) && clientsCreditOrders.length !== 0) {
            resultArray.push(
                ...clientsCreditOrders
                    .filter((item) => item.status === 'PENDING')
                    .map((item) => <CreditOrderCard key={item.id} {...item} />)
            );
        }

        return (
            <Box>
                <Box sx={{ minHeight: '196px', height: '1px', direction: 'row' }}>
                    <Slider children={resultArray} />
                </Box>
            </Box>
        );
    }

    return (
        <Plate
            message="На данный момент у вас нет кредитов. Вы можете ознакомиться с кредитами и подать заявку на получение."
            sx={{ margin: '0 36px', borderRadius: '4px' }}
        />
    );
};
