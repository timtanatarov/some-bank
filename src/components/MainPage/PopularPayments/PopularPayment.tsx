import { FC } from 'react';

import { Box, Button, Grid, Typography, useTheme } from '@mui/material';

import { colors } from 'src/theme';

type Props = {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
};

export const PopularPayment: FC<Props> = ({ title, onClick, icon }) => {
    const theme = useTheme();
    return (
        <Grid
            item={true}
            key={title}
            mobile={6}
            tablet={4}
            laptop={4}
            desktop={4}
            sx={{
                width: 'auto',
                borderRadius: '4px',
            }}
        >
            <Button
                onClick={onClick}
                variant="textButton"
                key={title}
                sx={{
                    width: '100%',
                    height: '116px',
                    display: 'flex',
                    flexDirection: 'column',
                    background: colors.neutral100,
                    p: '16px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'none',
                        background: colors.neutral100,
                    },
                    [theme.breakpoints.down('laptop')]: {
                        minWidth: '135px',
                        maxWidth: 'none',
                        height: '120px',
                    },
                }}
            >
                <Box sx={{ color: colors.secondary600 }}>{icon}</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <Typography sx={{ textAlign: 'center' }}>{title}</Typography>
                </Box>
            </Button>
        </Grid>
    );
};
