import { memo } from 'react';
import { Radio, InputLabel, Box } from '@mui/material';
import { colors } from 'src/theme';

type DotProps = {
    checked: boolean;
    index: number;
    radioChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Dot = memo(({ index, checked, radioChangeHandler }: DotProps) => {
    return (
        <InputLabel
            sx={{
                margin: '0 11px 0 0',
                '&:first-of-type': {
                    marginLeft: '0',
                },
                '&:last-child': {
                    marginRight: '0',
                },
            }}
        >
            <Radio
                checked={checked}
                value={index}
                onChange={radioChangeHandler}
                name="radio-buttons"
                sx={{
                    position: 'absolute',
                    opacity: 0,
                }}
            />
            <Box
                sx={{
                    width: checked ? '40px' : '8px',
                    height: '6px',
                    backgroundColor: colors.secondary200,
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'width 0.5s ease-in-out',
                }}
            />
        </InputLabel>
    );
});
