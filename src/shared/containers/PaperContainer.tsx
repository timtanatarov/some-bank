import { Box, Paper } from '@mui/material';

export const PaperContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            sx={{
                display: 'grid',
                flex: '1',
                padding: { laptop: '24px 56px 46px 56px', tablet: '24px 56px 44px', mobile: '24px 16px 44px' },
                height: '100%',
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: { tablet: '36px 0', mobile: '24px 0' },
                    height: 'auto',
                    minWidth: '343px',
                }}
            >
                {children}
            </Paper>
        </Box>
    );
};
