import { FC } from 'react';

import { Box } from '@mui/material';

import { colors } from 'src/theme';

export const UserLocationMarker: FC = () => {
    return (
        <Box
            sx={{
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
                width: '60px',
                fontSize: '0.8rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(112, 215, 255, 0.2)',
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    width: '16px',
                    height: '16px',
                    background: '#64D2FF',
                    border: `4px solid ${colors.neutral0}`,
                    borderRadius: '50%',
                    transform: 'rotate(-45deg)',
                }}
            />
        </Box>
    );
};
