import { Box, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { colors } from 'src/theme';
import { NavItem } from 'src/shared/VerticalNavbar';

type MobileMenuItemProps = NavItem & {
    onClick: VoidFunction;
    outlined?: boolean;
};

export const MobileMenuItem = ({ path, text, icon, onClick, outlined }: MobileMenuItemProps) => {
    return (
        <Link onClick={onClick} to={path} component={RouterLink} underline="none">
            <Box
                sx={{
                    backgroundColor: outlined ? colors.neutral0 : colors.neutral100,
                    pt: 3,
                    pb: { tablet: 3, mobile: 2 },
                    px: 2,
                    border: outlined ? `1px solid ${colors.secondary600}` : 'none',
                    borderRadius: 1,
                    height: {
                        tablet: '140px',
                        mobile: '128px',
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Stack spacing={2} alignItems="center" justifyContent="center">
                    <Box sx={{ color: colors.secondary600, height: '24px', width: '24px' }}>{icon}</Box>
                    <Box
                        sx={{
                            height: '52px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Typography align="center" sx={{ fontSize: '20px', lineHeight: '26px' }}>
                            {text}
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </Link>
    );
};
