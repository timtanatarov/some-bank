import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PaymentCard } from 'src/shared/cards/Payment';

export default {
    title: 'PaymentCard',
    component: PaymentCard,
} as ComponentMeta<typeof PaymentCard>;

const Template: ComponentStory<typeof PaymentCard> = (args) => <PaymentCard {...args} />;

export const PaymentCardDebitExample = Template.bind({});

PaymentCardDebitExample.args = {
    type: 'debit',
    currency: 'EUR',
    currentBalance: 1000,
    cardNumber: '0000 0000 0000 0000',
    expirationDate: '2023-04-05',
    paymentSystem: 'MASTERCARD',
    size: 'normal',
};

export const PaymentCardCreditExample = Template.bind({});

PaymentCardCreditExample.args = {
    type: 'credit',
    currency: 'EUR',
    currentBalance: 1000,
    cardNumber: '0000 0000 0000 0000',
    expirationDate: '2023-04-05',
    paymentSystem: 'MASTERCARD',
    size: 'normal',
};
