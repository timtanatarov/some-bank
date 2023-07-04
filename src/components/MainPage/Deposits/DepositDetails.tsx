import { useState, ChangeEvent, useMemo } from 'react';
import { Box, Button, Stack, Switch, Typography, Link } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';

import { DepositCard } from 'src/shared/cards/Deposit';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';

import { colors } from 'src/theme';

import { separateStringByN } from 'src/utils/inputFormatters';
import { calculateDurationMonths } from 'src/utils/calculateDurationMonths';

import { BackArrowButton } from 'src/shared/BackArrowButton';
import {
    useGetDepositDetailsQuery,
    useUpdateActiveStatusMutation,
    useUpdateRenewalStatusMutation,
} from 'src/redux/apis/depositService';

import { AppRoutes } from 'src/constants';
import { Plate } from 'src/shared/Plate';

import { useTabTitle } from 'src/hooks/useTabTitle';

import { InfoTable } from 'src/shared/InfoTable';

const switchStyle = {
    pr: 0,
    pl: '18px',
    '& .MuiButtonBase-root': {
        '&.MuiSwitch-switchBase': {
            pl: '18px',
            color: colors.neutral0,
            '&:hover': {
                background: 'none',
            },
            '& + .MuiSwitch-track': {
                background: colors.neutral400,
            },
            '&.Mui-checked': {
                color: colors.secondary600,
                '& + .MuiSwitch-track': {
                    background: colors.secondary200,
                },
            },
        },
    },
};

export const DepositDetails = () => {
    const [open, setOpen] = useState(false);
    const { id = '' } = useParams();
    const { data: depositDetails } = useGetDepositDetailsQuery(id);
    const [updateRenewalStatus] = useUpdateRenewalStatusMutation();
    const [updateActiveStatus, { isError }] = useUpdateActiveStatusMutation();

    useTabTitle(depositDetails?.name || '');
    const handleRenewableStatus = (e: ChangeEvent<HTMLInputElement>) =>
        updateRenewalStatus({
            agreementId: id,
            autoRenewal: e.target.checked,
        });

    const handleDepositRevocation = () => {
        updateActiveStatus({ agreementId: id, accountNumber: depositDetails?.accountNumber });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const depositTableData = useMemo(() => {
        return depositDetails
            ? [
                  { id: 1, title: 'Название депозита', info: `${depositDetails.name}`, copyButton: false },
                  {
                      id: 2,
                      title: 'Номер счета',
                      info: `${separateStringByN(depositDetails.accountNumber, 4)}`,
                      copyButton: true,
                  },
                  {
                      id: 3,
                      title: 'Процентная ставка',
                      info: `${String(depositDetails.interestRate)} %`,
                      copyButton: false,
                  },
                  { id: 4, title: 'Срок действия', info: `Действует до ${depositDetails.endDate}`, copyButton: false },
                  {
                      id: 5,
                      title: 'Капитализация',
                      info: `${depositDetails.capitalization ? 'Предусмотрено' : 'Не предусмотрено'}`,
                      copyButton: false,
                  },
                  {
                      id: 6,
                      title: 'Досрочное расторжение',
                      info: `${depositDetails.revocable ? 'Предусмотрено' : 'Не предусмотрено'}`,
                      copyButton: false,
                  },
              ]
            : null;
    }, [depositDetails]);

    return (
        <Box sx={{ padding: { tablet: '0 36px', mobile: '0 24px' } }}>
            <Stack spacing="44px">
                <Link component={RouterLink} to={AppRoutes.depositsRoute} underline="none">
                    <BackArrowButton sx={{ color: colors.primary, svg: { color: colors.primary } }} />
                </Link>
                {depositDetails === undefined ? (
                    <Plate message="Нет информации по данному депозиту" />
                ) : (
                    <>
                        <Typography variant="subtitle2Semibold" sx={{ lineHeight: '30px' }}>
                            {`Депозит «${depositDetails.name}»`}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Stack spacing="56px" alignItems="flex-start">
                                <Stack spacing="24px" maxWidth="282px">
                                    <DepositCard
                                        currencyCode={depositDetails.currencyCode}
                                        name={depositDetails.name}
                                        amountMin={depositDetails.currentBalance}
                                        durationMonths={calculateDurationMonths(
                                            depositDetails.endDate,
                                            depositDetails.startDate
                                        )}
                                        size="large"
                                    />
                                    <Button
                                        variant="primary"
                                        sx={{ marginTop: '20px' }}
                                        onClick={handleDepositRevocation}
                                    >
                                        Отозвать депозит
                                    </Button>
                                    {isError ? (
                                        <Plate
                                            message="Не удалось отозвать депозит"
                                            sx={{ border: 1, borderColor: colors.alert }}
                                        />
                                    ) : null}
                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                        <Typography variant="descriptionRegular">Автоматическое продление</Typography>
                                        <Switch
                                            sx={switchStyle}
                                            disableRipple={true}
                                            checked={depositDetails.autoRenewal}
                                            onChange={handleRenewableStatus}
                                        />
                                    </Stack>
                                </Stack>
                            </Stack>
                            <InfoTable data={depositTableData} />
                        </Stack>
                    </>
                )}

                <ComingSoonModal isOpen={open} onClose={handleClose} />
            </Stack>
        </Box>
    );
};
