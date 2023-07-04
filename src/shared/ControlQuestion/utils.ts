type GetHelperText = {
    isFocus: boolean;
    text: string;
    symbolCount: number;
    currentValue: string;
    errorText?: string;
};

export const getHelperText = ({ isFocus, text, symbolCount, currentValue, errorText }: GetHelperText) => {
    if (!isFocus) return errorText;
    if (currentValue) return errorText || `${symbolCount} / 50`;
    return `${text} может содержать символы следующих групп: 
            заглавные и строчные буквы латиницы, заглавные и 
            строчные буквы кириллицы, цифры, специальные`;
};
