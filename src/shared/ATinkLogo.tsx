import { Box, Typography } from '@mui/material';
import headerLogo from 'src/images/header/headerLogo.svg';

type LogoProps = {
    variant: 'black' | 'white';
    size?: 'medium' | 'small';
};

export const ATinkLogo: React.FC<LogoProps> = ({ variant, size = 'medium' }) => {
    const logoSize = size === 'small' ? '22px' : '40px';
    const extraTypographyStyles =
        size === 'small'
            ? {
                  fontSize: '18px',
                  lineHeight: '22px',
                  ml: 1,
              }
            : {};

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
                data-testid="logo"
                component="img"
                src={headerLogo}
                sx={{
                    width: logoSize,
                    height: logoSize,
                }}
            />
            <Typography
                data-cy="logo-text"
                variant="logo"
                sx={{
                    ml: 2,
                    color: variant === 'black' ? '#252525' : '#FFFFFF',
                    fontWeight: '700',
                    ...extraTypographyStyles,
                }}
            >
                A-Tink
            </Typography>
        </Box>
    );
};
