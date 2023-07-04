export type ClientInfoResponse = {
    id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    mobilePhone: string;
    residentOfRussia: boolean;
    securityQuestion: string;
    imageUrl: string;
};

export type NotificationsResponse = {
    email: string | null;
    emailSubscription: boolean;
    smsNotification: boolean;
    pushNotification: boolean;
};
export type SmsCodeResponse = {
    verificationCode: string;
};

export type RegisterNewUserResponse = {
    idCustomer: string;
    smsNotification: boolean;
    pushNotification: boolean;
    mobilePhone: string;
    passwordEncoded: string;
    firstName: string;
    lastName: string;
    middleName: string;
    identificationPassportNumber: string;
    securityQuestion: string;
    securityAnswer: string;
    email: string;
    clientStatus: string;
    residentOfRussia: boolean;
    dateAppRegistration: string;
    dateAccession: string;
    tokens: {
        refreshToken: string;
        token: string;
    };
};

export type RegisterUserResponse = {
    idUserProfile: string;
    idCustomer: string;
    smsNotification: boolean;
    pushNotification: boolean;
    passwordEncoded: string;
    securityQuestion: string;
    securityAnswer: string;
    email: string;
    clientStatus: string;
    dateAppRegistration: string;
    tokens: {
        refreshToken: string;
        token: string;
    };
};

export type RegisterNewUserType = {
    mobilePhone?: string;
    passwordEncoded?: string;
    securityQuestion?: string;
    securityAnswer?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    identificationPassportNumber?: string;
    residentOfRussia?: boolean;
};

export type RegisterUserType = {
    phoneNumber?: string;
    passwordEncoded?: string;
    securityQuestion?: string;
    securityAnswer?: string;
    email?: string;
};
