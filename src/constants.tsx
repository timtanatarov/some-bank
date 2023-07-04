import atms from 'src/images/branchesAndATM/atms.svg';
import terminals from 'src/images/branchesAndATM/terminals.svg';
import branches from 'src/images/branchesAndATM/branches.svg';
import activeAtms from 'src/images/branchesAndATM/activeAtms.svg';
import activeTerminal from 'src/images/branchesAndATM/activeTerminal.svg';
import activeBranches from 'src/images/branchesAndATM/activeBranches.svg';

import {
    CurrencyIcon,
    PhoneIcon,
    BankIcon,
    HomeIcon,
    CreditCardIcon,
    DepositIcon,
    CreditsIcon,
    InsuranceIcon,
    InvestIcon,
    DiscountIcon,
    ConsultIcon,
    RingBellIcon,
} from 'src/shared/icons';
import { getTouchMedia } from 'src/utils/getTouchMedia';

export enum AppRoutes {
    indexPageRoute = '/',
    branchesRoute = '/branches',
    currencyRoute = '/currency',
    contactsRoute = '/contacts',
    mainRoute = '/main',
    profileRoute = '/profile',
    securityRoute = '/profile/security',
    notificationsRoute = '/profile/notifications',
    accountsRoute = '/main/accounts',
    depositsRoute = '/main/deposits',
    creditsRoute = '/main/credits',
    insuranceRoute = '/main/insurance',
    investmentsRoute = '/main/investments',
    promoRoute = '/main/promo',
}

export const headerNavItems = [
    {
        path: AppRoutes.branchesRoute,
        icon: <BankIcon />,
        text: 'Отделения и банкоматы',
    },
    {
        path: AppRoutes.currencyRoute,
        icon: <CurrencyIcon />,
        text: 'Курсы валют',
    },
    {
        path: AppRoutes.contactsRoute,
        icon: <PhoneIcon />,
        text: 'Контакты',
    },
];

export const menuItems = [
    { path: AppRoutes.mainRoute, icon: <HomeIcon />, text: 'Главная' },
    { path: AppRoutes.accountsRoute, icon: <CreditCardIcon />, text: 'Счета и карты' },
    { path: AppRoutes.depositsRoute, icon: <DepositIcon />, text: 'Депозиты' },
    { path: AppRoutes.creditsRoute, icon: <CreditsIcon />, text: 'Кредиты' },
    { path: AppRoutes.insuranceRoute, icon: <InsuranceIcon />, text: 'Страхование' },
    { path: AppRoutes.investmentsRoute, icon: <InvestIcon />, text: 'Инвестиции' },
    { path: AppRoutes.promoRoute, icon: <DiscountIcon />, text: 'Акции и предложения' },
];

export const profileMenuItems = [
    { path: AppRoutes.profileRoute, icon: <ConsultIcon />, text: 'Профиль' },
    { path: AppRoutes.securityRoute, icon: <InsuranceIcon />, text: 'Безопасность' },
    { path: AppRoutes.notificationsRoute, icon: <RingBellIcon />, text: 'Уведомления' },
];

export const marksImg = {
    LOCAL_BRANCH: branches,
    ATM: atms,
    TERMINAL: terminals,
};

export const activeMarksImg = {
    LOCAL_BRANCH: activeBranches,
    ATM: activeAtms,
    TERMINAL: activeTerminal,
};

export const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const LOCAL_STORAGE_ACCESS_TOKEN = 'accessToken';
export const LOCAL_STORAGE_REFRESH_TOKEN = 'refreshToken';

export const MAP_MAX_ZOOM = 21;
export const MAP_MIN_ZOOM = 4;
export const MAP_DEFAULT_ZOOM = 11;
export const MAP_ZOOM_STEP = 1; //it has to be <= 5. If higher, adding additional prop to Map is required

export const IS_LOGGED_IN = 'IS_LOGGED_IN';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_MOCK_MODE = IS_DEVELOPMENT && process.env.REACT_APP_CROSS_ENV_MODE === 'mock';

export const USER_SERVICE_URL = IS_DEVELOPMENT
    ? '/user-service/'
    : process.env.REACT_APP_AUTHSERVICE_URL + 'user-service/';

export const ERROR_SERVICE_URL = 'http://92.53.124.77/';

export const CREDIT_SERVICE_URL = IS_DEVELOPMENT
    ? '/credit-service/'
    : process.env.REACT_APP_CREDITSERVICE_URL + 'credit-service/';

export const DEPOSIT_SERVICE_URL = IS_DEVELOPMENT
    ? '/deposit-service/'
    : process.env.REACT_APP_DEPOSITSERVICE_URL + 'deposit-service/';

export const INFO_SERVICE_URL = IS_DEVELOPMENT
    ? '/info-service/'
    : process.env.REACT_APP_INFOSERVICE_URL + 'info-service/';

export const IP_SERVICE_API_KEY = process.env.REACT_APP_IP_SERVICE_API_KEY;

export const REFRESH_TOKEN_LIFETIME_SECONDS = 3600 * 3 + 60 * 20;

export const isTouchScreen = getTouchMedia();
