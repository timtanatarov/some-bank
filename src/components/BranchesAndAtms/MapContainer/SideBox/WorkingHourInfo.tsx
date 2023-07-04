import { Box, Typography } from '@mui/material';

import { colors } from 'src/theme';

type WorkingHourInfoProps = {
    isWorking: boolean;
    workingHours: string;
    isDisabledAccordion: boolean;
};

export const WorkingHourInfo = ({ isWorking, workingHours, isDisabledAccordion }: WorkingHourInfoProps) => (
    <Box sx={{ width: isDisabledAccordion ? '100%' : '185px', display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ color: isWorking ? '#4F9F57' : colors.alert, lineHeight: '24px' }}>
            {isWorking ? 'Открыто' : 'Закрыто'}
        </Typography>

        <Typography sx={{ color: colors.neutral600, lineHeight: '24px', textAlign: 'right' }}>
            {workingHours}
        </Typography>
    </Box>
);
