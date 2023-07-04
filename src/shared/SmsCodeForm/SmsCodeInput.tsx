import React, { useState, useEffect, useRef } from 'react';
import { Box, FormHelperText, Input } from '@mui/material';
import { colors } from 'src/theme';

type SmsCodeInputProps = {
    inputLength: number;
    sendedText: string;
    error: boolean;
    helperText: string | boolean;
    onInputFinished: (value: string) => void;
};

const cutAllButDigits = (str: string) => str.replace(/\D/g, '');

export const SmsCodeInput = ({ inputLength, sendedText, error, helperText, onInputFinished }: SmsCodeInputProps) => {
    const [code, setCode] = useState('');
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const activeInputRef = useRef<HTMLInputElement>();

    useEffect(() => {
        activeIndex !== null && activeInputRef.current?.focus();
    }, [activeIndex]);

    //We only want code value in dependency array, so linter is disabled, since it wants to add callback in array, which causes infinite rerenders
    useEffect(() => {
        if (code.length === 6 && !/\D/.test(code) && onInputFinished) {
            onInputFinished(code);
        } else {
            onInputFinished('');
        }
    }, [code]); //eslint-disable-line

    const handleCellChange = (i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = cutAllButDigits(e.target.value);
        const isDeletionCase = !e.target.value;
        const isOverwritingCase = !!(code[i] && code[i] !== ' ' && val);

        if (isOverwritingCase) return;

        if (val) {
            setActiveIndex(i > code.length ? code.length + 1 : i + 1);
            setCode((value) => value.slice(0, i) + val[val.length - 1] + value.slice(i + 1));
        } else if (isDeletionCase) {
            i === code.length - 1
                ? setCode((value) => value.slice(0, -1))
                : setCode((value) => value.slice(0, i) + ' ' + value.slice(i + 1));
        }
    };

    const handleKeyDown = (i: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && (code[i] === ' ' || !code[i]) && activeIndex) {
            e.preventDefault();
            e.stopPropagation();
            setActiveIndex(i - 1);
        }
    };
    const handlePaste = (e: React.ClipboardEvent) => {
        const pastedText = cutAllButDigits(e.clipboardData.getData('Text')).slice(0, inputLength);
        setCode(pastedText);
        setActiveIndex(pastedText.length === inputLength ? inputLength - 1 : pastedText.length);
    };

    return (
        <Box sx={{ width: 'min-content' }}>
            <Box
                component="label"
                htmlFor="cell0"
                sx={{
                    display: 'block',
                    fontFamily: 'SF Pro Text',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '24px',
                    marginBottom: '16px',
                    color: colors.neutral600,
                }}
            >
                {sendedText}
            </Box>
            <Box sx={{ display: 'flex', gap: '12px' }} onPaste={handlePaste}>
                {Array(inputLength)
                    .fill(0)
                    .map((el, i) => (
                        <Input
                            key={i}
                            type="tel"
                            id={'cell' + i}
                            inputProps={{
                                sx: {
                                    textAlign: 'center',
                                    fontFamily: 'SF Pro Text',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    lineHeight: '32px',
                                },
                            }}
                            autoComplete="off"
                            inputRef={i === activeIndex ? activeInputRef : null}
                            disableUnderline={true}
                            value={code[i] === ' ' ? '' : code[i] || ''}
                            onChange={handleCellChange(i)}
                            onKeyDown={handleKeyDown(i)}
                            onPaste={(e) => e.preventDefault()}
                            sx={{
                                height: '44px',
                                width: '47px',
                                textAlign: 'center',
                                background: `linear-gradient(172.09deg, rgba(241, 241, 241, 0.6) -6.78%, ${colors.neutral200} 93.9%)`,
                                borderRadius: '4px',
                            }}
                        />
                    ))}
            </Box>
            <FormHelperText
                error={error}
                sx={{
                    fontFamily: 'SF Pro Text',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '24px',
                    marginTop: '8px',
                }}
            >
                {helperText}
            </FormHelperText>
        </Box>
    );
};
