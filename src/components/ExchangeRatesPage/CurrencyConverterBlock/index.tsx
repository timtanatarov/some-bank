import { FC, useMemo, useState, useEffect } from 'react';

import { SelectChangeEvent, Stack } from '@mui/material';

import { useGetCurrenciesQuery } from 'src/redux/apis/currencies';
import { formatInputToSpacingString } from 'src/utils/inputFormatters';

import {
    convertForward,
    convertBackward,
    getCurrencyName,
    rubData,
    currencyData,
} from 'src/services/exchangeRatesService/currencyData';

import { TransferIcon } from 'src/shared/icons';

import { CombinedSelect } from './CombinedSelect';

type CurrencyConverterBlockProps = {
    size?: 'small' | 'medium' | 'wide';
};

export const CurrencyConverterBlock: FC<CurrencyConverterBlockProps> = ({ size = 'wide' }) => {
    const { data } = useGetCurrenciesQuery(undefined, {
        selectFromResult: ({ data }) => ({
            data: data
                ? [
                      ...data
                          .filter((el) => el.currencyCode in currencyData)
                          .map((el) => ({
                              code: el.currencyCode,
                              rusName: getCurrencyName(el.currencyCode),
                              buyingRub: el.buyingRateNew / el.unit,
                              sellingRub: el.sellingRateNew / el.unit,
                          })),
                      rubData,
                  ]
                : [rubData],
        }),
    });

    const [fromCurrency, setFromCurrency] = useState(data[0].code);
    const [toCurrency, setToCurrency] = useState(data[0].code);
    const [convertDirection, setConvertDirection] = useState<'from' | 'to'>('from');

    const [amountToConvert, setAmountToConvert] = useState('');
    const [convertedPrice, setConvertedPrice] = useState('');

    const optionsOfSelect = useMemo(() => data.map((el) => ({ code: el.code, description: el.rusName })), [data]);

    const convertFunction = convertDirection === 'from' ? convertForward : convertBackward;
    const setCurrencyValue = convertDirection === 'to' ? setAmountToConvert : setConvertedPrice;

    const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConvertDirection('from');
        const value = e.target.value.replace('.', ',');
        if (!value) {
            setAmountToConvert('');
            setConvertedPrice('');
        }
        const formattedValue = formatInputToSpacingString(value);
        if (formattedValue) {
            setAmountToConvert(formattedValue);
            setConvertedPrice(convertForward(formattedValue, fromCurrency, toCurrency, data));
        }
    };

    const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConvertDirection('to');
        const value = e.target.value.replace('.', ',');
        if (!value) {
            setConvertedPrice('');
            setAmountToConvert('');
        }
        const formattedValue = formatInputToSpacingString(value);
        if (formattedValue) {
            setConvertedPrice(formattedValue);
            setAmountToConvert(convertBackward(formattedValue, fromCurrency, toCurrency, data));
        }
    };

    const handleFromCurrencySelect = (e: SelectChangeEvent) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencySelect = (e: SelectChangeEvent) => {
        setToCurrency(e.target.value);
    };

    //eslint is disabled since we want this effect only when currency changes
    useEffect(() => {
        setCurrencyValue(
            convertFunction(
                convertDirection === 'from' ? amountToConvert : convertedPrice,
                fromCurrency,
                toCurrency,
                data
            )
        );
    }, [fromCurrency, toCurrency]); //eslint-disable-line

    return (
        <Stack direction="row" sx={{ paddingTop: '24px', alignItems: 'center', gap: '52px', position: 'relative' }}>
            <Stack
                spacing={size === 'wide' ? '24px' : '16px'}
                direction={size === 'wide' ? 'row' : 'column'}
                sx={{ alignItems: size === 'wide' ? 'center' : 'stretch', flexGrow: '1' }}
            >
                <CombinedSelect
                    value={amountToConvert}
                    helperText="Введите сумму"
                    options={optionsOfSelect}
                    activeOption={fromCurrency}
                    onInputChange={handleFromInputChange}
                    onOptionSelect={handleFromCurrencySelect}
                />

                {size === 'wide' && <TransferIcon sx={{ transform: 'rotate(90deg)' }} />}

                <CombinedSelect
                    value={convertedPrice}
                    helperText="Введите сумму"
                    options={optionsOfSelect}
                    activeOption={toCurrency}
                    onInputChange={handleToInputChange}
                    onOptionSelect={handleToCurrencySelect}
                />
            </Stack>
            {size !== 'wide' && (
                <TransferIcon
                    sx={{
                        transform: 'rotate(90deg)',
                        ...(size === 'small' && {
                            position: 'absolute',
                            right: '0px',
                            top: '-28px',
                        }),
                    }}
                />
            )}
        </Stack>
    );
};
