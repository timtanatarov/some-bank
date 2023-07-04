import { FC, useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { Input } from 'src/shared/Input';
import { useFormik } from 'formik';

import { ResidenceRadio } from 'src/shared/ResidenceRadio';

import { PersonalInfoFormValidSchema } from './constants';

type PersonalInfoFormType = {
    onContinue: (value: {
        firstName: string;
        lastName: string;
        middleName: string;
        pasNumber: string;
        residence: boolean;
    }) => void;
};

export const PersonalInfoForm: FC<PersonalInfoFormType> = ({ onContinue }) => {
    const [selectedResidence, setSelectedResidence] = useState(true);
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            middleName: '',
            pasNumber: '',
        },
        validationSchema: PersonalInfoFormValidSchema,
        onSubmit: (value) => {
            onContinue({
                firstName: value.firstName,
                lastName: value.lastName,
                middleName: value.middleName,
                pasNumber: value.pasNumber,
                residence: selectedResidence,
            });
        },
    });

    const handleToggleResidence = (currentResidence: boolean) => {
        setSelectedResidence(currentResidence);
    };

    const handleClearClick = (value: string) => {
        formik.setFieldValue(value, '');
    };

    const isButtonDisabled =
        !formik.values.firstName || !formik.values.lastName || !formik.values.pasNumber || !formik.isValid;

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={1.6}>
                <Input
                    id="firstName"
                    fullWidth={true}
                    label="Ваше имя"
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    error={!!formik.errors.firstName}
                    helperText={formik.errors.firstName}
                    onChange={formik.handleChange}
                    isClearable={true}
                    onClear={() => handleClearClick('firstName')}
                />
                <Input
                    id="lastName"
                    fullWidth={true}
                    label="Ваша фамилия"
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    error={!!formik.errors.lastName}
                    helperText={formik.errors.lastName}
                    onChange={formik.handleChange}
                    isClearable={true}
                    onClear={() => handleClearClick('lastName')}
                />
                <Input
                    id="middleName"
                    fullWidth={true}
                    label="Ваше отчество (необязательно)"
                    type="text"
                    name="middleName"
                    value={formik.values.middleName}
                    error={!!formik.errors.middleName}
                    helperText={formik.errors.middleName}
                    onChange={formik.handleChange}
                    isClearable={true}
                    onClear={() => handleClearClick('middleName')}
                />
                <Input
                    id="pasNumber"
                    fullWidth={true}
                    label="Номер паспорта"
                    type="text"
                    name="pasNumber"
                    value={formik.values.pasNumber}
                    error={!!formik.errors.pasNumber}
                    helperText={formik.errors.pasNumber}
                    onChange={formik.handleChange}
                    isClearable={true}
                    onClear={() => handleClearClick('pasNumber')}
                />
                <ResidenceRadio currentResidence={selectedResidence} onChange={handleToggleResidence} />
                <Button
                    sx={{ marginTop: '60px' }}
                    fullWidth={true}
                    variant="primary"
                    type="submit"
                    disabled={isButtonDisabled}
                >
                    Продолжить
                </Button>
            </Stack>
        </Box>
    );
};
