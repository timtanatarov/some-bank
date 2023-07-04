import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

export const passportPattern = /^[A-Z-0-9]*$/;

export const questionsPattern = /^[А-ЯЁA-Z]([0-9-a-zа-яё#*+%\s])[^-]*$/u;

export const phonePattern = /^[0-9\s+(\)']*$/;

export const userInfoPattern = /^[А-ЯЁA-Z]([-'\sА-ЯЁA-Zа-яёa-z])*[А-ЯЁA-Zа-яёa-z]$/;

export const passwordLengthErrorText = 'Длина пароля должна быть от 6 до 20 символов';

export const minLengthErrorText = 'Недостаточное количество символов';

export const passportMaxLengthErrorText = 'Длина номера паспорта не может превышать более 15 символов';

export const passwordErrorText =
    'Пароль должен содержать символы следующих групп: заглавные и строчные латинские буквы, цифры, специальные';

export const passwordSchema = Yup.string()
    .min(6, passwordLengthErrorText)
    .max(20, passwordLengthErrorText)
    .minUppercase(1, passwordErrorText)
    .minLowercase(1, passwordErrorText)
    .minNumbers(1, passwordErrorText)
    .minSymbols(1, passwordErrorText)
    .matches(/^[^\sА-ЯЁа-яё]*$/, passwordErrorText);

export const controlQuestionAndAnswerSchema = Yup.string()
    .min(2, minLengthErrorText)
    .matches(questionsPattern, 'Использованы недопустимые символы');

export const validateConverterInput = (value: string): boolean => {
    const pattern = /(?:[1-9.][0-9.]*)$|^$/;

    const lastIndex = value.length - 1;

    if (!pattern.test(value)) {
        return false;
    }

    if (value[lastIndex] === '.' && value.indexOf('.') < lastIndex) {
        return false;
    }

    return true;
};
