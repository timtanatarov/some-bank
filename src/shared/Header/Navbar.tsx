import { Link as RouterLink } from 'react-router-dom';

import { Box, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { colors } from 'src/theme';
import { headerNavItems } from 'src/constants';

import { GuardContainer } from 'src/shared/containers/GuardContainer';
import { ProfileLink } from 'src/shared/ProfileLink';

type MenuItemProps = {
    colorTheme?: 'black' | 'white';
};

export const HeaderNavbar = ({ colorTheme }: MenuItemProps) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '18px',
                flexShrink: 1,
                flexGrow: 2,
                color: colorTheme === 'white' ? colors.primary : colors.neutral0,
                [theme.breakpoints.down('desktop')]: {
                    flexGrow: 0,
                    alignItems: 'start',
                    width: '52vw',
                    marginLeft: '60px',
                    flexDirection: 'column',
                    gap: '44px',
                    color: colors.primary,
                },
                [theme.breakpoints.down('tablet')]: { width: '100vw', marginLeft: '16px' },

                '& > *': {
                    '&:hover': { color: colors.secondary200 },
                },
            }}
        >
            {headerNavItems.map((item, i) => (
                <Box
                    key={item.text}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexShrink: 1,
                        [theme.breakpoints.down('laptop')]: {
                            justifyContent: 'flex-start',
                        },
                    }}
                >
                    <Link
                        data-cy={`header-link-${i}`}
                        component={RouterLink}
                        to={item.path}
                        underline="none"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: 'inherit',
                            alignContent: 'center',
                        }}
                    >
                        <Box sx={{ display: 'flex', mr: 1 }}>{item.icon}</Box>
                        {item.text}
                    </Link>
                </Box>
            ))}
            <GuardContainer withRedirect={false}>
                <ProfileLink />
            </GuardContainer>
        </Box>
    );
};
