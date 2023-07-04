import { useEffect, useState } from 'react';
import { Stack, Typography, Button, useTheme } from '@mui/material';

import { Input } from 'src/shared/Input';

import { useFormik } from 'formik';

import { useChangePasswordMutation } from 'src/redux/apis/userService';
import { SuccessDialog } from 'src/shared/SuccessDialog';

import { PasswordValidSchema } from './constants';

export const ChangePasswordBlock = () => {
    const theme = useTheme();
    const [isFocusOldPassword, setIsFocusOldPassword] = useState(false);
    const [isFocusNewPassword, setIsFocusNewPassword] = useState(false);
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [changePassword, { isSuccess: isPasswordChanged, isError: isPasswordError, reset }] =
        useChangePasswordMutation();

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: PasswordValidSchema,
        onSubmit: (values) => changePassword({ oldPassword: values.oldPassword, newPassword: values.newPassword }),
    });

    const handleResetForm = formik.resetForm;

    useEffect(() => {
        if (isPasswordChanged) {
            setIsDialogVisible(true);
            handleResetForm();
        }
    }, [isPasswordChanged, handleResetForm]);

    const handleOldPasswordFocus = () => {
        setIsFocusOldPassword(!isFocusOldPassword);
    };
    const handleNewPasswordFocus = () => {
        setIsFocusNewPassword(!isFocusNewPassword);
    };

    const handleDialogClose = () => {
        setIsDialogVisible(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isPasswordError) reset();
        formik.setFieldValue('oldPassword', e.target.value);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing="24px" sx={{ width: '100%' }}>
                <Typography
                    variant="descriptionSemiBold"
                    sx={{
                        [theme.breakpoints.down('laptop')]: {
                            fontSize: '20px',
                            lineHeight: '30px',
                            fontWeight: 400,
                        },
                        [theme.breakpoints.down('tablet')]: { fontSize: '16px', lineHeight: '20px' },
                    }}
                >
                    Изменить пароль авторизации
                </Typography>
                <Stack spacing="16px">
                    <Input
                        id="oldPassword"
                        label="Введите свой старый пароль"
                        fullWidth={true}
                        name="oldPassword"
                        type="password"
                        value={formik.values.oldPassword}
                        onBlur={handleOldPasswordFocus}
                        onFocus={handleOldPasswordFocus}
                        onChange={handleChange}
                        error={!!formik.errors.oldPassword || isPasswordError}
                        helperText={
                            formik.errors.oldPassword ||
                            (isFocusOldPassword &&
                                !formik.values.oldPassword &&
                                `Пароль должен содержать символы следующих групп: 
                заглавные и строчные буквы латиницы, цифры, 
                специальные`) ||
                            (isPasswordError && 'Неверный пароль')
                        }
                    />
                    <Input
                        id="newPassword"
                        label="Введите новый пароль"
                        fullWidth={true}
                        name="newPassword"
                        type="password"
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
                    disabled={
                        !formik.values.oldPassword ||
                        !formik.values.newPassword ||
                        !formik.values.confirmPassword ||
                        !formik.isValid
                    }
                >
                    Сохранить
                </Button>
            </Stack>
            <SuccessDialog isOpen={isDialogVisible} onClose={handleDialogClose} title="Пароль успешно изменен" />
        </form>
    );
};
