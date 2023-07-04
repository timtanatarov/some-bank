import { Box, styled } from '@mui/material';
import { StepIconProps } from '@mui/material/StepIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { colors } from 'src/theme';

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ ownerState }) => ({
    color: colors.neutral200,
    ...(ownerState.active && {
        color: '#A6D7AB',
    }),
    '& .StepIcon-completedIcon': {
        color: '#A6D7AB',
        width: 20,
        height: 20,
    },
    '& .StepIcon-circle': {
        marginTop: '4px',
        width: 16,
        height: 16,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

export const StepIcon = ({ active, completed, className }: StepIconProps) => {
    return (
        <StepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <CheckCircleIcon className="StepIcon-completedIcon" viewBox="2 2 20 20" />
            ) : (
                <Box className="StepIcon-circle" />
            )}
        </StepIconRoot>
    );
};
