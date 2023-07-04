import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import { Box, Button, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { selectAuthToken } from 'src/redux/selectors';
import { useAppSelector } from 'src/redux/hooks';
import { useLogInMutation } from 'src/redux/apis/userService';

import { Input } from 'src/shared/Input';
import { ErrCircleIcon } from 'src/shared/icons';

import { colors } from 'src/theme';
import { AppRoutes } from 'src/constants';

import { LoginSchema } from './constants';

type LoginFormProps = { onResetPasswordClick: VoidFunction; onRegistrationClick: VoidFunction };

export const LoginForm: FC<LoginFormProps> = ({ onResetPasswordClick, onRegistrationClick }) => {
    const [isFocusPassword, setIsFocusPassword] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    const auth = useAppSelector(selectAuthToken);

    const [loginUser, { isLoading, isError }] = useLogInMutation();

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            handleLoginClick(values.phone, values.password);
        },
    });

    useEffect(() => {
        if (auth) {
            navigate(AppRoutes.mainRoute, { replace: true });
        }
    }, [navigate, auth]);

    const handleLoginClick = (phone: string, password: string) => {
        const formattedPhone = phone.replace(/[\s\(\)']/g, '');
        loginUser({
            mobilePhone: formattedPhone,
            password: password,
        });
    };
    const handleChange = (value: string) => {
        formik.setFieldValue('phone', value);
    };

    const handleClearClick = () => {
        formik.setFieldValue('phone', '');
    };

    const handlePasswordFocus = () => {
        setIsFocusPassword(!isFocusPassword);
    };

    const isPhoneInvalid = formik.values.phone.includes('_');

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack
                spacing={4}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '416px',
                    [theme.breakpoints.down('laptop')]: {
                        marginTop: '170px',
                    },
                    [theme.breakpoints.down('tablet')]: {
                        width: '342px',
                        marginTop: '105px',
                    },
                }}
            >
                <Typography
                    sx={{
                        alignSelf: 'flex-start',
                        [theme.breakpoints.down('tablet')]: { fontSize: '20px', lineHeight: '32px' },
                    }}
                    variant="h3"
                >
                    Войти в онлайн-банк
                </Typography>
                <Stack
                    spacing={2}
                    sx={{
                        width: '100%',
                        [theme.breakpoints.down('tablet')]: {
                            width: '342px',
                        },
                    }}
                >
                    {isError && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: '44px',
                                width: '100%',
                                background: colors.alert,
                                color: colors.neutral0,
                                borderRadius: '4px',
                                paddingLeft: '18px',
                            }}
                            data-cy="invalid-auth-message"
                        >
                            <ErrCircleIcon />
                            <Typography sx={{ paddingLeft: '14px' }} variant="descriptionRegular">
                                Неверный логин или пароль
                            </Typography>
                        </Box>
                    )}
                    <Input
                        id="login"
                        fullWidth={true}
                        label="Номер телефона"
                        type="tel"
                        name="phone"
                        defaultMaskedValue="+7 (___) ___ __ __"
                        value={formik.values.phone}
                        onValueChange={handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => formik.setFieldTouched('phone', false)}
                        error={!!formik.errors.phone || isError || (isPhoneInvalid && formik.touched.phone)}
                        helperText={
                            formik.errors.phone ||
                            (isPhoneInvalid &&
                                formik.touched.phone &&
                                'Номер телефона должен быть не короче 10 символов')
                        }
                        isClearable={true}
                        onClear={handleClearClick}
                    />
                    <Input
                        id="password"
                        label="Пароль"
                        name="password"
                        type="password"
                        fullWidth={true}
                        value={formik.values.password}
                        onBlur={handlePasswordFocus}
                        onFocus={handlePasswordFocus}
                        onChange={formik.handleChange}
                        error={!!formik.errors.password || isError}
                        helperText={
                            formik.errors.password ||
                            (isFocusPassword &&
                                !formik.values.password &&
                                `Пароль должен содержать символы следующих групп: 
                        заглавные и строчные буквы латиницы, цифры, 
                        специальные`)
                        }
                    />
                </Stack>
                <Button variant="textButton" onClick={onResetPasswordClick}>
                    Забыли пароль?
                </Button>
                <Button
                    data-cy="button-submit-login"
                    fullWidth={true}
                    variant="primary"
                    disabled={
                        !(formik.values.phone && formik.values.password) ||
                        !formik.isValid ||
                        isLoading ||
                        isPhoneInvalid
                    }
                    type="submit"
                >
                    Войти
                </Button>
                <Box sx={{ display: 'flex' }}>
                    <Typography variant="descriptionRegular">Нет аккаунта?</Typography>
                    <Button variant="textButton" sx={{ ml: '8px' }} onClick={onRegistrationClick}>
                        Зарегистрируйтесь
                    </Button>
                </Box>
            </Stack>
        </form>
    );
};
