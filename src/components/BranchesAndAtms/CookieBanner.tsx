import React, { FC } from 'react';

import { Stack, Typography, Button, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { colors } from 'src/theme';

type CookieBannerProps = {
    onClose: React.MouseEventHandler<HTMLButtonElement>;
};

export const CookieBanner: FC<CookieBannerProps> = ({ onClose }) => {
    const theme = useTheme();
    const { isLaptop, isDesktop } = useMatchesScreen();
    const isLaptopOrDesktopSize = isLaptop || isDesktop;
    return (
        <Stack
            direction={isLaptopOrDesktopSize ? 'row' : 'column'}
            sx={{
                padding: '24px',
                margin: '0 56px',
                borderRadius: '4px',
                boxShadow: '0px 2px 6px rgba(130, 168, 188, 0.08), 0px 5px 10px rgba(0, 67, 101, 0.08)',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                position: 'absolute',
                zIndex: '2000',
                bottom: '84px',
                left: '0',
                right: '0',
                backgroundColor: colors.neutral0,
                [theme.breakpoints.down('laptop')]: {
                    margin: '0 60px',
                    bottom: '60px',
                    gap: '24px',
                },
                [theme.breakpoints.down('tablet')]: {
                    padding: '16px 16px 24px',
                    margin: '0 16px',
                    bottom: '44px',
                },
            }}
        >
            <Typography
                variant="descriptionRegular"
                sx={{
                    alignItems: 'center',
                    [theme.breakpoints.down('laptop')]: {
                        width: '100%',
                        textAlign: 'center',
                    },
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: '14px',
                        lineHeight: '20px',
                    },
                }}
            >
                A-Tink Bank защищает персональные данные пользователей и обрабатывает Cookies только для персонализации
                сервисов. Запретить обработку Cookies можно в настройках Вашего браузера. Пожалуйста, ознакомьтесь с{' '}
                <Link
                    href="#"
                    underline="hover"
                    sx={{
                        textDecoration: 'underline',
                    }}
                >
                    Условиями обработки персональных данных
                </Link>{' '}
                и{' '}
                <Link
                    href="#"
                    underline="hover"
                    sx={{
                        textDecoration: 'underline',
                    }}
                >
                    Cookies
                </Link>
                .
            </Typography>
            <Button onClick={onClose} variant="primary" sx={{ flexShrink: 0 }}>
                Закрыть
            </Button>
        </Stack>
    );
};
