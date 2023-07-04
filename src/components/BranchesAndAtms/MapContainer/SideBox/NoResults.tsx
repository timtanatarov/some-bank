import { Stack, Typography, Box } from '@mui/material';

import imageSrc from 'src/images/branchesAndATM/noResultsImage.png';
import { theme } from 'src/theme';

export const NoResults = () => (
    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Stack
            spacing="24px"
            sx={{
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto 0',
                [theme.breakpoints.down('laptop')]: {
                    whiteSpace: 'normal',
                },
                [theme.breakpoints.down('tablet')]: {
                    margin: 'auto 16px',
                },
            }}
        >
            <Box component="img" src={imageSrc} alt="Нет результатов" sx={{ flexGrow: 0, width: '170px' }} />
            <Typography component="p" variant="bold24" sx={{ textAlign: 'center', maxWidth: '260px' }}>
                Результатов не найдено
            </Typography>
            <Typography component="p" variant="subtitle2New" sx={{ textAlign: 'center' }}>
                Пожалуйста, введите другие данные
            </Typography>
        </Stack>
    </Box>
);
