import { Box, Paper, Typography, useTheme } from '@mui/material';

import { CurrencyTable } from 'src/shared/CurrencyTable';

import { CardMenu } from './CardMenu';
import { OperationsHistory } from './Operations';
import { PopularPayments } from './PopularPayments';

export const MainContent = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                height: '100%',
                display: 'grid',
                flex: '1 1 auto',
                gridTemplateColumns: 'auto minmax(400px, 448px)',
                gridTemplateRows: '1fr auto',
                gap: '24px',
                padding: '24px 56px 46px 56px',
                [theme.breakpoints.down('laptop')]: {
                    padding: '24px 56px 44px',
                    gridTemplateColumns: '1fr',
                    gridTemplateRows: 'auto',
                },
                [theme.breakpoints.down('tablet')]: {
                    padding: '24px 16px 44px',
                    minWidth: '328px',
                },
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    minWidth: '343px',
                    gridRow: 'span 2',
                    height: { laptop: 'auto', mobile: 'fit-content' },
                }}
            >
                <CardMenu />
                <OperationsHistory />
            </Paper>
            <Paper elevation={0} sx={{ padding: { tablet: '36px', mobile: '24px' } }}>
                <PopularPayments />
            </Paper>
            <Paper
                elevation={0}
                sx={{
                    padding: { tablet: '36px', mobile: '24px' },
                    minWidth: '300px',
                }}
            >
                <Typography variant="bold24" component="h5" sx={{ mb: { laptop: '32px', mobile: '24px' } }}>
                    Курсы валют
                </Typography>
                <CurrencyTable variant="small" />
            </Paper>
        </Box>
    );
};
