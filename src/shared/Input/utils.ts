export const getIsStartNumber = (startSymbol: string): boolean => {
    switch (startSymbol) {
        case '7':
            return true;
        case '8':
            return true;
        default:
            return false;
    }
};
