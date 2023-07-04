import { convertToNumber, formatNumberToSpacingString } from 'src/utils/inputFormatters';

import China from 'src/images/flags/China.png';
import Usa from 'src/images/flags/Usa.png';
import Eu from 'src/images/flags/Eu.png';
import Rus from 'src/images/flags/Rus.png';

export type ConverterData = {
    code: string;
    rusName: string;
    buyingRub: number;
    sellingRub: number;
};

export type currencyKeys = keyof typeof currencyData;

export const currencyData = {
    EUR: {
        icon: Eu,
        name: 'Евро',
        symbol: '€',
    },
    USD: {
        icon: Usa,
        name: 'Доллар США',
        symbol: '$',
    },
    CNY: {
        icon: China,
        name: 'Китайский юань',
        symbol: '¥',
    },
    RUB: {
        icon: Rus,
        name: 'Российский рубль',
        symbol: '₽',
    },
};

export const getCurrencyName = (code: string) => currencyData[code as keyof typeof currencyData]?.name;

export const rubData = { code: 'RUB', rusName: getCurrencyName('RUB'), buyingRub: 1, sellingRub: 1 };

export const convertForward = (
    amountToConvert: string,
    fromCurrency: string,
    toCurrency: string,
    data: ConverterData[]
) => {
    if (fromCurrency === toCurrency) return amountToConvert;

    const value = convertToNumber(amountToConvert);
    const rubValue = value * (data.find((el) => el.code === fromCurrency)?.buyingRub || 0);
    const targetData = data.find((el) => el.code === toCurrency);
    const targetCurrencyValue = rubValue / ((Number(targetData?.buyingRub) + Number(targetData?.sellingRub)) / 2 || 1);
    return formatNumberToSpacingString(targetCurrencyValue);
};

export const convertBackward = (
    targetConverted: string,
    fromCurrency: string,
    toCurrency: string,
    data: ConverterData[]
) => {
    if (fromCurrency === toCurrency) return targetConverted;

    const value = convertToNumber(targetConverted);
    const targetData = data.find((el) => el.code === toCurrency);
    const rubValue = ((Number(targetData?.buyingRub) + Number(targetData?.sellingRub)) / 2 || 1) * value;
    const fromValue = rubValue / (data.find((el) => el.code === fromCurrency)?.buyingRub || Infinity);
    return formatNumberToSpacingString(fromValue);
};
