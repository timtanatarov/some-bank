import { Box, Stack, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AccessTimeIcon, PhoneIcon } from 'src/shared/icons';

import { colors } from 'src/theme';

type CallsInfoProps = {
    title: string;
    subTitle?: string;
    workTime: string;
    phoneNumber: string;
};

export const CallsInfo = ({ title, subTitle, workTime, phoneNumber }: CallsInfoProps) => {
    const theme = useTheme();
    return (
        <Stack sx={{ width: { desktop: '361px', tablet: '375px' }, whiteSpace: 'pre-wrap' }}>
            <Typography variant="subtitle2Semibold" sx={{ width: { tablet: 'fit-content', mobile: '275px' } }}>
                {title}
            </Typography>
            {subTitle && (
                <Typography
                    variant="descriptionRegular"
                    sx={{
                        width: '318px',
                        height: '72px',
                        mt: 1,
                        color: colors.neutral600,
                        [theme.breakpoints.down('laptop')]: {
                            height: 'fit-content',
                        },
                    }}
                >
                    {subTitle}
                </Typography>
            )}
            <Box
                sx={{
                    display: 'flex',
                    mt: '24px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '16px' }}>
                    <PhoneIcon />
                </Box>

                <Link href={`tel:${phoneNumber}`} underline="none">
                    <Typography variant="subtitle2Semibold" sx={{ lineHeight: '30px', color: colors.primary }}>
                        {phoneNumber}
                    </Typography>
                </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'start', mt: { tablet: '16px', mobile: '8px' } }}>
                {workTime && (
                    <Box sx={{ display: 'flex', marginRight: '16px' }}>
                        <AccessTimeIcon />
                    </Box>
                )}
                <Typography variant="descriptionRegular" sx={{ width: '242px', color: colors.primary }}>
                    {workTime}
                </Typography>
            </Box>
        </Stack>
    );
};
