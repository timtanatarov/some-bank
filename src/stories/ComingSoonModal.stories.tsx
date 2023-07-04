import { Meta, StoryObj } from '@storybook/react';

import { ComingSoonModal } from 'src/shared/ComingSoonModal';

const meta: Meta<typeof ComingSoonModal> = {
    title: 'ComingSoonModal',
    component: ComingSoonModal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
    },
};
