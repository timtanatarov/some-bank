import { Meta, StoryObj } from '@storybook/react';
import { Plate } from 'src/shared/Plate';
import { colors } from 'src/theme';

const meta: Meta<typeof Plate> = {
    title: 'Plate',
    component: Plate,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        message: 'Загружаем данные',
    },
};

export const ErrorMessage: Story = {
    args: {
        message: 'Сервис временно недоступен',
        sx: { border: 1, borderColor: colors.alert },
    },
};

export const SmallWidth: Story = {
    args: {
        message: 'Нет информации по данному депозиту',
        sx: { width: '50%', margin: '0 auto' },
    },
};
