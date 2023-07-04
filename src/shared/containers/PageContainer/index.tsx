import { FC, ReactNode } from 'react';

import { Box, Stack } from '@mui/material';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { Footer } from 'src/shared/Footer';
import { Header, HeaderProps } from 'src/shared/Header';
import { MainMenu } from 'src/shared/MainMenu';

import { colors } from 'src/theme';

import { GuardContainer } from '../GuardContainer';

type PageContainerProps = {
    hasFooter?: boolean;
    hasSideMenu?: boolean;
    headerProps?: Omit<HeaderProps, 'colorTheme' | 'position'>;
    theme: 'black' | 'white';
    headerPosition?: 'absolute' | 'static';
    children?: ReactNode;
};

export const PageContainer: FC<PageContainerProps> = ({
    hasFooter,
    hasSideMenu = true,
    headerProps,
    theme,
    headerPosition,
    children,
}) => {
    const { isDesktop } = useMatchesScreen();

    return (
        <Stack
            sx={{
                background: colors.neutral100,
                overflowY: 'overlay',
                height: '1px',
                minHeight: '100vh',
                flex: '1 0 auto',
            }}
        >
            <Header colorTheme={theme} position={headerPosition} {...headerProps} />
            <Box
                data-testid="defaultContainer"
                sx={{
                    background: colors.neutral100,
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                }}
            >
                {isDesktop && hasSideMenu && (
                    <GuardContainer withRedirect={false}>
                        <Box
                            sx={{
                                display: 'flex',
                                background: colors.primary,
                                width: '324px',
                                alignSelf: 'stretch',
                                flexShrink: 0,
                                zIndex: 10001,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'space-between',
                                    width: '324px',
                                    position: 'fixed',
                                    height: '100%',
                                    top: 0,
                                    background: colors.primary,

                                    p: '141px 56px 6.3vh',
                                }}
                            >
                                <MainMenu />
                            </Box>
                        </Box>
                    </GuardContainer>
                )}

                <Stack sx={{ width: '100%', justifyContent: 'space-between' }}>
                    <Box
                        sx={{
                            paddingBottom: {
                                tablet: hasFooter ? '28px' : '0px',
                                mobile: hasFooter ? '44px' : '0px',
                            },
                            flexGrow: 1,
                        }}
                    >
                        {children}
                    </Box>

                    {hasFooter && (
                        <Box sx={{ width: '100%', background: 'inherit' }} data-testid="hasFooter">
                            <Footer />
                        </Box>
                    )}
                </Stack>
            </Box>
        </Stack>
    );
};
