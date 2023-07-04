import { FC, useState, useEffect } from 'react';

import { Box, Stack, Button } from '@mui/material';

import { useFormik } from 'formik';

import { useAppDispatch } from 'src/redux/hooks';

import { useGetSmsCodeQuery, userService } from 'src/redux/apis/userService';

import { formatPhoneNumberOutput } from 'src/utils/inputFormatters';

import { ExtraInfo } from '../../components/IndexPage/StepwiseFormContainer';

import { SmsCodeInput } from './SmsCodeInput';
import { SmsTimer } from './SmsTimer';

export type SmsCodeFormProps = {
    errorMessage?: string;
    onContinue: (value: { smsCode: string }) => void;
    extraInfo?: ExtraInfo;
};

export const SmsCodeForm: FC<SmsCodeFormProps> = ({ onContinue, extraInfo }) => {
    const [tryCounter, setTryCounter] = useState(3);
    const [isSmsCodeError, setIsSmsCodeError] = useState(false);
    const { data, isSuccess, refetch } = useGetSmsCodeQuery(extraInfo?.mobilePhone);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(userService.util.resetApiState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess) alert(data?.verificationCode);
    }, [data, isSuccess]);

    const formik = useFormik({
        initialValues: {
            smsCode: '',
        },
        validationSchema: '',
        onSubmit: (value) => {
            if (data?.verificationCode === value.smsCode) {
                setIsSmsCodeError(false);
                onContinue({ smsCode: value.smsCode });
            }
        },
    });

    const setFormikSmsCode = (value: string) => formik.setFieldValue('smsCode', value, true);

    const handleRefreshSms = () => {
        setIsSmsCodeError(false);
        setTryCounter(3);
        refetch();
    };

    const handleCheckSmsCode = () => {
        if (data?.verificationCode !== formik.values.smsCode) {
            setIsSmsCodeError(true);
            if (tryCounter !== 0) {
                setTryCounter((prev) => prev - 1);
            }
        }
    };

    const inputPhone = extraInfo ? extraInfo.mobilePhone.slice(1) : '';

    const sendedText =
        extraInfo?.currentBlock === 'signUp'
            ? `Мы отправили СМС с 6-значным кодом подтверждения на номер ${formatPhoneNumberOutput(inputPhone)}`
            : 'На ваш номер телефона отправлен 6-значный код подтверждения';

    const smsErrorHelperText =
        isSmsCodeError && tryCounter !== 0
            ? `Неверный код. У Вас осталось ${tryCounter} попытк${tryCounter === 1 ? 'а' : 'и'}`
            : isSmsCodeError && 'Слишком много неудачных попыток. Вы можете запросить код повторно через 10 минут.';

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Stack spacing={1}>
                <SmsCodeInput
                    inputLength={6}
                    sendedText={sendedText}
                    error={isSmsCodeError}
                    helperText={smsErrorHelperText}
                    onInputFinished={setFormikSmsCode}
                />
                <SmsTimer minutes={0} seconds={30} tryCounter={tryCounter} onRefreshSms={handleRefreshSms} />
            </Stack>
            <Button
                fullWidth={true}
                disabled={!tryCounter}
                variant="primary"
                onClick={handleCheckSmsCode}
                type="submit"
                sx={{ mt: 3 }}
            >
                Продолжить
            </Button>
        </Box>
    );
};
