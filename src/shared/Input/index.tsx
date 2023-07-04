import React, { useState } from 'react';

import { NumberFormatValues } from 'react-number-format';

import { FormControl, FormHelperText, InputBase, InputLabel, InputBaseProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { DeleteIcon, ShowPassIcon, HidePassIcon } from 'src/shared/icons';

import { colors } from 'src/theme';

import { PhoneInput } from './PhoneInput';

export type InputProps = InputBaseProps & {
    id: string;
    label?: string;
    value?: string;
    type: string;
    helperText?: string | boolean;
    isClearable?: boolean;
    onClear?: VoidFunction;
    defaultMaskedValue?: string;
    onValueChange?: (value: string) => void;
};

export const Input = ({
    id,
    label,
    value,
    type,
    error,
    helperText,
    isClearable,
    onClear,
    onChange,
    onValueChange,
    defaultMaskedValue = '',
    onFocus,
    name,
    ...rest
}: InputProps) => {
    const [isCapslockOn, setIsCapslockOn] = useState<boolean>(false);
    const [isShowPassword, setShowPassword] = useState(false);
    const theme = useTheme();
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        setIsCapslockOn(e.getModifierState('CapsLock'));
    };
    const handleTogglePasswordClick = () => {
        setShowPassword(!isShowPassword);
    };

    const passwordShowButton = isShowPassword ? (
        <HidePassIcon data-testid={`${id}-hideIcon`} onClick={handleTogglePasswordClick} sx={{ cursor: 'pointer' }} />
    ) : (
        <ShowPassIcon data-testid={`${id}-showIcon`} onClick={handleTogglePasswordClick} sx={{ cursor: 'pointer' }} />
    );

    const endAdornmentAttributes =
        value && isClearable && value !== defaultMaskedValue ? (
            <DeleteIcon data-testid={`${id}-deleteIcon`} onMouseDown={onClear} sx={{ cursor: 'pointer' }} />
        ) : !isClearable && type === 'password' ? (
            passwordShowButton
        ) : (
            rest.endAdornment
        );

    const style = {
        'label + &': {
            marginTop: 3,
        },
        '&.MuiInputBase-root': {
            [theme.breakpoints.down('tablet')]: {
                fontSize: '14px',
                lineHeight: '24px',
            },
            height: '44px',
            borderRadius: '4px',
            border: `1px solid ${colors.neutral400}`,
            fontSize: 16,
            padding: '10px 16px',
            fontFamily: 'SF Pro Display, sans-serif',
            '&.Mui-error': {
                border: `1px solid ${colors.alert}`,
            },
            '&.Mui-focused': {
                border: `1px solid ${colors.neutral600}`,
                '&.Mui-error': {
                    border: `1px solid ${colors.alert}`,
                },
            },
        },
    };

    const combinedHelperText = helperText || (isCapslockOn && 'Включен CapsLock');

    return (
        <FormControl variant="standard">
            <InputLabel shrink={true} htmlFor={id}>
                {label}
            </InputLabel>
            {type === 'tel' ? (
                <>
                    <PhoneInput
                        customInput={InputBase}
                        id={id}
                        type="tel"
                        name={name}
                        aria-describedby={`${id}-helper-text`}
                        error={error}
                        format="+7 (###) ### ## ##"
                        allowEmptyFormatting={true}
                        mask="_"
                        value={value}
                        onKeyDown={handleKeyPress}
                        onValueChange={
                            onValueChange
                                ? (values: NumberFormatValues) => {
                                      onValueChange(values.formattedValue);
                                  }
                                : undefined
                        }
                        onFocus={onFocus}
                        endAdornment={endAdornmentAttributes}
                        sx={style}
                        {...rest}
                    />
                    <FormHelperText error={error} id={`${id}-helper-text`}>
                        {helperText}
                    </FormHelperText>
                </>
            ) : (
                <>
                    <InputBase
                        id={id}
                        aria-describedby={`${id}-helper-text`}
                        value={value}
                        type={type === 'password' && isShowPassword ? 'text' : type}
                        onChange={onChange}
                        error={error || isCapslockOn}
                        onKeyDown={handleKeyPress}
                        {...rest}
                        endAdornment={endAdornmentAttributes}
                        inputProps={{ ...rest.inputProps }}
                        sx={style}
                        data-testid={`${id}-inputWrap`}
                    />
                    <FormHelperText
                        error={error || isCapslockOn}
                        id={`${id}-helper-text`}
                        data-testid={`${id}-helpText`}
                    >
                        {combinedHelperText}
                    </FormHelperText>
                </>
            )}
        </FormControl>
    );
};
