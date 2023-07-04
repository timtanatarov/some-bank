import { Stack } from '@mui/material';

import { MobileStoreButtons } from 'src/shared/MobileStoreButtons';
import { useTheme } from '@mui/material/styles';

export const DownloadAppBlock = () => {
    const theme = useTheme();
    return (
        <Stack
            spacing={2}
            sx={{
                display: 'flex',
                width: '339px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                [theme.breakpoints.down('tablet')]: {
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '30px',
                },
            }}
        >
            <MobileStoreButtons />
        </Stack>
    );
};
