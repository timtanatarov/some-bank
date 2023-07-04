import * as Yup from 'yup';

import { controlQuestionAndAnswerSchema } from 'src/utils/validators';

export const MAX_SECURITY_QUESTION_SYMBOLS = 50;

export const ControlQuestionValidSchema = Yup.object().shape({
    ownQuestion: controlQuestionAndAnswerSchema.max(50, 'Контрольный вопрос не должен быть длиннее 50 символов'),
    securityAnswer: controlQuestionAndAnswerSchema.max(50, 'Ответ не должен быть длиннее 50 символов'),
});
