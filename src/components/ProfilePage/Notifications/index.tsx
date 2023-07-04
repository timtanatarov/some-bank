import { useState, useEffect } from 'react';

import { Box, Stack, Typography, Switch, useTheme } from '@mui/material';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';
import { colors } from 'src/theme';

import {
    useGetNotificationsQuery,
    useUpdEmailNotificationsMutation,
    useUpdSmsNotificationsMutation,
    useUpdPushNotificationsMutation,
} from 'src/redux/apis/userService';

import { EditIcon } from 'src/shared/icons/Edit';

import { isServerError } from 'src/utils/isServerError';
import { WarningModal } from 'src/shared/WarningModal';

import { ChangeEmail } from './ChangeEmail';

const switchStyle = {
    '& .MuiButtonBase-root': {
        '&.MuiSwitch-switchBase': {
            color: colors.neutral0,
            '&:hover': {
                background: 'none',
            },
            '& + .MuiSwitch-track': {
                background: colors.neutral400,
            },
            '&.Mui-checked': {
                color: colors.secondary600,
                '& + .MuiSwitch-track': {
                    background: colors.secondary200,
                },
            },
        },
    },
};

export const NotificationsSettingsBlock = () => {
    const theme = useTheme();
    const { isMobile, isTablet, isLaptop } = useMatchesScreen();
    const isLowerThanLaptop = isMobile || isTablet;
    const [isEditEmail, setIsEditEmail] = useState(false);
    const [emailSub, setEmailSub] = useState(false);
    const [smsSub, setSmsSub] = useState(false);
    const [pushSub, setPushSub] = useState(false);
    const [isErrorModalOpened, setIsErrorModalOpened] = useState(false);
    const { data: notifications, isFetching, error } = useGetNotificationsQuery();
    const [patchEmailNotifications] = useUpdEmailNotificationsMutation();
    const [patchSmsNotifications] = useUpdSmsNotificationsMutation();
    const [patchPushNotifications] = useUpdPushNotificationsMutation();

    const isNotificationsServerError: boolean = isServerError(error);

    const handleEmailSubChange = () => {
        setEmailSub((sub) => !sub);
        notifications?.email && patchEmailNotifications({ email: notifications.email, notificationStatus: !emailSub });
    };
    const handleSmsSubChange = () => {
        setSmsSub((sub) => !sub);
        notifications && patchSmsNotifications(!smsSub);
    };

    const handlePushSubChange = () => {
        setPushSub((sub) => !sub);
        notifications && patchPushNotifications(!pushSub);
    };

    useEffect(() => {
        if (notifications) {
            setEmailSub(notifications.emailSubscription);
            setPushSub(notifications.pushNotification);
            setSmsSub(notifications.smsNotification);
        }
    }, [notifications]);

    useEffect(() => {
        if (isNotificationsServerError) {
            setIsErrorModalOpened(true);
        }
    }, [isNotificationsServerError]);

    return (
        <Stack spacing="24px" component="form">
            {!(isTablet || isLaptop) && (
                <Typography variant={isLowerThanLaptop ? 'subtitle2Semibold' : 'bold24'}>Уведомления </Typography>
            )}
            <Typography
                variant="descriptionSemiBold"
                sx={{
                    [theme.breakpoints.down('laptop')]: { fontSize: '20px', lineHeight: '30px', fontWeight: 400 },
                    [theme.breakpoints.down('tablet')]: { fontSize: '16px', lineHeight: '20px' },
                }}
            >
                E-mail для получения рассылки новостей
            </Typography>
            {isEditEmail ? (
                <ChangeEmail
                    oldEmail={notifications?.email || ''}
                    onReturn={() => {
                        setIsEditEmail(false);
                    }}
                />
            ) : (
                <>
                    <Stack spacing="8px">
                        <Typography variant="regular14" color={colors.neutral600}>
                            Ваш E-mail
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Typography variant="descriptionRegular">
                                {isFetching && !notifications
                                    ? 'Загрузка...'
                                    : notifications?.email || 'Email не задан'}
                            </Typography>
                            <EditIcon
                                sx={{ cursor: 'pointer', color: colors.secondary800 }}
                                onClick={() => setIsEditEmail(true)}
                            />
                        </Box>
                    </Stack>
                    {[
                        { text: 'E-mail рассылка', checked: emailSub, onChange: handleEmailSubChange },
                        {
                            text: 'SMS-уведомления',
                            checked: smsSub,
                            onChange: handleSmsSubChange,
                        },
                        {
                            text: 'PUSH-уведомления',
                            checked: pushSub,
                            onChange: handlePushSubChange,
                        },
                    ].map((item) => (
                        <Stack direction="row" spacing="8px" key={item.text} alignItems="center">
                            <Typography variant="descriptionRegular">{item.text}</Typography>
                            <Switch
                                sx={switchStyle}
                                disableRipple={true}
                                checked={item.checked}
                                onChange={item.onChange}
                            />
                        </Stack>
                    ))}
                </>
            )}
            {isNotificationsServerError && (
                <WarningModal
                    message="Сервис временно недоступен."
                    isOpen={isErrorModalOpened}
                    onClose={() => setIsErrorModalOpened(false)}
                />
            )}
        </Stack>
    );
};
