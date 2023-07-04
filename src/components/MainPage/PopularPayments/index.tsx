import { useMemo, useState } from 'react';

import { Box, Grid, Typography, Skeleton, useTheme } from '@mui/material';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';

import { PopularPayment } from './PopularPayment';

import { paymentsData } from './constants';

export const PopularPayments = () => {
    const theme = useTheme();
    const isLoading = false;
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const skeletons = useMemo(
        () =>
            [0, 0, 0, 0, 0, 0].map((_, i) => (
                <Grid item={true} key={i} mobile={6} tablet={4} laptop={4} desktop={4}>
                    <Skeleton
                        sx={{
                            width: '100%',
                            height: '116px',
                            [theme.breakpoints.down('laptop')]: {
                                minWidth: '135px',
                                maxWidth: 'none',
                                height: '120px',
                            },
                        }}
                        variant="rectangular"
                    />
                </Grid>
            )),
        [theme.breakpoints]
    );

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: '32px' }}>
                Популярные платежи
            </Typography>
            <Grid
                container={true}
                rowSpacing={{ mobile: '8px', tablet: '16px', laptop: '14px', desktop: '14px' }}
                columnSpacing={{ mobile: '16px', tablet: '14px', laptop: '14px', desktop: '14px' }}
            >
                {isLoading
                    ? skeletons
                    : paymentsData.map((item) => (
                          <PopularPayment key={item.title} onClick={handleOpen} title={item.title} icon={item.icon} />
                      ))}
            </Grid>
            <ComingSoonModal isOpen={isOpen} onClose={handleClose} />
        </Box>
    );
};
