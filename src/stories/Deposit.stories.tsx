import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DepositCard } from 'src/shared/cards/Deposit';

export default {
    title: 'DepositCard',
    component: DepositCard,
} as ComponentMeta<typeof DepositCard>;

const Template: ComponentStory<typeof DepositCard> = (args) => {
    return <DepositCard {...args} />;
};

export const DepositCardExample = Template.bind({});

DepositCardExample.args = {
    name: 'hello',
    amountMin: 1000,
    durationMonths: 12,
    currencyCode: 'RUB',
    size: 'normal',
};
