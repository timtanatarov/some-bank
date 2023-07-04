import { Box, Container, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useAppSelector } from 'src/redux/hooks';
import { selectAuthToken } from 'src/redux/selectors';

import { PageContainer } from 'src/shared/containers/PageContainer';

import { colors } from 'src/theme';

import { CallsInfo } from './CallsInfo';

export const ContactsPage = () => {
    const theme = useTheme();
    const auth = useAppSelector(selectAuthToken);

    return (
        <PageContainer hasFooter={true} theme="white" headerPosition="static">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack
                    sx={{
                        minHeight: '659px',
                        maxWidth: auth ? '1004px' : '976px',
                        margin: auth ? '18px 56px 0px 82px' : '61px auto 0px',
                        padding: auth ? '56px 124px 56px 56px' : '56px',
                        rowGap: '56px',
                        alignItems: 'center',
                        backgroundColor: colors.neutral0,
                        borderRadius: '4px',
                        [theme.breakpoints.down('desktop')]: {
                            width: 'auto',
                            height: '840px',
                            margin: '24px 60px 0px',
                            padding: '44px',
                        },
                        [theme.breakpoints.down('tablet')]: {
                            width: 'auto',
                            height: '747px',
                            margin: '16px 16px 0px',
                            padding: '24px 16px 34px 24px',
                            rowGap: '32px',
                        },
                    }}
                >
                    <Typography variant="bold24" align="left" sx={{ width: '100%' }}>
                        Телефоны контакт-центра
                    </Typography>
                    <Container
                        maxWidth="laptop"
                        sx={{
                            height: '100%',
                            padding: '0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                        }}
                    >
                        <Stack
                            direction="row"
                            sx={{
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                rowGap: {
                                    laptop: '0',
                                    tablet: '46px',
                                    mobile: '32px',
                                },
                                gap: {
                                    desktop: auth ? '102px' : '133px',
                                },
                                mb: {
                                    desktop: '126px',
                                },
                            }}
                        >
                            <CallsInfo
                                title="Для физических лиц"
                                subTitle="Консультации по продуктам, учетная запись и информация о транзакциях"
                                workTime="Ежедневно с 8:00 до 20:00"
                                phoneNumber="8 800 777 55 33"
                            />
                            <CallsInfo
                                title="Поддержка по банковским картам"
                                subTitle={`Активировать или оставить заявку\nна новую карту. Заблокировать карту. Сообщить об утере или краже`}
                                workTime={`Будни с 08:00 до 20:00\nВыходные и праздничные дни\nс 08:00 до 17:00`}
                                phoneNumber="8 957 700 45 28"
                            />
                        </Stack>
                        <Box
                            sx={{
                                margin: {
                                    laptop: '0',
                                    tablet: '0 auto 20px',
                                    mobile: '0',
                                },
                            }}
                        >
                            <Typography
                                textAlign="left"
                                sx={{
                                    maxWidth: '540px',
                                    color: colors.neutral600,
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    [theme.breakpoints.down('laptop')]: {
                                        height: '56px',
                                        marginLeft: '12px',
                                    },
                                    [theme.breakpoints.down('tablet')]: {
                                        width: '260px',
                                        height: '96px',
                                        marginLeft: 0,
                                    },
                                }}
                            >
                                Обратите внимание, все звонки в контакт-центр записываются для обеспечения качества
                                обслуживания
                            </Typography>
                        </Box>
                    </Container>
                </Stack>
            </Box>
        </PageContainer>
    );
};
