import { Box, IconButton } from '@mui/material';
import { Input } from 'src/shared/Input';

import { SearchIcon, FiltersIcon } from 'src/shared/icons';

import { colors } from 'src/theme';

type SearchTransactionsProps = {
    inputValue: string;
    onOpenClick: VoidFunction;
    onClearInputClick: VoidFunction;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchTransactions = ({
    onOpenClick,
    onInputChange,
    onClearInputClick,
    inputValue,
}: SearchTransactionsProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignSelf: 'start',
                alignItems: 'center',
                gap: '17px',
                pointerEvents: 'none',
                width: '100%',
                '& > *': {
                    pointerEvents: 'all',
                },
            }}
        >
            <Input
                startAdornment={
                    <SearchIcon
                        viewBox="0 0 18 18"
                        sx={{
                            height: '18px',
                            width: '18px',
                            color: colors.primary,
                            marginRight: '15px',
                            marginLeft: '5px',
                            pointerEvents: 'none',
                        }}
                    />
                }
                placeholder="Поиск по транзакциям"
                value={inputValue}
                onChange={onInputChange}
                isClearable={true}
                onClear={onClearInputClick}
                fullWidth={true}
                id="transactionsSearch"
                type="input"
            />
            <IconButton
                disableRipple={true}
                onClick={onOpenClick}
                sx={{
                    '&:hover': { background: 'transparent' },
                    mt: 3,
                }}
            >
                <FiltersIcon sx={{ color: colors.primary }} />
            </IconButton>
        </Box>
    );
};
