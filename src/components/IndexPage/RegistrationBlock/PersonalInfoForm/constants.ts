import * as Yup from 'yup';

import { passportMaxLengthErrorText, minLengthErrorText, passportPattern, userInfoPattern } from 'src/utils/validators';

const userInfoValidation = Yup.string()
    .min(2, 'Недостаточное количество символов')
    .max(30, 'Длина должна быть не более 30 символов')
    .matches(userInfoPattern, 'Использованы недопустимые символы');

export const PersonalInfoFormValidSchema = Yup.object().shape({
    firstName: userInfoValidation,
    lastName: userInfoValidation,
    middleName: userInfoValidation,
    pasNumber: Yup.string()
        .min(3, minLengthErrorText)
        .max(15, passportMaxLengthErrorText)
        .matches(passportPattern, 'Использованы недопустимые символы'),
});
