import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/addons';

import { SwitchDots } from 'src/shared/SwitchDots';

export default {
    title: 'SwitchDots',
    component: SwitchDots,
} as ComponentMeta<typeof SwitchDots>;

const Template: ComponentStory<typeof SwitchDots> = (args) => {
    const [, updateArgs] = useArgs();
    return (
        <SwitchDots
            {...args}
            switchHandler={(index: number) => {
                updateArgs({ currentIndex: index });
            }}
        />
    );
};

export const SwitchDotsExample = Template.bind({});

SwitchDotsExample.args = {
    itemsQuantity: 5,
};
