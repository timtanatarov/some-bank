export const calculateDurationMonths = (end: string, start: string) => {
    const [endYear, endMonth]: string[] = end.split('-');
    const [startYear, startMonth]: string[] = start.split('-');

    let result = parseInt(endMonth) - parseInt(startMonth);
    if (parseInt(endMonth) - parseInt(startMonth) === 0) {
        result = Math.abs((parseInt(endYear) - parseInt(startYear)) * 12);
    }

    return result;
};
