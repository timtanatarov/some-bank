import * as Yup from 'yup';
import { passwordSchema } from 'src/utils/validators';

export const PasswordValidSchema = Yup.object().shape({
    oldPassword: passwordSchema,
    newPassword: passwordSchema,
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword')], 'Пароли не совпадают'),
});
