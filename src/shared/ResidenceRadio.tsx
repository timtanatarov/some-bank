import { FC } from 'react';
import { RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { colors } from 'src/theme';

type ResidenceRadioType = {
    currentResidence: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
};

const radioStyle = {
    pr: '16px',
    color: colors.neutral600,
    '&:hover': { background: 'none' },
    '&.Mui-checked': { color: colors.secondary600 },
};

export const ResidenceRadio: FC<ResidenceRadioType> = ({ currentResidence, onChange, disabled }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value === 'ru');
    };
    return (
        <RadioGroup row={true}>
            <FormControlLabel
                control={
                    <Radio
                        disableRipple={true}
                        disabled={disabled}
                        checked={currentResidence}
                        onChange={handleChange}
                        value="ru"
                        sx={radioStyle}
                    />
                }
                label="Резидент РФ"
                sx={{ mr: '65px' }}
            />
            <FormControlLabel
                control={
                    <Radio
                        disableRipple={true}
                        disabled={disabled}
                        checked={!currentResidence}
                        onChange={handleChange}
                        value="not ru"
                        sx={radioStyle}
                    />
                }
                label="Нерезидент РФ"
            />
        </RadioGroup>
    );
};
