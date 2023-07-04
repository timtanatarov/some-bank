import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreditOrderCard } from 'src/shared/cards/CreditOrder';

export default {
    title: 'CreditOrderCard',
    component: CreditOrderCard,
} as ComponentMeta<typeof CreditOrderCard>;

const Template: ComponentStory<typeof CreditOrderCard> = (args) => <CreditOrderCard {...args} />;

export const CreditOrderCardExample = Template.bind({});

CreditOrderCardExample.args = {
    amount: 1000,
    maxInterestRate: 0,
    currencyCode: 'EUR',
    size: 'normal',
};
