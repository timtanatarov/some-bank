import * as Yup from 'yup';
import { passwordSchema } from 'src/utils/validators';

export const CreatePasswordValidSchema = Yup.object().shape({
    newPassword: passwordSchema,
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword')], 'Пароли не совпадают'),
});
