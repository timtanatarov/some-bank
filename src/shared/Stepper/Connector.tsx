import { styled } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { theme, colors } from 'src/theme';

export const Connector = styled(StepConnector)(({ left, right }: { left?: string; right?: string }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        left: `calc(-50% + ${left})`,
        right: `calc(50% + ${right})`,
        height: '2px',
        color: colors.neutral200,
        border: 'none',
        span: {
            borderColor: colors.neutral200,
        },
        [theme.breakpoints.down('tablet')]: {
            width: '99px',
            left: 'calc(-50% + -34px)',
        },
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: colors.secondary200,
            color: colors.secondary200,
            span: {
                borderColor: colors.secondary200,
                color: colors.secondary200,
            },
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: colors.secondary200,
            color: colors.secondary200,
            span: {
                borderColor: colors.secondary200,
                color: colors.secondary200,
            },
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: colors.neutral200,
        span: {
            borderColor: colors.neutral200,
        },
    },
}));
