import { Box, Stack, Typography } from '@mui/material';
import errorImg from 'src/images/routesError/errorImg.png';
import { colors } from 'src/theme';

import { PaperContainer } from './containers/PaperContainer';

export type ComingSoonPageProps = {
    title: string;
};

export const ComingSoonPage = ({ title }: ComingSoonPageProps) => {
    return (
        <PaperContainer>
            <Typography
                variant="bold24"
                sx={{ color: colors.primary, padding: { tablet: '0 36px', mobile: '0 24px' } }}
            >
                {title}
            </Typography>

            <Stack
                spacing="48px"
                sx={{
                    mt: { laptop: '96px', tablet: '86px', mobile: '64px' },
                    padding: { tablet: '0 36px', mobile: '0 24px' },
                }}
                alignItems="center"
                justifyContent="center"
            >
                <Box component="img" src={errorImg} sx={{ width: '168px', height: '176px', mb: { tablet: '16px' } }} />
                <Stack spacing="24px" alignItems="center" sx={{ textAlign: 'center', color: colors.primary }}>
                    <Typography
                        sx={{
                            fontSize: { laptop: '36px', tablet: '24px', mobile: '20px' },
                            lineHeight: { laptop: '48px', tablet: '32px', mobile: '30px' },
                            fontWeight: '600',
                        }}
                    >
                        Данный раздел находится в стадии разработки.
                    </Typography>
                    <Typography
                        variant="descriptionRegular"
                        sx={{
                            fontSize: { tablet: '20px', mobile: '16px' },
                            lineHeight: { tablet: '30px', mobile: '20px' },
                        }}
                    >
                        Приносим извинения за доставленные неудобства.
                    </Typography>
                </Stack>
            </Stack>
        </PaperContainer>
    );
};
