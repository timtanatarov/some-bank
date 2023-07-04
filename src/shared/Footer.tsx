import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { MobileStoreButtons } from 'src/shared/MobileStoreButtons';

import { colors } from 'src/theme';

const companyInfo = [
    { 'Юридический адрес': 'РФ, Москва, 147231, Васильевская ул., 4, стр.1' },
    { Телефон: '8 800 777 55 33' },
];

export const Footer = () => {
    return (
        <Box
            sx={{
                paddingBottom: '20px',
                px: {
                    mobile: '18px',
                    tablet: '60px',
                    desktop: '56px',
                },
                display: 'flex',
                flexDirection: {
                    mobile: 'column',
                    desktop: 'row',
                },
                alignItems: {
                    mobile: 'start',
                    desktop: 'center',
                },
                justifyContent: 'space-between',
                gap: '24px',
                background: 'inherit',
            }}
        >
            <Box sx={{ display: 'flex', gap: '8px' }}>
                <Stack>
                    {companyInfo.map((el) => (
                        <Typography
                            variant="descriptionRegular"
                            sx={{ color: colors.neutral600 }}
                            key={Object.keys(el)[0]}
                        >
                            {Object.keys(el)[0]}:
                        </Typography>
                    ))}
                </Stack>
                <Stack>
                    {companyInfo.map((el) => (
                        <Typography variant="descriptionRegular" sx={{ color: 'black' }} key={Object.keys(el)[0]}>
                            {Object.values(el)[0]}
                        </Typography>
                    ))}
                </Stack>
            </Box>
            <MobileStoreButtons />
        </Box>
    );
};
