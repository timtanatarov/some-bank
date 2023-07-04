import { Stack, Typography } from '@mui/material';

import { stepDataCLient, stepDataNotCLient } from './RegistrationBlock/constants';

import { stepData } from './ResetPasswordBlock/constants';

export type ExtraInfo = {
    mobilePhone: string;
    currentBlock: string;
};

type StepwiseFormContainerProps = {
    stepData: typeof stepData[number] | typeof stepDataNotCLient[number] | typeof stepDataCLient[number];
    onContinue: (value: {}) => void;
    errorMessage?: string;
    extraInfo?: ExtraInfo;
};

export const StepwiseFormContainer = ({
    stepData,
    onContinue,
    extraInfo,
    errorMessage,
}: StepwiseFormContainerProps) => {
    const FormComponent = stepData.component;
    return (
        <Stack spacing={3}>
            <Typography variant="descriptionSemiBold">{stepData.stepInfo}</Typography>
            <FormComponent errorMessage={errorMessage} onContinue={onContinue} extraInfo={extraInfo} />
        </Stack>
    );
};
