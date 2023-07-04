import { Button, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Plate } from 'src/shared/Plate';

import { operationsData } from '../../Operations/constants';
import { Operation } from '../../Operations/Operation';
import { filterTransactions } from '../../utils';

import { TransactionsFilter } from './Filters';

import { SearchTransactions } from './Search';

const MIN_TRANSACTION_SUM = 0;
const MAX_TRANSACTION_SUM = 1000000;

export const TransactionHistory = () => {
    const [searchInput, setSearchInput] = useState('');
    const [transactions, setTransactions] = useState(operationsData);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [status, setStatus] = useState('all');
    const [minValue, setMinValue] = useState(MIN_TRANSACTION_SUM);
    const [maxValue, setMaxValue] = useState(MAX_TRANSACTION_SUM);

    const handleResetToDefault = () => {
        setIsFiltersVisible(false);
        setTransactions(operationsData);
        setMinValue(MIN_TRANSACTION_SUM);
        setMaxValue(MAX_TRANSACTION_SUM);
        setSearchInput('');
        setStatus('all');
    };

    useEffect(() => {
        const foundTransactions = filterTransactions(searchInput, operationsData);
        setTransactions(foundTransactions);
    }, [searchInput]);

    useEffect(() => {
        if (status === 'all') {
            setTransactions(operationsData.filter((item) => item.sum >= minValue && item.sum <= maxValue));
        } else {
            const filteredTransactions = [...operationsData]
                .filter((item) => item.typeName === status)
                .filter((item) => item.sum >= minValue && item.sum <= maxValue);
            setTransactions(filteredTransactions);
        }
    }, [status, minValue, maxValue]);

    return (
        <Stack sx={{ width: '500px' }}>
            {!isFiltersVisible && (
                <SearchTransactions
                    inputValue={searchInput}
                    onOpenClick={() => {
                        setIsFiltersVisible(true);
                        setSearchInput('');
                    }}
                    onInputChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                    onClearInputClick={() => {
                        setSearchInput('');
                    }}
                />
            )}
            <Stack sx={{ mt: '24px' }}>
                {isFiltersVisible && (
                    <TransactionsFilter
                        onClearClick={handleResetToDefault}
                        onShowResultsClick={() => setIsFiltersVisible(false)}
                        onToggleStatus={(status: string) => setStatus(status)}
                        onSliderClick={(minValue: number, maxValue: number) => {
                            setMinValue(minValue);
                            setMaxValue(maxValue);
                        }}
                        resultsLength={transactions.length}
                        minValue={MIN_TRANSACTION_SUM}
                        maxValue={MAX_TRANSACTION_SUM}
                        activeFilter={status}
                    />
                )}
                {!isFiltersVisible &&
                    (transactions.length ? (
                        <Stack spacing={2}>
                            {transactions.slice(0, 10).map((item) => (
                                <Operation
                                    key={item.transferOrderID}
                                    date={item.createadAt}
                                    payeeId={item.payeeId}
                                    sum={item.sum}
                                    typeName={item.typeName}
                                    currencyCode={item.currencyCode}
                                />
                            ))}
                        </Stack>
                    ) : (
                        <Stack justifyContent="center" spacing={2}>
                            <Plate message="Нет подходящих транзакций, пожалуйста, введите другие данные." />
                            <Button variant="primary" onClick={handleResetToDefault}>
                                <Typography>Вернуться к списку транзакций</Typography>
                            </Button>
                        </Stack>
                    ))}
            </Stack>
        </Stack>
    );
};
