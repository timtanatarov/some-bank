import React, { memo } from 'react';
import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { colors } from 'src/theme';

import { Connector } from './Connector';

import { StepIcon } from './StepIcon';

type StepperProps = {
    'data-testid'?: string;
    activeStep: number;
    gap?: string;
    connectorLeft?: string;
    connectorRight?: string;
    stepData: {
        step: number;
        label: string;
    }[];
};

export const Stepper = memo(
    ({ 'data-testid': dataTestId, activeStep, gap, connectorLeft, connectorRight, stepData }: StepperProps) => {
        const theme = useTheme();
        return (
            <MuiStepper
                data-testid={dataTestId}
                activeStep={activeStep}
                alternativeLabel={true}
                connector={<Connector left={connectorLeft} right={connectorRight} />}
                sx={{
                    width: '100%',
                    padding: '0',
                    justifyContent: 'space-between',
                    gap: { gap },
                    [theme.breakpoints.down('tablet')]: {
                        columnGap: '51px',
                    },
                }}
            >
                {stepData.map((item) => (
                    <Step data-testid={`${dataTestId}-step-${item.step}`} key={item.label} sx={{ width: '80px' }}>
                        <StepLabel
                            StepIconComponent={StepIcon}
                            sx={{
                                '.MuiStepLabel-labelContainer': {
                                    width: '80px',
                                },
                                '.MuiStepLabel-label.MuiStepLabel-alternativeLabel': {
                                    marginTop: '8px',
                                    height: '24px',
                                    width: '80px',
                                    lineHeight: '1',
                                    fontFamily: 'SF Pro Text',
                                    fontWeight: '400',
                                    fontSize: '12px',
                                    color: colors.neutral600,
                                },
                                '.MuiStepLabel-label': {
                                    height: '24px',
                                    lineHeight: '1',
                                    fontFamily: 'SF Pro Text',
                                    fontWeight: '400',
                                    fontSize: '12px',
                                    marginTop: '8px',
                                    color: colors.neutral600,
                                },
                                '.MuiStepLabel-label.Mui-active': {
                                    color: colors.primary,
                                    marginTop: '8px',
                                },
                                '.MuiStepLabel-label.Mui-completed': {
                                    marginTop: '0',
                                    color: colors.primary,
                                },
                            }}
                        >
                            {item.label}
                        </StepLabel>
                    </Step>
                ))}
            </MuiStepper>
        );
    }
);
