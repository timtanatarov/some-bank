import { FC, useState } from 'react';
import { useFormik } from 'formik';

import { Box, Stack, Button } from '@mui/material';

import { Input } from 'src/shared/Input';

import { CreatePasswordValidSchema } from './constants';

export type CreatePasswordFormProps = {
    buttonText?: string;
    errorMessage?: string;
    onContinue: (value: { newPassword: string }) => void;
};

export const CreatePasswordForm: FC<CreatePasswordFormProps> = ({ onContinue, buttonText = 'Продолжить' }) => {
    const [isFocusNewPassword, setIsFocusNewPassword] = useState(false);
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: CreatePasswordValidSchema,
        onSubmit: (value) => {
            onContinue({ newPassword: value.newPassword });
        },
    });

    const handleNewPasswordFocus = () => {
        setIsFocusNewPassword(!isFocusNewPassword);
    };
    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Input
                        id="newPassword"
                        label="Введите новый пароль"
                        name="newPassword"
                        type="password"
                        fullWidth={true}
                        value={formik.values.newPassword}
                        onBlur={handleNewPasswordFocus}
                        onFocus={handleNewPasswordFocus}
                        onChange={formik.handleChange}
                        error={!!formik.errors.newPassword}
                        helperText={
                            formik.errors.newPassword ||
                            (isFocusNewPassword &&
                                !formik.values.newPassword &&
                                `Пароль должен содержать символы следующих групп: 
                        заглавные и строчные буквы латиницы, цифры, 
                        специальные`)
                        }
                    />
                    <Input
                        id="confirmPassword"
                        fullWidth={true}
                        label="Повторите пароль"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        type="password"
                        error={!!formik.errors.confirmPassword}
                        helperText={formik.errors.confirmPassword}
                        onChange={formik.handleChange}
                    />
                </Stack>
                <Button
                    fullWidth={true}
                    variant="primary"
                    type="submit"
                    disabled={!formik.values.newPassword || !formik.values.confirmPassword || !formik.isValid}
                >
                    {buttonText}
                </Button>
            </Stack>
        </Box>
    );
};
