import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreditCard } from 'src/shared/cards/Credit';

export default {
    title: 'CreditCard',
    component: CreditCard,
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => <CreditCard {...args} />;

export const CreditCardExample = Template.bind({});

CreditCardExample.args = {
    name: 'CREDIT',
    principalDebt: 111,
    currencyCode: 'EUR',
    size: 'normal',
    periodMonths: 10,
    amount: 1000,
};
