import { rest } from 'msw';

import { USER_SERVICE_URL } from 'src/constants';

import { MOCK_NOTIFICATIONS, MOCK_USER_INFO, MOCK_TOKEN_DATA } from './constants';

const defaultUserInfo = {
    id: '144fa0a7-b136-4685-91a9-ce22b70885fc',
    firstName: 'Иван',
    lastName: 'Иванов',
    middleName: 'Иванович',
    mobilePhone: '+79997776655',
    residentOfRussia: true,
    securityQuestion: 'Любимая мамба',
    imageUrl: 'Not found image',
};

const defaultNotifications = {
    email: 'mockemail@astondevs.ru',
    smsNotification: false,
    pushNotification: false,
    emailSubscription: false,
};

interface Payload {
    password: string;
    mobilePhone: string;
}

export const userServiceHandlers = [
    rest.post(`${USER_SERVICE_URL}login`, async (req, res, ctx) => {
        const payload: Payload = await req.json();

        if (payload.mobilePhone === '+79999999999' && payload.password === 'qwerty*7H') {
            return res(
                ctx.json({
                    token: MOCK_TOKEN_DATA.token,
                    refreshToken: MOCK_TOKEN_DATA.refreshToken,
                })
            );
        } else {
            return res(
                ctx.status(403),

                ctx.json({
                    errorMessage: `User with '${payload.mobilePhone}' not found`,
                })
            );
        }
    }),

    rest.get(`${USER_SERVICE_URL}refreshtoken`, (req, res, ctx) => {
        return res(
            ctx.json({
                accessToken: MOCK_TOKEN_DATA.accessToken,
                refreshToken: MOCK_TOKEN_DATA.refreshToken,
                tokenType: 'Bearer',
            })
        );
    }),

    rest.get(`${USER_SERVICE_URL}client-info`, (req, res, ctx) => {
        let result;

        const sessionData = sessionStorage.getItem(MOCK_USER_INFO);
        if (!sessionData) {
            sessionStorage.setItem(MOCK_USER_INFO, JSON.stringify(defaultUserInfo));
            result = defaultUserInfo;
        } else {
            result = JSON.parse(sessionData);
        }

        return res(ctx.json(result));
    }),
    rest.post(`${USER_SERVICE_URL}client-info/photo`, (req, res, ctx) => {
        sessionStorage.setItem(
            MOCK_USER_INFO,
            JSON.stringify({
                ...defaultUserInfo,
                imageUrl:
                    'https://img.freepik.com/free-photo/selective-focus-of-a-black-and-white-adorable-cat-with-its-tongue-out_181624-35744.jpg?size=626&ext=jpg&ga=GA1.2.684065112.1681741474',
            })
        );

        return res(ctx.status(200));
    }),
    rest.delete(`${USER_SERVICE_URL}client-info/photo`, (req, res, ctx) => {
        sessionStorage.setItem(MOCK_USER_INFO, JSON.stringify(defaultUserInfo));
        return res(ctx.status(204));
    }),

    rest.post(`${USER_SERVICE_URL}registration/user-profile/new`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),

    rest.patch(`${USER_SERVICE_URL}registration/user-profile`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),

    rest.get(`${USER_SERVICE_URL}security/session/otp/phone`, (req, res, ctx) => {
        return res(
            ctx.json({
                verificationCode: '793037',
            })
        );
    }),

    rest.get(`${USER_SERVICE_URL}auth/user/settings/notifications/all`, (req, res, ctx) => {
        let result;

        const sessionData = sessionStorage.getItem(MOCK_NOTIFICATIONS);
        if (!sessionData) {
            sessionStorage.setItem(MOCK_NOTIFICATIONS, JSON.stringify(defaultNotifications));
            result = defaultNotifications;
        } else {
            result = JSON.parse(sessionData);
        }

        return res(ctx.json(result));
    }),

    rest.patch(`${USER_SERVICE_URL}auth/user/settings/notifications/email`, (req, res, ctx) => {
        const sessionData = sessionStorage.getItem(MOCK_NOTIFICATIONS);
        if (sessionData) {
            const notifications = JSON.parse(sessionData);
            req.json().then(({ notificationStatus }) => {
                notifications.emailSubscription = notificationStatus;
                sessionStorage.setItem(MOCK_NOTIFICATIONS, JSON.stringify(notifications));
            });
        }

        return res(ctx.status(200));
    }),

    rest.patch(`${USER_SERVICE_URL}auth/user/settings/notifications/sms`, (req, res, ctx) => {
        const sessionData = sessionStorage.getItem(MOCK_NOTIFICATIONS);
        if (sessionData) {
            const notifications = JSON.parse(sessionData);
            req.json().then(({ smsNotification }) => {
                notifications.smsNotification = smsNotification;
                sessionStorage.setItem(MOCK_NOTIFICATIONS, JSON.stringify(notifications));
            });
        }

        return res(ctx.status(200));
    }),

    rest.patch(`${USER_SERVICE_URL}auth/user/settings/notifications/push`, (req, res, ctx) => {
        const sessionData = sessionStorage.getItem(MOCK_NOTIFICATIONS);
        if (sessionData) {
            const notifications = JSON.parse(sessionData);
            req.json().then(({ pushNotification }) => {
                notifications.pushNotification = pushNotification;
                sessionStorage.setItem(MOCK_NOTIFICATIONS, JSON.stringify(notifications));
            });
        }

        return res(ctx.status(200));
    }),

    rest.patch(`${USER_SERVICE_URL}auth/user/settings/email`, (req, res, ctx) => {
        const sessionData = sessionStorage.getItem(MOCK_NOTIFICATIONS);
        if (sessionData) {
            const notifications = JSON.parse(sessionData);
            req.json().then(({ newEmail }) => {
                notifications.email = newEmail;
                sessionStorage.setItem(MOCK_NOTIFICATIONS, JSON.stringify(notifications));
            });
        }

        return res(ctx.status(200));
    }),

    rest.patch(`${USER_SERVICE_URL}auth/user/settings/controls`, (req, res, ctx) => {
        const sessionData = sessionStorage.getItem(MOCK_USER_INFO);
        if (sessionData) {
            const userInfo = JSON.parse(sessionData);
            req.json().then(({ securityQuestion }) => {
                userInfo.securityQuestion = securityQuestion;
                sessionStorage.setItem(MOCK_NOTIFICATIONS, JSON.stringify(userInfo));
            });
        }
        return res(ctx.status(200));
    }),

    rest.patch(`${USER_SERVICE_URL}auth/user/settings/password`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),

    rest.post(`${USER_SERVICE_URL}security/session/phone`, (req, res, ctx) => {
        return res(ctx.json({ mobilePhone: '+75555555555' }));
    }),

    rest.post(`${USER_SERVICE_URL}security/session/verification`, (req, res, ctx) => {
        return res(
            ctx.json({
                token: MOCK_TOKEN_DATA.token,
                refreshToken: MOCK_TOKEN_DATA.refreshToken,
            })
        );
    }),
];
