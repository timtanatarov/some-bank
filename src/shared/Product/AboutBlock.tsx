import { Stack, Typography } from '@mui/material';
import { colors } from 'src/theme';

export type AboutBlockProps = {
    title: string;
    subtitle: string;
};

export const AboutBlock = ({ title, subtitle }: AboutBlockProps) => {
    return (
        <Stack>
            <Typography variant="subtitle2New" sx={{ fontSize: '32px', lineHeight: '48px' }}>
                {title}
            </Typography>
            <Typography variant="regular14" sx={{ color: colors.neutral600 }}>
                {subtitle}
            </Typography>
        </Stack>
    );
};
