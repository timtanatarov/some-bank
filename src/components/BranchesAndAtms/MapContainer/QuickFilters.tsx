import { useEffect, FC } from 'react';
import { CurrencyIcon, ArrowUpIcon, ArrowDownIcon, TransferIcon, ArrowRightUpIcon } from 'src/shared/icons';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { QuickFiltersEnum, setQuickFilter } from 'src/redux/slices/branchesAndATMs';
import { selectQuickFilter } from 'src/redux/selectors';
import { theme, colors } from 'src/theme';

const quickFilterData = [
    {
        key: QuickFiltersEnum.cashWithdraw,
        icon: <ArrowDownIcon />,
        name: 'Снять',
    },
    {
        key: QuickFiltersEnum.replenishCard,
        icon: <ArrowUpIcon />,
        name: 'Пополнить',
    },
    {
        key: QuickFiltersEnum.currencyExchange,
        icon: <CurrencyIcon />,
        name: 'Обмен валют',
    },
    {
        key: QuickFiltersEnum.moneyTransfer,
        icon: <TransferIcon />,
        name: 'Перевести',
    },
    {
        key: QuickFiltersEnum.acceptPayment,
        icon: <ArrowRightUpIcon />,
        name: 'Оплатить',
    },
];

const quickFilterButtonStyle = {
    textTransform: 'none',
    mr: '10px',
    paddingLeft: '8px',
    maxHeight: '36px',
    background: colors.primary,
    color: colors.neutral400,
    border: 'none',
    [theme.breakpoints.down('laptop')]: {
        ml: '0',
    },
    [theme.breakpoints.down('tablet')]: {},
    '&.MuiToggleButtonGroup-grouped': {
        '&:first-of-type': {
            borderRadius: '4px',
        },
        '&:not(:first-of-type)': {
            borderRadius: '4px',
        },
    },
    '&.Mui-selected': {
        background: colors.secondary200,
        color: colors.primary,
        '&:hover': {
            background: colors.secondary200,
            color: colors.primary,
        },
    },
    '&:disabled': {
        border: 'none',
        background: colors.primary,
        color: colors.neutral400,
    },
    '&:hover': {
        background: colors.primary,
        color: colors.neutral400,
    },
};

type QuickFiltersProps = { disabledFilters: boolean };

export const QuickFilters: FC<QuickFiltersProps> = ({ disabledFilters }) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const currentFilter = useAppSelector(selectQuickFilter);

    const handleFilterChange = (event: React.MouseEvent<HTMLElement>, newFilter: QuickFiltersEnum | null) => {
        dispatch(setQuickFilter(newFilter));
    };

    useEffect(() => {
        if (disabledFilters) dispatch(setQuickFilter(null));
    }, [dispatch, disabledFilters]);

    return (
        <ToggleButtonGroup
            value={currentFilter}
            exclusive={true}
            onChange={handleFilterChange}
            sx={{
                borderRadius: '4px',
                flexWrap: 'wrap',
                rowGap: '10px',
                [theme.breakpoints.down('laptop')]: {
                    flexWrap: 'nowrap',
                    overflowY: 'hidden',
                    overflowX: 'scroll',
                    whiteSpace: 'nowrap',
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            }}
        >
            {quickFilterData.map((item) => (
                <ToggleButton
                    key={item.key}
                    value={item.key}
                    disableRipple={true}
                    sx={quickFilterButtonStyle}
                    disabled={disabledFilters}
                >
                    {item.icon}
                    <Typography variant="descriptionRegular" sx={{ pl: '8px' }}>
                        {item.name}
                    </Typography>
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};
