import { Meta, StoryFn } from '@storybook/react';
import { CopyButton } from 'src/shared/CopyButton';

const meta: Meta<typeof CopyButton> = {
    title: 'CopyButton',
    component: CopyButton,
};

export const Default: StoryFn<typeof CopyButton> = (args) => <CopyButton {...args} />;

export default meta;
