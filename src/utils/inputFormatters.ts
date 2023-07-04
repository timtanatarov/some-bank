export const formatNumberToSpacingString = (num: number) => {
    return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 2 }).format(num);
};

export const formatInputToSpacingString = (str: string) => {
    if (str.match(/[^\s\d.,]/)) return '';
    if (Number(str.match(/[,.]/g)?.length) > 1) return '';
    const dividerPosition = str.match(/[,.]/);
    if (dividerPosition && Number(dividerPosition.index) < str.length - 3) return '';
    return str.replaceAll(' ', '').replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
};

export const convertToNumber = (value: string) => +value.replaceAll(/\s/g, '').replace(',', '.');

export const formatPhoneNumberOutput = (phoneNumber: string) => {
    const pattern = new RegExp(`(^\\d{${phoneNumber.length % 10}})(\\d{3})(\\d{3})(\\d{2})(\\d{2}$)`);
    return phoneNumber.replace(pattern, '+$1 ($2) $3 $4 $5');
};

export const formatAmountOutput = (value: string) => value.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1 `);

export const separateStringByN = (string: string, n: number) => {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        result += string[i];
        if ((i + 1) % n === 0 && i < string.length - 1) result += ' ';
    }
    return result;
};
