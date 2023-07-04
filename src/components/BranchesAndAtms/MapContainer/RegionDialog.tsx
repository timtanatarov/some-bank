import { FC, useState, SyntheticEvent } from 'react';
import {
    Box,
    Typography,
    Autocomplete,
    InputBase,
    Stack,
    IconButton,
    Dialog,
    createFilterOptions,
    Chip,
    Paper,
} from '@mui/material';

import { styled, useTheme } from '@mui/material/styles';
import { getAllCitiesNames, getPopularCities } from 'src/services/regionLocationService';
import { SearchIcon, DeleteIcon, LocationIcon, CloseIcon } from 'src/shared/icons';
import { splitByFirstMatch } from 'src/utils/splitByFirstMatch';
import { colors } from 'src/theme';

type RegionDialogProps = {
    open: boolean;
    onClose: VoidFunction;
    onAutocompleteSelect: (e: SyntheticEvent, value: string | null) => void;
    onPopularSelect: (e: SyntheticEvent) => void;
    region?: string;
};

export const RegionDialog: FC<RegionDialogProps> = ({
    open,
    onClose,
    onAutocompleteSelect,
    onPopularSelect,
    region = 'Москва',
}) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [isListOpen, setIsListOpen] = useState(false);
    const theme = useTheme();

    const handleToggleList = () => {
        setIsListOpen(!isListOpen);
    };

    const handleChange = (event: SyntheticEvent<Element, Event>, newValue: string | null) => {
        onAutocompleteSelect(event, newValue);
        setInputValue('');
    };

    const handleClearClick = () => {
        setInputValue('');
        setSelectedValue(null);
    };

    const renderThreeStringArr = (arr: string[]) => (
        <>
            {arr[0]}
            <Typography component="span" sx={{ fontWeight: 600, color: colors.primary }}>
                {arr[1]}
            </Typography>
            {arr[2]}
        </>
    );

    const CustomPaper = styled(Paper)({
        borderRadius: 0,
        boxShadow: '4px 4px 16px rgba(194, 194, 194, 0.3)',
    });

    return (
        <Dialog
            open={open}
            maxWidth={false}
            onClose={onClose}
            sx={{
                '& .MuiDialog-container': { backdropFilter: 'blur(8px)' },
                '& .MuiDialog-paper': {
                    [theme.breakpoints.down('tablet')]: {
                        maxWidth: '448px',
                        minWidth: '342px',
                    },
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '490px',
                    height: '440px',
                    zIndex: '1000',
                    background: '#fff',
                    borderRadius: '4px',
                    padding: '60px',
                    [theme.breakpoints.down('tablet')]: {
                        width: '100%',
                        height: 'fit-content',
                        padding: '61px 24px 24px',
                    },
                }}
            >
                <IconButton
                    sx={{ position: 'absolute', top: '16px', right: '16px', color: colors.primary }}
                    onClick={onClose}
                    disableRipple={true}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="subtitle2New" sx={{ display: 'block', marginBottom: '18px' }}>
                    Ваш регион: <Typography variant="subtitle2Semibold">{region}</Typography>
                </Typography>
                <Autocomplete
                    sx={{
                        width: '368px',
                        marginBottom: '32px',
                        [theme.breakpoints.down('tablet')]: {
                            width: 'auto',
                        },
                    }}
                    open={isListOpen}
                    onClose={handleToggleList}
                    onOpen={handleToggleList}
                    PaperComponent={CustomPaper}
                    ListboxProps={{ style: { maxHeight: '230px' } }}
                    value={selectedValue}
                    inputValue={inputValue}
                    noOptionsText={
                        <Stack direction="row">
                            <LocationIcon sx={{ color: colors.primary }} />
                            <Typography sx={{ marginLeft: '12px' }}>Результатов не найдено</Typography>
                        </Stack>
                    }
                    options={getAllCitiesNames()}
                    filterOptions={createFilterOptions({ matchFrom: 'start' })}
                    onChange={handleChange}
                    onInputChange={(e, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    renderInput={(params) => (
                        <InputBase
                            placeholder="Введите название города"
                            ref={params.InputProps.ref}
                            inputProps={params.inputProps}
                            autoFocus={true}
                            sx={{
                                width: '368px',
                                height: '48px',
                                border: `1px solid ${colors.neutral400}`,
                                borderRadius: '4px',
                                '&.Mui-focused': {
                                    borderColor: colors.neutral600,
                                    borderRadius: isListOpen ? '4px 4px 0 0' : '4px',
                                },
                                [theme.breakpoints.down('tablet')]: {
                                    width: '100%',
                                },
                            }}
                            startAdornment={
                                <SearchIcon
                                    viewBox="0 0 18 18"
                                    sx={{
                                        height: '18px',
                                        width: '18px',
                                        color: colors.primary,
                                        marginRight: '15px',
                                        marginLeft: '19px',
                                        pointerEvents: 'none',
                                    }}
                                />
                            }
                            endAdornment={
                                inputValue && (
                                    <DeleteIcon
                                        onClick={handleClearClick}
                                        sx={{ '&:hover': { cursor: 'pointer' }, marginRight: '14px' }}
                                    />
                                )
                            }
                        />
                    )}
                    renderOption={(props, option) => (
                        <Box
                            component="li"
                            sx={{
                                '&.MuiAutocomplete-option': {
                                    minHeight: '32px',
                                    '&.Mui-focused': {
                                        background: 'white',
                                    },
                                    '&:hover': {
                                        color: colors.secondary600,
                                        background: 'white',
                                        '& .MuiTypography-root': {
                                            color: colors.secondary600,
                                            fontWeight: 600,
                                        },
                                    },
                                },
                            }}
                            {...props}
                        >
                            <LocationIcon />
                            <Typography sx={{ marginLeft: '12px', color: colors.neutral600 }}>
                                {inputValue ? renderThreeStringArr(splitByFirstMatch(option, inputValue)) : option}
                            </Typography>
                        </Box>
                    )}
                />
                <Typography variant="subtitle2New" sx={{ display: 'block', fontWeight: '400', marginBottom: '16px' }}>
                    Популярные города
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{
                        flexWrap: 'wrap',
                        gap: '12px',
                        overflow: 'hidden',
                        maxHeight: '156px',
                        [theme.breakpoints.down('tablet')]: {
                            maxHeight: 'fit-content',
                        },
                    }}
                    onClick={onPopularSelect}
                >
                    {getPopularCities().map((city, index) => (
                        <Chip variant="custom" label={city} key={index} />
                    ))}
                </Stack>
            </Box>
        </Dialog>
    );
};
