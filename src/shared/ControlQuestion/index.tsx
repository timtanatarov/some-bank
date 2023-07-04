import { useState, FC, useEffect } from 'react';

import { Box, Button, Stack, Select, MenuItem, SelectChangeEvent } from '@mui/material';

import { useFormik } from 'formik';

import { Input } from 'src/shared/Input';
import { SelectArrowUpIcon, SuccessIcon } from 'src/shared/icons';

import { colors } from 'src/theme';

import { ControlQuestionValidSchema, MAX_SECURITY_QUESTION_SYMBOLS } from './constants';
import { getHelperText } from './utils';

const itemsList = [
    'Девичья фамилия матери',
    'Имя лучшего друга из детства',
    'Любимая книга',
    'Любимый цвет',
    'Любимое блюдо',
    'Написать свой вопрос',
];

type ControlQuestionPropsType = {
    currentQuestion?: string;
    buttonText?: string;
    onContinue: (value: { securityQuestion: string; securityAnswer: string }) => void;
    error?: boolean;
};

export const ControlQuestion: FC<ControlQuestionPropsType> = ({
    currentQuestion,
    onContinue,
    buttonText = 'Продолжить',
    error,
}) => {
    const [currentItem, setCurrentItem] = useState(() => itemsList[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [isFocusOwnQuestion, setIsFocusOwnQuestion] = useState(false);
    const [isFocusSecurityAnswer, setIsFocusSecurityAnswer] = useState(false);

    const formik = useFormik({
        initialValues: {
            ownQuestion: '',
            securityAnswer: '',
        },
        validationSchema: ControlQuestionValidSchema,
        onSubmit: (value, { resetForm }) => {
            onContinue({
                securityQuestion: value.ownQuestion || currentItem,
                securityAnswer: value.securityAnswer,
            });
            resetForm();
        },
    });

    useEffect(() => {
        if (currentQuestion) {
            if (!itemsList.includes(currentQuestion)) itemsList.push(currentQuestion);
            setCurrentItem(currentQuestion);
        }
        return () => {
            if (itemsList.length > 6) {
                itemsList.pop();
            }
        };
    }, [currentQuestion]);

    const handleChange = (event: SelectChangeEvent) => {
        setCurrentItem(event.target.value);
    };

    const handleOwnQuestionFocus = () => {
        setIsFocusOwnQuestion(!isFocusOwnQuestion);
    };

    const handleSecurityAnswerFocus = () => {
        setIsFocusSecurityAnswer(!isFocusSecurityAnswer);
    };

    const handleToggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleClearClick = (value: string) => {
        formik.setFieldValue(value, '');
    };

    const symbolsOwnQuestionLeft = MAX_SECURITY_QUESTION_SYMBOLS - formik.values.ownQuestion.length;
    const symbolsSecurityAnswerLeft = MAX_SECURITY_QUESTION_SYMBOLS - formik.values.securityAnswer.length;

    const selectStyle = {
        fontSize: 16,
        color: colors.primary,
        '&.MuiOutlinedInput-root fieldset': {
            border: 'none',
        },
        '& .MuiInputBase-input': {
            padding: 0,
            '& .MuiSvgIcon-root': {
                display: 'none',
            },
        },
    };

    const isButtonDisabled =
        (currentItem === 'Написать свой вопрос' && !formik.values.ownQuestion) ||
        !formik.values.securityAnswer ||
        !formik.isValid;

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
                <Select
                    variant="outlined"
                    sx={selectStyle}
                    defaultValue={currentQuestion}
                    value={currentItem}
                    open={isOpen}
                    onClose={handleToggleSelect}
                    onOpen={handleToggleSelect}
                    onChange={handleChange}
                    IconComponent={(props) => <SelectArrowUpIcon {...props} />}
                >
                    {itemsList.map((item, index) => (
                        <MenuItem
                            disableRipple={true}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                '&.MuiMenuItem-root': {
                                    '&.Mui-selected': { background: 'none', fontWeight: 600 },
                                },
                            }}
                            key={index}
                            value={item}
                        >
                            {item}
                            {currentItem === item && <SuccessIcon />}
                        </MenuItem>
                    ))}
                </Select>
                {currentItem === 'Написать свой вопрос' && (
                    <Input
                        id="ownQuestion"
                        label="Введите контрольный вопрос"
                        type="text"
                        name="ownQuestion"
                        fullWidth={true}
                        isClearable={true}
                        multiline={true}
                        value={formik.values.ownQuestion}
                        onBlur={handleOwnQuestionFocus}
                        onFocus={handleOwnQuestionFocus}
                        error={symbolsOwnQuestionLeft < 0 || !!formik.errors.ownQuestion}
                        helperText={getHelperText({
                            isFocus: isFocusOwnQuestion,
                            text: 'Вопрос',
                            symbolCount: symbolsOwnQuestionLeft,
                            currentValue: formik.values.ownQuestion,
                            errorText: formik.errors.ownQuestion,
                        })}
                        onChange={formik.handleChange}
                        onClear={() => handleClearClick('ownQuestion')}
                    />
                )}
                <Input
                    id="securityAnswer"
                    label="Введите ответ на контрольный вопрос"
                    type="text"
                    name="securityAnswer"
                    fullWidth={true}
                    isClearable={true}
                    onBlur={handleSecurityAnswerFocus}
                    onFocus={handleSecurityAnswerFocus}
                    value={formik.values.securityAnswer}
                    error={symbolsSecurityAnswerLeft < 0 || !!formik.errors.securityAnswer || error}
                    helperText={
                        getHelperText({
                            isFocus: isFocusSecurityAnswer,
                            text: 'Ответ',
                            symbolCount: symbolsSecurityAnswerLeft,
                            currentValue: formik.values.securityAnswer,
                            errorText: formik.errors.securityAnswer,
                        }) ||
                        (error && 'Что-то не так, повторите отправку')
                    }
                    onChange={formik.handleChange}
                    onClear={() => handleClearClick('securityAnswer')}
                />

                <Button
                    sx={{ marginTop: '60px' }}
                    fullWidth={true}
                    variant="primary"
                    type="submit"
                    disabled={isButtonDisabled}
                >
                    {buttonText}
                </Button>
            </Stack>
        </Box>
    );
};
