import { useState } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { PageContainer } from 'src/shared/containers/PageContainer';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';
import { colors } from 'src/theme';

import { useTabTitle } from 'src/hooks/useTabTitle';

import { ResetPasswordBlock } from './ResetPasswordBlock';
import { Carousel } from './Carousel';
import { LoginForm } from './LoginForm';
import { DownloadAppBlock } from './DownloadAppBlock';
import { carouselData } from './constants';
import { RegistrationBlock } from './RegistrationBlock';

export const IndexPage = () => {
    const [isResetPage, setIsResetPage] = useState(false);
    const [isRegistrationPage, setIsRegistrationPage] = useState(false);
    const theme = useTheme();
    const { isMobile, isTablet } = useMatchesScreen();
    const isLowerThanLaptop = isMobile || isTablet;
    const handleToggleReset = () => {
        setIsResetPage(!isResetPage);
    };
    const handleToggleRegistration = () => {
        setIsRegistrationPage(!isRegistrationPage);
    };

    useTabTitle(isRegistrationPage ? 'Регистрация' : 'Вход');

    return (
        <PageContainer
            theme="black"
            headerPosition={isLowerThanLaptop || isTablet ? 'static' : 'absolute'}
            headerProps={{ background: 'white' }}
        >
            <Box
                component="section"
                sx={{
                    position: 'relative',
                    background:
                        'radial-gradient(ellipse 55% 67% at 118.47% 0%, hsla(60, 60%, 61%, 0.35), transparent), radial-gradient(ellipse 49.44% 81.4% at 13% 11.5%, #105651 20%, transparent), radial-gradient(ellipse 50% 70% at 102.57% 119.14%,hsla(60, 60%, 61%, 0.3), transparent ) #1E1E1E',
                    overflow: 'hidden',
                    [theme.breakpoints.down('laptop')]: {
                        height: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'visible',
                    },
                    [theme.breakpoints.down('tablet')]: {
                        height: 'auto',
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        background: colors.primary,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        [theme.breakpoints.down('laptop')]: {
                            display: 'block',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100vh',
                            width: '624px',
                            minWidth: '448px',
                            background: 'white',
                            [theme.breakpoints.down('laptop')]: {
                                width: '100%',
                                background: 'white',
                                pt: 0,
                                pb: '20px',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            },
                            [theme.breakpoints.down('tablet')]: {
                                width: '100%',
                                minWidth: '360px',
                            },
                        }}
                    >
                        {isResetPage ? (
                            <ResetPasswordBlock onClose={handleToggleReset} />
                        ) : isRegistrationPage ? (
                            <RegistrationBlock onClose={handleToggleRegistration} isOpen={isRegistrationPage} />
                        ) : (
                            <LoginForm
                                onResetPasswordClick={handleToggleReset}
                                onRegistrationClick={handleToggleRegistration}
                            />
                        )}
                        {isLowerThanLaptop && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    mb: 3,
                                    [theme.breakpoints.down('tablet')]: {
                                        width: '339px',
                                        height: '88px',
                                        padding: '0',
                                        margin: '0 auto',
                                    },
                                }}
                            >
                                <DownloadAppBlock />
                            </Box>
                        )}
                    </Box>
                    <Box
                        sx={{
                            width: '626px',
                            height: '100vh',
                            marginLeft: '55px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            position: 'relative',
                            [theme.breakpoints.down('desktop')]: {
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            },
                            [theme.breakpoints.down('laptop')]: {
                                width: '100vw',
                                height: 'max-content',
                                margin: '60px auto',
                            },
                            [theme.breakpoints.down('tablet')]: {
                                width: '375px',
                                margin: 'auto',
                                justifyContent: 'center',
                            },
                        }}
                    >
                        <Carousel carouselData={carouselData} hasSwitchDots={true} />
                        {!isLowerThanLaptop && (
                            <Box
                                sx={{
                                    position: 'relative',
                                    right: '199px',
                                    display: 'flex',
                                    width: '32%',
                                    alignSelf: 'flex-end',
                                    justifyContent: 'flex-end',
                                    pr: 3,
                                }}
                            >
                                <DownloadAppBlock />
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </PageContainer>
    );
};
