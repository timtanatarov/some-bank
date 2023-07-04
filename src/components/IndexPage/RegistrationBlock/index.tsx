import { useState, FC } from 'react';

import { Box, Stack, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { useCreateNewUserMutation, useCreateUserMutation } from 'src/redux/apis/userService';
import { selectRegistrationData } from 'src/redux/selectors';

import { BackArrowButton } from 'src/shared/BackArrowButton';
import { Congrats } from 'src/shared/Congrats';
import { Stepper } from 'src/shared/Stepper';
import { StepwiseFormContainer } from 'src/components/IndexPage/StepwiseFormContainer';

import { clearDataExcludingPhone } from 'src/redux/slices/registration';

import { stepDataCLient, stepDataNotCLient } from './constants';

import { UserPhoneCheckForm } from './UserPhoneCheckForm';

export type RegContinueType = {
    firstName?: string;
    lastName?: string;
    middleName?: string;
    pasNumber?: string;
    residence?: boolean;
    newPassword?: string;
    securityQuestion?: string;
    securityAnswer?: string;
    smsCode?: string;
};

type RegistrationBlockProps = { onClose: VoidFunction; isOpen: boolean };

export const RegistrationBlock: FC<RegistrationBlockProps> = ({ onClose, isOpen }) => {
    const [activeStep, setStep] = useState(0);
    const [userInfo, setUserInfo] = useState<RegContinueType>({
        firstName: '',
        lastName: '',
        middleName: '',
        pasNumber: '',
        residence: true,
        newPassword: '',
        securityQuestion: '',
        securityAnswer: '',
    });
    const [isConfirmedUser, setIsConfirmedUser] = useState(false);
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const { mobilePhone, clientStatus } = useAppSelector(selectRegistrationData);
    const [createNewUser, { isSuccess: isNewUserSuccess }] = useCreateNewUserMutation();
    const [createUser, { isSuccess: isUserSuccess }] = useCreateUserMutation();

    const sendNewUser = async (
        mobilePhone: string,
        user: RegContinueType,
        securityQuestion?: string,
        securityAnswer?: string
    ) => {
        await createNewUser({
            mobilePhone: mobilePhone,
            passwordEncoded: user.newPassword,
            securityQuestion: securityQuestion,
            securityAnswer: securityAnswer,
            email: '',
            firstName: user.firstName,
            lastName: user.lastName,
            middleName: user.middleName,
            identificationPassportNumber: user.pasNumber,
            residentOfRussia: user.residence,
        });
    };

    const sendUser = async (
        mobilePhone: string,
        password?: string,
        securityQuestion?: string,
        securityAnswer?: string
    ) => {
        await createUser({
            phoneNumber: mobilePhone,
            passwordEncoded: password,
            securityQuestion: securityQuestion,
            securityAnswer: securityAnswer,
            email: '',
        });
    };

    const handleContinue = (value: RegContinueType) => {
        if (activeStep === 0) {
            setStep((prev) => prev + 1);
        } else if (activeStep === 1) {
            if (clientStatus === 'NOT_REGISTERED') {
                setUserInfo((state) => ({
                    ...state,
                    newPassword: value.newPassword,
                }));
                setStep((prev) => prev + 1);
            } else {
                setUserInfo((state) => ({
                    ...state,
                    firstName: value.firstName,
                    lastName: value.lastName,
                    middleName: value.middleName,
                    pasNumber: value.pasNumber,
                    residence: value.residence,
                }));
                setStep((prev) => prev + 1);
            }
        } else if (activeStep === 2) {
            if (clientStatus === 'NOT_REGISTERED') {
                sendUser(mobilePhone, userInfo.newPassword, value.securityQuestion, value.securityAnswer);
            } else {
                setUserInfo((state) => ({
                    ...state,
                    newPassword: value.newPassword,
                }));
                setStep((prev) => prev + 1);
            }
        } else if (activeStep === 3) {
            sendNewUser(mobilePhone, { ...userInfo }, value.securityQuestion, value.securityAnswer);
        }
    };

    const handleBack = () => {
        if (activeStep >= 1) {
            setStep(activeStep - 1);
        } else if (activeStep === 0 && isConfirmedUser) {
            dispatch(clearDataExcludingPhone());
            setIsConfirmedUser(false);
        } else if (!isConfirmedUser) {
            onClose();
        }
    };

    return isNewUserSuccess || isUserSuccess ? (
        <Box sx={{ width: '416px' }}>
            <Congrats
                title="Поздравляем!"
                bodyText="Вы успешно зарегистрировались в А-Tink bank"
                buttonText="Продолжить"
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
                Регистрация
            </Typography>
            {!isConfirmedUser ? (
                <UserPhoneCheckForm onConfirmedUser={() => setIsConfirmedUser(true)} />
            ) : (
                <>
                    <Stepper
                        activeStep={activeStep}
                        stepData={clientStatus === 'NOT_REGISTERED' ? stepDataCLient : stepDataNotCLient}
                        gap={clientStatus === 'NOT_REGISTERED' ? '88px ' : '0'}
                        connectorLeft={clientStatus === 'NOT_REGISTERED' ? '-71px' : '16px'}
                        connectorRight={clientStatus === 'NOT_REGISTERED' ? '17px ' : '16px'}
                    />
                    <StepwiseFormContainer
                        stepData={
                            clientStatus === 'NOT_REGISTERED'
                                ? stepDataCLient[activeStep]
                                : stepDataNotCLient[activeStep]
                        }
                        onContinue={handleContinue}
                        extraInfo={{ mobilePhone: mobilePhone, currentBlock: 'signUp' }}
                    />
                </>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="descriptionRegular">Уже есть аккаунт?</Typography>
                <Button variant="textButton" sx={{ ml: '8px' }} onClick={onClose}>
                    Войти
                </Button>
            </Box>
        </Stack>
    );
};
