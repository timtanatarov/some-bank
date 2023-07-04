import { apiUserService } from 'src/services/api';

import {
    RequestChangePasswordParams,
    RequestPhoneParams,
    RequestSmsParams,
    RequestVerificateStatusParams,
} from 'src/redux/slices/resetPass';

import { RequestRegistrationParams } from 'src/redux/slices/registration';

type VerificateStatusResponse = {
    status: number;
    data: {
        token: string;
        refreshToken: string;
    };
};

type PassportNumberResponse = {
    mobilePhone: string;
};

type SmsCodeResponse = {
    verificationCode: string;
};

type RegistrationUserStatusResponse = {
    mobilePhone: string;
    clientStatus: string;
    clientId: null | string;
};

export const getPhoneByPassportNumber = (passportNumber: RequestPhoneParams): Promise<PassportNumberResponse> =>
    apiUserService.post(`/security/session/phone`, passportNumber).then((response) => response.data);

export const getVerificationCode = (mobilePhone: RequestSmsParams): Promise<SmsCodeResponse> =>
    apiUserService.get(`/security/session/otp/phone`, { params: mobilePhone }).then((response) => response.data);

export const getVerificationStatus = (payload: RequestVerificateStatusParams): Promise<VerificateStatusResponse> =>
    apiUserService.post(`/security/session/verification`, payload).then((response) => response);

export const updatePassword = (payload: RequestChangePasswordParams): Promise<string> =>
    apiUserService
        .patch(
            `/login/password`,
            { newPassword: payload.newPassword },
            {
                headers: { Authorization: `Bearer ${payload.token}` },
                params: { mobilePhone: payload.mobilePhone },
            }
        )
        .then((response) => response.data);

export const getUserRegistartionStatus = (
    mobilePhone: RequestRegistrationParams
): Promise<RegistrationUserStatusResponse> =>
    apiUserService.get(`/registration`, { params: mobilePhone }).then((response) => response.data);
