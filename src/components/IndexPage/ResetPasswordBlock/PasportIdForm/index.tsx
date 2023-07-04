import { FC } from 'react';
import { useFormik } from 'formik';

import { Box, Button, Stack } from '@mui/material';

import { Input } from 'src/shared/Input';

import { useAppDispatch } from 'src/redux/hooks';

import { clearErrorMessage } from 'src/redux/slices/resetPass';

import { PasportValidSchema } from './constants';

export type PasportIdFormProps = {
    errorMessage?: string;
    onContinue: (value: { passNumber: string }) => void;
};

export const PasportIdForm: FC<PasportIdFormProps> = ({ errorMessage, onContinue }) => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            passNumber: '',
        },
        validationSchema: PasportValidSchema,
        onSubmit: onContinue,
    });

    const handleClearClick = () => {
        formik.setFieldValue('passNumber', '');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (errorMessage) dispatch(clearErrorMessage());
        formik.setFieldValue('passNumber', e.target.value);
    };

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
                <Input
                    id="resetInputs"
                    fullWidth={true}
                    label="Номер паспорта"
                    name="passNumber"
                    value={formik.values.passNumber}
                    type="text"
                    error={!!formik.errors.passNumber || !!errorMessage}
                    helperText={
                        (errorMessage &&
                            'Пользователь с таким номером паспорта не найден. Пожалуйста, проверьте свой номер паспорта или свяжитесь с банком') ||
                        formik.errors.passNumber
                    }
                    onChange={handleChange}
                    isClearable={true}
                    onClear={handleClearClick}
                />
                <Button
                    fullWidth={true}
                    variant="primary"
                    type="submit"
                    disabled={!formik.values.passNumber || !formik.isValid}
                >
                    Продолжить
                </Button>
            </Stack>
        </Box>
    );
};
