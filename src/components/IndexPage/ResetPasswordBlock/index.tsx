import { FC, useEffect, useState } from 'react';

import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
    clearAllResetData,
    requestChangePassword,
    requestPhoneNumber,
    requestVerificateStatus,
} from 'src/redux/slices/resetPass';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { selectResetPassData } from 'src/redux/selectors';

import { BackArrowButton } from 'src/shared/BackArrowButton';
import { Congrats } from 'src/shared/Congrats';
import { Stepper } from 'src/shared/Stepper';
import { StepwiseFormContainer } from 'src/components/IndexPage/StepwiseFormContainer';

import { stepData } from './constants';

type ResetPasswordProps = { onClose: VoidFunction };

export const ResetPasswordBlock: FC<ResetPasswordProps> = ({ onClose }) => {
    const [activeStep, setStep] = useState(0);
    const theme = useTheme();

    const dispatch = useAppDispatch();

    const { mobilePhone, token, successMsg, errorMessage } = useAppSelector(selectResetPassData);

    useEffect(() => {
        if (mobilePhone !== '') {
            setStep((prev) => prev + 1);
        }
    }, [dispatch, mobilePhone]);

    const handleContinue = (value: { passNumber?: string; smsCode?: string; newPassword?: string }) => {
        if (activeStep === 0) {
            dispatch(requestPhoneNumber({ passportNumber: value.passNumber }));
        } else if (activeStep === 1) {
            if (value.smsCode) {
                dispatch(
                    requestVerificateStatus({
                        mobilePhone,
                        smsVerificationCode: value.smsCode,
                        needTokenInReturn: true,
                    })
                );
                setStep((prev) => prev + 1);
            }
        } else if (activeStep === 2) {
            if (successMsg === '' && value.newPassword) {
                dispatch(requestChangePassword({ token, mobilePhone, newPassword: value.newPassword }));
            }
        }
    };

    const handleBack = () => {
        if (activeStep === 2) {
            setStep(activeStep - 1);
        } else if (activeStep === 1) {
            dispatch(clearAllResetData());
            setStep(activeStep - 1);
        } else if (activeStep === 0) {
            onClose();
        }
    };

    return successMsg ? (
        <Box sx={{ width: '416px' }}>
            <Congrats
                title="Пароль успешно изменен"
                bodyText="Пожалуйста, выполните вход повторно"
                buttonText="Войти"
                onClose={onClose}
            />
        </Box>
    ) : (
        <Stack
            spacing={4}
            sx={{
                width: '416px',
                [theme.breakpoints.down('laptop')]: {
                    margin: '150px 0 0',
                },
                [theme.breakpoints.down('tablet')]: {
                    width: '342px',
                    margin: '95px 0 0',
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                }}
            >
                <BackArrowButton onClick={handleBack} />
            </Box>
            <Typography
                variant="h3"
                sx={{ [theme.breakpoints.down('tablet')]: { fontSize: '20px', lineHeight: '32px' } }}
            >
                Восстановление пароля
            </Typography>
            <Stepper
                data-testid="reset-password-stepper"
                activeStep={activeStep}
                stepData={stepData}
                gap="88px"
                connectorLeft="-71px"
                connectorRight="17px"
            />
            <StepwiseFormContainer
                stepData={stepData[activeStep]}
                onContinue={handleContinue}
                errorMessage={errorMessage}
                extraInfo={{ mobilePhone: mobilePhone, currentBlock: 'reset' }}
            />
        </Stack>
    );
};
