import { Box, Typography, SxProps } from '@mui/material';

import { colors } from 'src/theme';

export const Plate = ({ message, sx }: { message: string; sx?: SxProps }) => (
    <Box
        sx={{
            p: '10px 20px',
            display: 'flex',
            background: colors.neutral200,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '4px',
            ...sx,
        }}
    >
        <Typography variant="descriptionRegular" sx={{ textAlign: 'center' }}>
            {message}
        </Typography>
    </Box>
);
