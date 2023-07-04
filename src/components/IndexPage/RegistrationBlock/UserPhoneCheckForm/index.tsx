import { useState, useEffect, FC } from 'react';

import { lazilyLoadNameExportedComponent } from 'src/utils/lazilyLoadNameExportedComponent';

import { Box, Button, Checkbox, Stack, Typography } from '@mui/material';
import { useFormik } from 'formik';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { selectRegistrationData } from 'src/redux/selectors';
import { checkUserInfo, clearAllRegisterData } from 'src/redux/slices/registration';

import { Input } from 'src/shared/Input';
import { CheckedIcon, NonCheckedIcon } from 'src/shared/icons';
import { colors } from 'src/theme';

import { Agreement } from './Agreement';

const { PrivacyPolicy } = lazilyLoadNameExportedComponent(
    () => import('src/components/IndexPage/RegistrationBlock/UserPhoneCheckForm/PrivacyPolicy'),
    'PrivacyPolicy'
);
const { TermsAndConditions } = lazilyLoadNameExportedComponent(
    () => import('src/components/IndexPage/RegistrationBlock/UserPhoneCheckForm/TermsAndConditions'),
    'TermsAndConditions'
);

type UserPhoneCheckFormProps = { onConfirmedUser: VoidFunction };

export const UserPhoneCheckForm: FC<UserPhoneCheckFormProps> = ({ onConfirmedUser }) => {
    const [checked, setChecked] = useState(false);
    const dispatch = useAppDispatch();
    const { clientStatus, mobilePhone } = useAppSelector(selectRegistrationData);

    const formik = useFormik({
        initialValues: {
            userPhone: mobilePhone.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2}$)/, '$1 ($2) $3 $4 $5') || '',
        },
        onSubmit: (value) => {
            if (value.userPhone && !isUserPhoneInvalid) {
                dispatch(checkUserInfo({ mobilePhone: value.userPhone.replace(/[\s\(\)']/g, '') }));
            }
        },
    });

    const isUserPhoneInvalid = formik.values.userPhone.includes('_');

    useEffect(() => {
        if (clientStatus && clientStatus !== 'ACTIVE') onConfirmedUser();
    }, [dispatch, clientStatus, onConfirmedUser]);

    const handleClearClick = () => {
        if (clientStatus === 'ACTIVE') dispatch(clearAllRegisterData());
        formik.setFieldValue('userPhone', '');
    };

    const handleChange = (value: string) => {
        if (clientStatus === 'ACTIVE') dispatch(clearAllRegisterData());
        formik.setFieldValue('userPhone', value);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
                <Typography variant="descriptionSemiBold">Введите номер телефона</Typography>
                <Input
                    id="login"
                    label="Номер телефона"
                    type="tel"
                    name="userPhone"
                    defaultMaskedValue="+7 (___) ___ __ __"
                    fullWidth={true}
                    isClearable={true}
                    value={formik.values.userPhone}
                    error={!!formik.errors.userPhone || (isUserPhoneInvalid && formik.touched.userPhone)}
                    helperText={
                        formik.errors.userPhone ||
                        (isUserPhoneInvalid &&
                            formik.touched.userPhone &&
                            'Номер телефона должен быть не короче 10 символов')
                    }
                    onValueChange={handleChange}
                    onBlur={formik.handleBlur}
                    onFocus={() => formik.setFieldTouched('userPhone', false)}
                    onClear={handleClearClick}
                />
                <Box sx={{ display: 'flex', pt: 1, pb: 2 }}>
                    <Checkbox
                        disableRipple={true}
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        icon={<NonCheckedIcon />}
                        checkedIcon={<CheckedIcon />}
                        sx={{ alignSelf: 'flex-start', padding: '0 16px 0 0' }}
                    />
                    <Typography variant="regular14_20" sx={{ color: colors.neutral600 }}>
                        Нажав кнопку «Продолжить», Вы соглашаетесь с
                        <Agreement linkText="Политикой конфиденициальности">
                            <PrivacyPolicy />
                        </Agreement>
                        и
                        <Agreement linkText="Правилами дистанционного банковского обслуживания">
                            <TermsAndConditions />
                        </Agreement>
                    </Typography>
                </Box>
                <Button
                    sx={{ marginTop: '60px' }}
                    fullWidth={true}
                    disabled={!checked || clientStatus === 'ACTIVE' || !formik.values.userPhone || isUserPhoneInvalid}
                    variant="primary"
                    type="submit"
                >
                    Продолжить
                </Button>
            </Stack>
        </form>
    );
};
