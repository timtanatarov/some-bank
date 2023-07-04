import { Stack, Typography, Paper, Box } from '@mui/material';
import { useAppSelector } from 'src/redux/hooks';
import { selectAuthToken } from 'src/redux/selectors';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { PageContainer } from 'src/shared/containers/PageContainer';
import { CurrencyTable } from 'src/shared/CurrencyTable';

import { CurrencyConverterBlock } from './CurrencyConverterBlock';

export type ConverterData = {
    code: string;
    rusName: string;
    buyingRub: number;
    sellingRub: number;
};

export const ExchangeRatesPage = () => {
    const { isMobile, isTablet, isLaptop } = useMatchesScreen();
    const auth = useAppSelector(selectAuthToken);

    const paperPadding = { mobile: '24px', tablet: '44px', desktop: '56px' };

    const desktopMargin = auth ? '18px 56px 0' : '61px 168px 0';

    return (
        <PageContainer hasFooter={true} theme="white" headerPosition="static">
            <Box
                sx={{
                    margin: { mobile: '40px 16px 0', tablet: '36px 60px 0', desktop: desktopMargin },
                    padding: '0',
                }}
            >
                <Stack spacing="24px" sx={{ maxWidth: '1104px', margin: 'auto' }}>
                    <Paper elevation={0} sx={{ padding: paperPadding }}>
                        <Typography variant="h5">Конвертер валют</Typography>
                        <CurrencyConverterBlock size={isMobile ? 'small' : isTablet || isLaptop ? 'medium' : 'wide'} />
                    </Paper>
                    <Paper elevation={0} sx={{ padding: paperPadding }}>
                        <Typography variant="h5" sx={{ mb: '24px' }}>
                            Курсы валют
                        </Typography>
                        <CurrencyTable variant={isMobile ? 'small' : 'wide'} />
                    </Paper>
                </Stack>
            </Box>
        </PageContainer>
    );
};
