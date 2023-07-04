import { createApi } from '@reduxjs/toolkit/query/react';

import { USER_SERVICE_URL, REFRESH_TOKEN_LIFETIME_SECONDS } from 'src/constants';

import { createBaseQueryWithReauth, TokenResponse } from '../createBaseQueryWithReauth';

import {
    ClientInfoResponse,
    NotificationsResponse,
    RegisterNewUserResponse,
    RegisterNewUserType,
    RegisterUserResponse,
    RegisterUserType,
    SmsCodeResponse,
} from './types';

export const userService = createApi({
    reducerPath: 'userService',
    baseQuery: createBaseQueryWithReauth(USER_SERVICE_URL),
    tagTypes: ['Notifications', 'UserInfo'],
    endpoints: (builder) => ({
        createNewUser: builder.mutation<RegisterNewUserResponse, RegisterNewUserType>({
            query: (newUser) => ({
                url: 'registration/user-profile/new',
                method: 'POST',
                body: newUser,
            }),
        }),
        createUser: builder.mutation<RegisterUserResponse, RegisterUserType>({
            query: (user) => ({
                url: 'registration/user-profile',
                method: 'PATCH',
                body: user,
            }),
        }),
        getSmsCode: builder.query<SmsCodeResponse, string | undefined>({
            query: (mobilePhone) => ({
                url: 'security/session/otp/phone',
                params: {
                    mobilePhone: mobilePhone,
                },
            }),
        }),
        logIn: builder.mutation<string, { mobilePhone: string; password: string }>({
            query: ({ mobilePhone, password }) => ({
                url: 'login',
                method: 'POST',
                headers: { 'Is-Web-Request': 'true' },
                body: { mobilePhone, password },
                credentials: 'include',
            }),
            transformResponse: (response: { token: string; refreshtoken: string }) => response.token,
        }),
        getAuthToken: builder.mutation<string, void>({
            query: () => ({
                url: 'refreshtoken',
                method: 'GET',
                headers: { 'Is-Web-Request': 'true' },
                credentials: 'include',
            }),
            transformResponse: (response: TokenResponse['data']) => response.accessToken,
        }),
        getUserInfo: builder.query<ClientInfoResponse, string>({
            query: (id) => ({
                url: `client-info?clientId=${id}`,
                credentials: 'include',
            }),
            keepUnusedDataFor: REFRESH_TOKEN_LIFETIME_SECONDS,
            providesTags: ['UserInfo'],
        }),
        setClientPhoto: builder.mutation<unknown, { clientId: string; formData: FormData }>({
            query: ({ clientId, formData }) => ({
                url: `client-info/photo?clientId=${clientId}`,
                method: 'POST',
                body: formData,
                credentials: 'include',
            }),
            invalidatesTags: ['UserInfo'],
        }),
        removeClientPhoto: builder.mutation<unknown, { clientId: string }>({
            query: ({ clientId }) => ({
                url: `client-info/photo?clientId=${clientId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['UserInfo'],
        }),
        getNotifications: builder.query<NotificationsResponse, void>({
            query: (_) => ({
                url: 'auth/user/settings/notifications/all',
                credentials: 'include',
            }),
            keepUnusedDataFor: REFRESH_TOKEN_LIFETIME_SECONDS,
            providesTags: ['Notifications'],
        }),
        updEmailNotifications: builder.mutation({
            query: ({ email, notificationStatus }: { email: string; notificationStatus: boolean }) => ({
                url: 'auth/user/settings/notifications/email',
                credentials: 'include',
                method: 'PATCH',
                body: { email, notificationStatus },
            }),
            invalidatesTags: ['Notifications'],
        }),
        updSmsNotifications: builder.mutation({
            query: (smsNotification: boolean) => ({
                url: 'auth/user/settings/notifications/sms',
                credentials: 'include',
                method: 'PATCH',
                body: { smsNotification },
            }),
            invalidatesTags: ['Notifications'],
        }),
        updPushNotifications: builder.mutation({
            query: (pushNotification: boolean) => ({
                url: 'auth/user/settings/notifications/push',
                credentials: 'include',
                method: 'PATCH',
                body: { pushNotification },
            }),
            invalidatesTags: ['Notifications'],
        }),
        updEmail: builder.mutation({
            query: (newEmail: string) => ({
                url: '/auth/user/settings/email',
                credentials: 'include',
                method: 'PATCH',
                body: { newEmail },
            }),
            invalidatesTags: ['Notifications'],
        }),
        updateSecurityQuestion: builder.mutation({
            query: ({ securityQuestion, securityAnswer }: { securityQuestion: string; securityAnswer: string }) => ({
                url: 'auth/user/settings/controls',
                method: 'PATCH',
                credentials: 'include',
                body: { securityQuestion, securityAnswer },
            }),
        }),
        changePassword: builder.mutation({
            query: ({ oldPassword, newPassword }: { oldPassword: string; newPassword: string }) => ({
                url: 'auth/user/settings/password',
                method: 'PATCH',
                credentials: 'include',
                body: { oldPassword, newPassword },
            }),
        }),
    }),
});

export const {
    useCreateNewUserMutation,
    useCreateUserMutation,
    useGetSmsCodeQuery,
    useLogInMutation,
    useGetAuthTokenMutation,
    useGetUserInfoQuery,
    useGetNotificationsQuery,
    useUpdEmailNotificationsMutation,
    useUpdSmsNotificationsMutation,
    useUpdPushNotificationsMutation,
    useUpdEmailMutation,
    useUpdateSecurityQuestionMutation,
    useChangePasswordMutation,
    useSetClientPhotoMutation,
    useRemoveClientPhotoMutation,
} = userService;
