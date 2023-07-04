import { Box, Button, Slider, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { Input } from 'src/shared/Input';
import { ToggleButton } from 'src/shared/ToggleButton';
import { colors } from 'src/theme';
import { sumFormatter } from 'src/utils/sumFormatter';

type TransactionsFilterProps = {
    onClearClick: VoidFunction;
    onShowResultsClick: VoidFunction;
    onToggleStatus: (status: string) => void;
    onSliderClick: (minValue: number, maxValue: number) => void;
    resultsLength: number;
    minValue: number;
    maxValue: number;
    activeFilter: string;
};

const filters = [
    { value: 'all', title: 'Все операции' },
    { value: 'purchase', title: 'Платежи' },
    { value: 'incoming', title: 'Пополнения' },
];

export const TransactionsFilter = ({
    onClearClick,
    onShowResultsClick,
    onToggleStatus,
    onSliderClick,
    resultsLength,
    minValue,
    maxValue,
    activeFilter,
}: TransactionsFilterProps) => {
    const [value, setValue] = useState<number[]>([minValue, maxValue]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        onSliderClick(value[0], value[1]);
    };

    const handleToggleButton = (event: React.MouseEvent<HTMLElement>, status: string) => {
        onToggleStatus(status);
    };

    const getValueText = (value: number) => {
        return sumFormatter(value);
    };

    return (
        <Stack sx={{ padding: '0 24px', width: '100%' }}>
            <Button variant="textButton" onClick={onClearClick} sx={{ alignSelf: 'flex-start', m: '0 0 24px 0' }}>
                Очистить фильтры
            </Button>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {filters.map((el) => (
                    <ToggleButton
                        isActiveToggle={activeFilter === el.value}
                        key={el.value}
                        value={el.value}
                        title={el.title}
                        onToggle={handleToggleButton}
                    />
                ))}
            </Box>
            <Stack
                direction="row"
                alignItems="center"
                spacing={3}
                divider={<Typography sx={{ marginTop: '24px !important' }}> - </Typography>}
            >
                {value.map((el, index) => (
                    <Input key={index} id="slider" type="input" value={sumFormatter(el)} />
                ))}
            </Stack>
            <Slider
                getAriaLabel={getValueText}
                valueLabelDisplay="off"
                value={value}
                onChange={handleChange}
                getAriaValueText={getValueText}
                max={maxValue}
                sx={{
                    color: colors.secondary300,
                    m: '24px 0',
                }}
            />
            <Button variant="primary" onClick={onShowResultsClick} sx={{ width: '100%' }}>
                Показать результаты({resultsLength})
            </Button>
        </Stack>
    );
};
