import { FC } from 'react';
import { Stack, Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'src/constants';

import { PageContainer } from './containers/PageContainer';

type ErrorPageNotFoundProps = { subTitle?: string };

export const ErrorPageNotFound: FC<ErrorPageNotFoundProps> = ({ subTitle }) => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate(AppRoutes.mainRoute, { replace: true });
    };
    return (
        <PageContainer theme="white">
            <Stack spacing="44px" sx={{ pt: '228px' }} alignItems="center" justifyContent="center">
                <Typography
                    sx={{
                        fontSize: { laptop: '158px', tablet: '158px', mobile: '138px' },
                        lineHeight: { laptop: '189px', tablet: '189px', mobile: '165px' },
                        fontWeight: '400',
                        background: 'linear-gradient(172.09deg, rgba(176, 222, 181, 0.6) -6.78%, #A6D7AB 77.27%)',
                        webkitBackgroundClip: 'text',
                        webkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                    }}
                >
                    404
                </Typography>
                <Stack spacing="24px" sx={{ maxWidth: '890px' }} alignItems="center">
                    <Typography
                        sx={{
                            fontSize: { laptop: '36px', tablet: '24px' },
                            lineHeight: { laptop: '48px', tablet: '32px' },
                            fontWeight: '600',
                        }}
                    >
                        Ой, кажется что-то пошло не так
                    </Typography>
                    <Typography
                        variant="subtitle2Semibold"
                        sx={{
                            lineHeight: { laptop: '30px', tablet: '30px', mobile: '24px' },
                            fontSize: { laptop: '20px', tablet: '20px', mobile: '16px' },
                            fontWeight: 400,
                            textAlign: 'center',
                        }}
                    >
                        {subTitle}
                    </Typography>
                </Stack>
                <Button variant="primary" sx={{ width: '342px' }} onClick={handleRedirect}>
                    На главную
                </Button>
            </Stack>
        </PageContainer>
    );
};
