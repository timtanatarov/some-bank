import { CheckRounded } from '@mui/icons-material';
import {
    Access24Icon,
    ArrowDownIcon,
    ArrowRightUpIcon,
    ArrowUpIcon,
    CurrencyIcon,
    TransferIcon,
    WithoutCardIcon,
    WeekendIcon,
    RampIcon,
    ConsultIcon,
    InsuranceIcon,
    ExoticCurrencyIcon,
} from 'src/shared/icons';

import { MarkType } from 'src/redux/apis/infoService/types';

export type branchDataType = {
    [key in keyof MarkType]?: { title: string; icon: React.ReactNode; group: typeof groups[number] };
};

export const groups = ['Основные услуги', 'График работы', 'Дополнительно'];

export const branchData: branchDataType = {
    cashWithdraw: {
        title: 'Снять',
        icon: <ArrowDownIcon />,
        group: 'Основные услуги',
    },
    replenishCard: { title: 'Пополнить', icon: <ArrowUpIcon />, group: 'Основные услуги' },
    acceptPayment: { title: 'Оплатить', icon: <ArrowRightUpIcon />, group: 'Основные услуги' },
    currencyExchange: { title: 'Обмен валют', icon: <CurrencyIcon />, group: 'Основные услуги' },
    moneyTransfer: { title: 'Перевести', icon: <TransferIcon />, group: 'Основные услуги' },
    replenishAccount: {
        title: 'Пополнить без карты',
        icon: <WithoutCardIcon />,
        group: 'Основные услуги',
    },
    isOpen: { title: 'Открыто', icon: <CheckRounded />, group: 'График работы' },
    open24: { title: 'Круглосуточно', icon: <Access24Icon />, group: 'График работы' },
    workAtWeekends: { title: 'Выходные', icon: <WeekendIcon />, group: 'График работы' },
    ramp: { title: 'Пандус', icon: <RampIcon />, group: 'Дополнительно' },
    consultation: { title: 'Консультация', icon: <ConsultIcon />, group: 'Дополнительно' },
    insurance: { title: 'Страхование', icon: <InsuranceIcon />, group: 'Дополнительно' },
    exoticCurrency: {
        title: 'Обмен экзотической валюты',
        icon: <ExoticCurrencyIcon />,
        group: 'Дополнительно',
    },
};

export const getFilterTitle = (filterName: string) => branchData[filterName as keyof MarkType]?.title;

export const getByGroupName = (name: string) =>
    Object.entries(branchData)
        .filter((el) => el[1].group === name)
        .map((el) => ({ value: el[0], title: el[1].title, icon: el[1].icon }));

export const getMarkFilterGroups = (mark: MarkType) =>
    groups
        .map((group) => {
            const options = Object.entries(branchData)
                .filter((el) => el[1].group === group)
                .filter((el) => mark[el[0] as keyof MarkType])
                .map((el) => el[1].title);
            return options.length ? { group, options } : null;
        })
        .filter(Boolean);
