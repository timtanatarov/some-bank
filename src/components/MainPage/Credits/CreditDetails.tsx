import { useState, useMemo } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';

import { Box, Stack, Typography, Button, Link } from '@mui/material';

import { separateStringByN, formatAmountOutput } from 'src/utils/inputFormatters';

import { BackArrowButton } from 'src/shared/BackArrowButton';

import { AppRoutes } from 'src/constants';
import { colors } from 'src/theme';

import { useGetCreditInfoQuery } from 'src/redux/apis/creditService';

import { CreditCard } from 'src/shared/cards/Credit';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';
import { Plate } from 'src/shared/Plate';

import { useTabTitle } from 'src/hooks/useTabTitle';

import { InfoTable } from 'src/shared/InfoTable';

export const CreditDetails = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { id = '' } = useParams();
    const { data: creditDetails, isError, isLoading } = useGetCreditInfoQuery(id);

    useTabTitle(creditDetails?.name || '');

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const creditTableData = useMemo(() => {
        return creditDetails
            ? [
                  {
                      id: 1,
                      title: 'Сумма кредита',
                      info: `${formatAmountOutput(String(creditDetails.principalDebt))} RUB`,
                      copyButton: false,
                  },
                  {
                      id: 2,
                      title: 'Срок действия кредита',
                      info: String(creditDetails.terminationDate),
                      copyButton: false,
                  },
                  { id: 3, title: 'Ставка годовых', info: `${creditDetails.interestRate}%`, copyButton: false },
                  {
                      id: 4,
                      title: 'Номер договора',
                      info: separateStringByN(String(creditDetails.accountNumber), 4),
                      copyButton: true,
                  },
                  { id: 5, title: 'Номер счета', info: separateStringByN('1234123412341234', 4), copyButton: true },
              ]
            : null;
    }, [creditDetails]);

    if (isError) {
        return <Plate message="Произошла ошибка" />;
    }

    if (isLoading) {
        return <Plate message="Загружаем данные" />;
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
            <Stack spacing="44px">
                <Link component={RouterLink} to={AppRoutes.creditsRoute} underline="none">
                    <BackArrowButton sx={{ color: colors.primary, svg: { color: colors.primary } }} />
                </Link>
                {!creditDetails ? (
                    <Plate message="Нет информации по данному кредиту" />
                ) : (
                    <>
                        <Typography variant="subtitle2Semibold" sx={{ lineHeight: '30px' }}>
                            {creditDetails.name}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Stack spacing="56px" alignItems="flex-start">
                                <Stack spacing="24px" maxWidth="282px">
                                    <CreditCard
                                        name={creditDetails.name}
                                        currencyCode="RUB"
                                        principalDebt={creditDetails.principalDebt}
                                        size="large"
                                    />
                                    <Button variant="primary" onClick={handleOpen}>
                                        Пополнить
                                    </Button>
                                    <Button variant="secondary" onClick={handleOpen}>
                                        Погасить досрочно
                                    </Button>
                                </Stack>
                            </Stack>
                            <Stack>
                                <Plate
                                    message={`Необходимо оплатить ${creditDetails.paymentInterest.toFixed(2)} RUB, до ${
                                        creditDetails.paymentDate
                                    }`}
                                />
                                <InfoTable data={creditTableData} />
                            </Stack>
                        </Stack>
                    </>
                )}
            </Stack>
            <ComingSoonModal isOpen={isOpen} onClose={handleClose} />
        </Box>
    );
};
