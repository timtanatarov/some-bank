import React, { FC } from 'react';

import { Box, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from '@mui/material';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { colors } from 'src/theme';

type CombinedSelectProps = {
    options: { code: string; description?: string }[];
    activeOption: string;
    value: string;
    helperText: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onOptionSelect: (e: SelectChangeEvent) => void;
    onFocus?: VoidFunction;
};

export const CombinedSelect: FC<CombinedSelectProps> = ({
    options,
    activeOption,
    value,
    helperText,
    onInputChange,
    onOptionSelect,
    onFocus,
}) => {
    return (
        <Box sx={{ height: '44px', flex: '1 1 auto', display: 'flex', position: 'relative' }}>
            <OutlinedInput
                value={value}
                onChange={onInputChange}
                placeholder={helperText}
                onFocus={onFocus}
                sx={{
                    flex: '1 1 auto',
                    borderRadius: '4px 0 0 4px',
                    '& fieldset': {
                        border: `1px solid ${colors.neutral400} !important`,
                        borderRightColor: 'transparent !important',
                    },
                }}
            />
            <Select
                value={activeOption}
                renderValue={() => <Typography variant="descriptionSemiBold">{activeOption}</Typography>}
                onChange={onOptionSelect}
                sx={{
                    height: '100%',
                    width: '100px',
                    position: 'static',
                    borderRadius: '0 4px 4px 0',
                    border: `1px solid ${colors.neutral400}`,
                    '& fieldset': {
                        border: 'none !important',
                    },
                    '& .MuiBackdrop-root': {
                        cursor: 'default',
                    },
                }}
                onFocus={onFocus}
                MenuProps={{
                    disablePortal: true,
                    sx: {
                        position: 'absolute',
                        width: '100%',

                        '& .MuiPaper-root': {
                            top: '100% !important',
                            left: '0 !important',
                            width: '100%',
                            maxWidth: '100%',
                            maxHeight: 'max-content',
                        },
                    },
                }}
            >
                {options.map((el) => (
                    <MenuItem key={el.code} value={el.code}>
                        <Typography variant="descriptionSemiBold" sx={{ mr: '16px' }}>
                            {el.code}
                        </Typography>
                        <Typography variant="labelRegular12">{el.description}</Typography>
                        {el.code === activeOption && (
                            <CheckRoundedIcon sx={{ color: colors.secondary600, ml: 'auto' }} />
                        )}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};
