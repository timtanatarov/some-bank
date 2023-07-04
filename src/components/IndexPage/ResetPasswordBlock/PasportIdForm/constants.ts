import * as Yup from 'yup';

import { passportMaxLengthErrorText, minLengthErrorText, passportPattern } from 'src/utils/validators';

export const PasportValidSchema = Yup.object().shape({
    passNumber: Yup.string()
        .matches(passportPattern, 'Использованы недопустимые символы')
        .matches(/\d+/, 'В номере паспорта должна быть минимум 1 цифра')
        .min(3, minLengthErrorText)
        .max(15, passportMaxLengthErrorText),
});
