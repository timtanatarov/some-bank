import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreditProductCard } from 'src/shared/cards/CreditProduct';

export default {
    title: 'CreditProductCard',
    component: CreditProductCard,
} as ComponentMeta<typeof CreditProductCard>;

const Template: ComponentStory<typeof CreditProductCard> = (args) => <CreditProductCard {...args} />;

export const CreditProductCardExample = Template.bind({});

CreditProductCardExample.args = {
    id: 1,
    name: 'hello',
    currencyCode: 'EUR',
    minInterestRate: 20,
    minSum: 1000,
    size: 'normal',
};
