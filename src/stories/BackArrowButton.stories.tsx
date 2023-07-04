import { Meta, StoryObj } from '@storybook/react';
import { BackArrowButton } from 'src/shared/BackArrowButton';
import { colors } from 'src/theme';

const meta: Meta<typeof BackArrowButton> = {
    title: 'BackArrowButton',
    component: BackArrowButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const PrimaryColor: Story = {
    args: {
        sx: { color: colors.primary, svg: { color: colors.primary } },
    },
};
