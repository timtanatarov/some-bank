import { CreatePasswordForm } from 'src/shared/CreatePasswordForm';
import { SmsCodeForm } from 'src/shared/SmsCodeForm';

import { PasportIdForm } from './PasportIdForm';

export const stepData = [
    { step: 0, label: 'Паспорт', stepInfo: 'Шаг 1/3. Введите номер паспорта', component: PasportIdForm },
    {
        step: 1,
        label: 'Код из СМС',
        stepInfo: 'Шаг 2/3. Введите код из СМС',
        component: SmsCodeForm,
    },
    {
        step: 2,
        label: 'Пароль',
        stepInfo: 'Шаг 3/3. Придумайте новый пароль',
        component: CreatePasswordForm,
    },
];
