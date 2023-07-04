import { FC, useEffect } from 'react';
import { Stack, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useUpdEmailMutation } from 'src/redux/apis/userService';

import { Input } from 'src/shared/Input';

const emailValidationSchema = (oldEmail: string) =>
    Yup.object().shape({
        email: Yup.string()
            .max(320, 'Слишком длинный email')
            .email('Невалидный email')
            .required('Обязательное поле')
            .notOneOf([oldEmail], 'Вы уже используете этот E-mail'),
    });

type ChangeEmailProps = {
    oldEmail: string;
    onReturn: VoidFunction;
};

export const ChangeEmail: FC<ChangeEmailProps> = ({ oldEmail, onReturn }) => {
    const [patchEmail, { isLoading: isEmailUpdating, isSuccess: isEmailSuccess, isError: isEmailError }] =
        useUpdEmailMutation();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: () => emailValidationSchema(oldEmail),
        validateOnChange: false,
        validateOnBlur: true,
        onSubmit: (values) => {},
    });

    const handleClearClick = () => {
        formik.resetForm();
    };

    const handleUpdEmailClick = () => {
        !isEmailUpdating && patchEmail(formik.values.email);
    };

    if (isEmailSuccess) onReturn();

    const { setFieldError } = formik;

    useEffect(() => {
        if (isEmailError) setFieldError('email', 'Кажется, что-то пошло не так, повторите запрос');
    }, [isEmailError, setFieldError]);

    return (
        <Stack direction="column" spacing="24px" alignItems="stretch" mt="40px" sx={{ width: '416px' }}>
            <Input
                id="email"
                type="email"
                label="Введите ваш E-mail"
                name="email"
                fullWidth={true}
                value={formik.values.email}
                onChange={formik.handleChange}
                isClearable={true}
                error={!!formik.errors.email}
                helperText={formik.errors.email}
                onClear={handleClearClick}
                onFocus={() => {
                    formik.setFieldError('email', '');
                }}
                onBlur={formik.handleBlur}
            />
            <Button
                variant="primary"
                fullWidth={true}
                disabled={
                    !formik.values.email || !!formik.errors.email || formik.values.email === oldEmail || isEmailUpdating
                }
                onClick={handleUpdEmailClick}
            >
                Сохранить
            </Button>
            <Button variant="secondary" fullWidth={true} onClick={onReturn}>
                Отмена
            </Button>
        </Stack>
    );
};
