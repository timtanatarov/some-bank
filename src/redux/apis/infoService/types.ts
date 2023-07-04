export type BranchesData = {
    bankBranchType: string;
    branchNumber: string;
    branchCoordinates: string;
    city: string;
    branchAddress: string;
    openingTime: string;
    closingTime: string;
    shortenedDay: string;
    workAtWeekends: boolean;
    cashWithdraw: boolean;
    moneyTransfer: boolean;
    acceptPayment: boolean;
    currencyExchange: boolean;
    exoticCurrency: boolean;
    ramp: boolean;
    replenishCard: boolean;
    replenishAccount: boolean;
    consultation: boolean;
    insurance: boolean;
    closed: boolean;
};

export type MarkType = {
    id: string;
    name: string;
    coordinates?: string[];
    cityName: string;
    branchAddress?: string;
    workingHours: string;
    openingTime: string;
    closingTime: string;
    shortenedDay: string;
    workAtWeekends: boolean;
    cashWithdraw?: boolean;
    moneyTransfer?: boolean;
    acceptPayment?: boolean;
    currencyExchange?: boolean;
    exoticCurrency?: boolean;
    ramp?: boolean;
    replenishCard?: boolean;
    replenishAccount?: boolean;
    consultation?: boolean;
    insurance?: boolean;
    closed?: boolean;
    open24?: boolean;
    isOpen?: boolean;
};
