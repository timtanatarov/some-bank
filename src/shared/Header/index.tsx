import { FC } from 'react';

import { AppBar, Toolbar, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { AppRoutes } from 'src/constants';

import { useAppSelector } from 'src/redux/hooks';
import { selectAuthToken } from 'src/redux/selectors';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { ATinkLogo } from '../ATinkLogo';

import { HeaderNavbar } from './Navbar';
import { MobileMenu } from './MobileMenu';

export type HeaderProps = {
    colorTheme?: 'black' | 'white';
    position?: 'absolute' | 'static';
    extraItem?: JSX.Element;
    withBlur?: boolean;
    background?: string;
};

export const Header: FC<HeaderProps> = ({
    colorTheme = 'black',
    background = 'transparent',
    position,
    extraItem,
    withBlur = false,
}) => {
    const theme = useTheme();
    const { isDesktop } = useMatchesScreen();
    const isLoggedIn = !!useAppSelector(selectAuthToken);

    return (
        <AppBar
            data-testid="appBar"
            position={position}
            sx={{
                minHeight: '64px',
                background,
                display: 'flex',
                justifyContent: 'center',
                zIndex: 'auto',
                ...(withBlur
                    ? {
                          '::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              height: '100%',
                              width: '100%',
                              zIndex: 4,
                              background: 'rgba(37, 37, 37, 0.4)',
                              backdropFilter: 'blur(3px)',
                          },
                      }
                    : {}),
                [theme.breakpoints.down('tablet')]: {
                    justifyContent: 'flex-end',
                },
            }}
        >
            <Toolbar
                sx={{
                    ml: 5,
                    mr: '40px',
                    zIndex: 10000,
                    [theme.breakpoints.down('desktop')]: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    },
                    [theme.breakpoints.down('laptop')]: {
                        alignItems: 'flex-start',
                        padding: '0',
                        height: 'auto',
                        margin: '60px 60px 0',
                    },
                    [theme.breakpoints.down('tablet')]: {
                        width: 'auto',
                        margin: '0 16px 20px',
                        alignItems: 'flex-end',
                    },
                }}
            >
                {!isDesktop && <MobileMenu />}
                {!isDesktop && extraItem && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexGrow: 0.25,
                            justifyContent: 'flex-end',
                            [theme.breakpoints.down('laptop')]: {
                                flexGrow: 1.2,
                            },
                            [theme.breakpoints.down('tablet')]: {
                                flexGrow: 0.7,
                            },
                        }}
                    >
                        {extraItem}
                    </Box>
                )}
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 4,
                        minWidth: 454 - 56 + 'px',
                        maxWidth: '60vw',
                        [theme.breakpoints.down('desktop')]: {
                            justifyContent: 'flex-end',
                            flexGrow: 0.25,
                            minWidth: 'auto',
                        },
                    }}
                >
                    <Link
                        component={RouterLink}
                        to={isLoggedIn ? AppRoutes.mainRoute : AppRoutes.indexPageRoute}
                        underline="none"
                    >
                        <ATinkLogo variant="black" size={isDesktop ? 'medium' : 'small'} />
                    </Link>
                </Box>
                {isDesktop && (
                    <Box
                        sx={{
                            display: 'flex',
                            ml: '18px',
                            gap: '18px',
                            flexGrow: 1,
                        }}
                    >
                        {extraItem}
                        <HeaderNavbar colorTheme={colorTheme} />
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};
