export const calculateWorkingHours = (
    opening: string,
    closing: string,
    shortenedDay: string,
    isWorkAtWeekends: boolean
) => {
    const date = new Date();
    const [today, currentHour, currentMinutes] = [date.getDay(), date.getHours(), date.getMinutes()];
    const currentTime = Number(currentHour + '.' + currentMinutes);
    const openingTime = Number(opening?.slice(0, 5).replace(':', '.'));
    const regularClosingTime = Number(closing?.slice(0, 5).replace(':', '.'));
    const shortenedClosingTime = Number(shortenedDay?.slice(0, 5).replace(':', '.'));

    const isWeekDay = today < 5 && today > 0;
    const isWeekendDay = today === 6 || today === 0;
    const isFriday = today === 5;

    const closingTime = isWeekDay ? regularClosingTime : shortenedClosingTime;

    const is24HoursOpen = openingTime === closingTime;

    const isOpenUntilMidnight = openingTime < closingTime && openingTime <= currentTime && closingTime >= currentTime;
    const isOpenAfterMidnight =
        openingTime > closingTime &&
        ((openingTime <= currentTime && closingTime <= currentTime) ||
            (openingTime >= currentTime && closingTime >= currentTime));

    const schedule = isOpenUntilMidnight || isOpenAfterMidnight;

    const isWeekDayOpenHours = isWeekDay && schedule;

    const isShortDay = ((isWorkAtWeekends && isWeekendDay) || isFriday) && schedule;

    if (isWeekendDay && !isWorkAtWeekends) {
        return false;
    }
    if (is24HoursOpen) {
        return true;
    }
    if (isWeekDayOpenHours) {
        return true;
    }
    if (isShortDay) {
        return true;
    }
    return false;
};
