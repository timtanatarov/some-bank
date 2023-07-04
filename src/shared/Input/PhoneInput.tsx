import { InputBaseProps, SxProps, Theme } from '@mui/material';

import { usePatternFormat, NumberFormatBase, NumberFormatValues } from 'react-number-format';

import { getIsStartNumber } from './utils';

type PhoneInputProps = {
    customInput: (props: InputBaseProps) => JSX.Element;
    id: string;
    type: 'text' | 'password' | 'tel' | undefined;
    name?: string;
    error?: boolean;
    format: string;
    allowEmptyFormatting: boolean;
    mask: string;
    value?: string;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onValueChange: ((values: NumberFormatValues) => void) | undefined;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    endAdornment: string | number | boolean | JSX.Element | React.ReactFragment | null | undefined;
    sx: SxProps<Theme>;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const PhoneInput = (props: PhoneInputProps) => {
    const { format, ...rest } = usePatternFormat({
        ...props,
        format: '+7 (###) ### ## ##',
    });

    const _format = (currentValue: string) => {
        if (currentValue === '') return format('_');
        const startSymbolOfValue = getIsStartNumber(currentValue[0]);
        const formattedValue = format(currentValue);
        if (currentValue.length === 11 && startSymbolOfValue) {
            return format(currentValue.replace(currentValue[0], ''));
        }

        return formattedValue;
    };

    return <NumberFormatBase format={_format} {...rest} />;
};
