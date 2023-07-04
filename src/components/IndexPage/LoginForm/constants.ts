import * as Yup from 'yup';
import { minLengthErrorText, passportPattern, passwordSchema } from 'src/utils/validators';

export const LoginSchema = Yup.object().shape({
    passport: Yup.string().max(10, minLengthErrorText).matches(passportPattern, 'Недопустимые символы'),
    password: passwordSchema,
});
