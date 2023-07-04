import { BranchesData, MarkType } from 'src/redux/apis/infoService/types';

import { calculateWorkingHours } from 'src/utils/calculateWorkingHours';
import { formatTime } from 'src/utils/formatTime';

export const transformBranchesData = (response: BranchesData[]): MarkType[] => {
    return response.map((mark) => {
        const coordinates = mark.branchCoordinates.split(', ');
        const workingHours = calculateWorkingHours(
            formatTime(mark.openingTime),
            formatTime(mark.closingTime),
            formatTime(mark.shortenedDay),
            mark.workAtWeekends
        );

        const mapMark: MarkType = {
            id: mark.branchNumber,
            name: mark.bankBranchType,
            coordinates: coordinates,
            cityName: mark.city,
            branchAddress: mark.branchAddress,
            workingHours: `${formatTime(mark.openingTime)} - ${formatTime(mark.closingTime)}`,
            openingTime: formatTime(mark.openingTime),
            closingTime: formatTime(mark.closingTime),
            shortenedDay: `${formatTime(mark.openingTime)} - ${formatTime(mark.shortenedDay)}`,
            open24: mark.openingTime === mark.closingTime,
            workAtWeekends: mark.workAtWeekends,
            cashWithdraw: mark.cashWithdraw,
            moneyTransfer: mark.moneyTransfer,
            acceptPayment: mark.acceptPayment,
            currencyExchange: mark.currencyExchange,
            exoticCurrency: mark.exoticCurrency,
            ramp: mark.ramp,
            replenishCard: mark.replenishCard,
            replenishAccount: mark.replenishAccount,
            consultation: mark.consultation,
            insurance: mark.insurance,
            isOpen: !mark.closed && workingHours,
        };

        return mapMark;
    });
};
