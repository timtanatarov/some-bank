import { Box, IconButton, OutlinedInput } from '@mui/material';

import { SearchIcon, DeleteIcon, FiltersIcon } from 'src/shared/icons';

import { colors } from 'src/theme';

type SearchBlockProps = {
    isOpen: boolean;
    inputValue: string;
    onToggle: VoidFunction;
    onOpenClick: VoidFunction;
    onClearInputClick: VoidFunction;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBlock = ({
    onToggle,
    onOpenClick,
    isOpen,
    onInputChange,
    onClearInputClick,
    inputValue,
}: SearchBlockProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignSelf: 'start',
                alignItems: 'center',
                gap: '17px',
                pointerEvents: 'none',
                paddingRight: {
                    tablet: '48px',
                    mobile: '16px',
                },
                width: {
                    laptop: 'auto',
                    mobile: '100%',
                },

                '& > *': {
                    pointerEvents: 'all',
                },
            }}
        >
            <OutlinedInput
                startAdornment={
                    <SearchIcon
                        viewBox="0 0 18 18"
                        sx={{
                            height: '18px',
                            width: '18px',
                            color: isOpen ? colors.primary : 'white',
                            marginRight: '15px',
                            marginLeft: '5px',
                            pointerEvents: 'none',
                        }}
                    />
                }
                endAdornment={
                    inputValue && <DeleteIcon onClick={onClearInputClick} sx={{ '&:hover': { cursor: 'pointer' } }} />
                }
                placeholder="Введите адрес"
                onFocus={() => isOpen || onToggle()}
                value={inputValue}
                onChange={onInputChange}
                sx={{
                    color: isOpen ? colors.primary : 'white',
                    background: isOpen ? 'white' : colors.primary,
                    width: {
                        laptop: '294px',
                        mobile: '100%',
                    },
                    height: '48px',
                    transition: 'all 0.2s ease-in-out',
                    '&> fieldset': {
                        border: `1px solid ${isOpen ? colors.neutral400 : colors.primary} !important`,
                    },
                }}
            />
            <IconButton disableRipple={true} onClick={onOpenClick} sx={{ '&:hover': { background: 'transparent' } }}>
                <FiltersIcon sx={{ color: isOpen ? colors.primary : 'white' }} />
            </IconButton>
        </Box>
    );
};
