import { Meta, StoryObj } from '@storybook/react';

import { ATinkLogo } from 'src/shared/ATinkLogo';

const meta: Meta<typeof ATinkLogo> = {
    title: 'ATinkLogo',
    component: ATinkLogo,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BlackMediumSizeATinkLogo: Story = {
    args: {
        size: 'medium',
        variant: 'black',
    },
};
export const WhiteMediumSizeATinkLogo: Story = {
    args: {
        size: 'medium',
        variant: 'white',
    },
};
export const BlackSmallSizeATinkLogo: Story = {
    args: {
        size: 'small',
        variant: 'black',
    },
};
export const WhiteSmallSizeATinkLogo: Story = {
    args: {
        size: 'small',
        variant: 'white',
    },
};
