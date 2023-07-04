import { ControlQuestion } from 'src/shared/ControlQuestion';
import { CreatePasswordForm } from 'src/shared/CreatePasswordForm';
import { SmsCodeForm } from 'src/shared/SmsCodeForm';

import { PersonalInfoForm } from './PersonalInfoForm';

export const stepDataNotCLient = [
    { step: 0, label: 'Введите СМС-код', stepInfo: 'Шаг 1. Введите СМС-код', component: SmsCodeForm },
    {
        step: 1,
        label: 'Заполните информацию',
        stepInfo: 'Шаг 2. Заполните информацию',
        component: PersonalInfoForm,
    },
    {
        step: 2,
        label: 'Придумайте пароль',
        stepInfo: 'Шаг 3. Придумайте пароль',
        component: CreatePasswordForm,
    },
    {
        step: 3,
        label: 'Контрольный вопрос',
        stepInfo: 'Шаг 4. Контрольный вопрос',
        component: ControlQuestion,
    },
];

export const stepDataCLient = [
    { step: 0, label: 'Введите СМС-код', stepInfo: 'Шаг 1. Введите СМС-код', component: SmsCodeForm },
    {
        step: 1,
        label: 'Придумайте пароль',
        stepInfo: 'Шаг 2. Придумайте пароль',
        component: CreatePasswordForm,
    },
    {
        step: 2,
        label: 'Контрольный вопрос',
        stepInfo: 'Шаг 3. Контрольный вопрос',
        component: ControlQuestion,
    },
];
