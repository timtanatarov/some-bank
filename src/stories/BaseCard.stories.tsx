import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@mui/material';

import { BaseCard } from 'src/shared/cards/Base';
import { colors } from 'src/theme';
import creditCoverBlue from 'src/images/cardCovers/creditCoverBlue.svg';

export default {
    title: 'BaseCard',
    component: BaseCard,
} as ComponentMeta<typeof BaseCard>;

const Template: ComponentStory<typeof BaseCard> = (args) => <BaseCard {...args} />;

export const BaseCardExample = Template.bind({});

BaseCardExample.args = {
    cardCover: {
        imgSrc: creditCoverBlue,
        defaultBackgroundColor: colors.creditCoverBlue,
    },
    children: <Box />,
};
