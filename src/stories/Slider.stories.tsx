import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from '@mui/material';
import { useMemo } from 'react';
import { PaymentCard } from 'src/shared/cards/Payment';

import { Slider } from 'src/shared/Slider';

export default {
    title: 'Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
    const skeletons = useMemo(
        () =>
            [0, 0, 0, 0, 0, 0].map((_, i) => (
                <Skeleton sx={{ borderRadius: '16px' }} variant="rectangular" key={i}>
                    <PaymentCard
                        type=""
                        currency="RUB"
                        currentBalance={0}
                        cardNumber=""
                        expirationDate=""
                        paymentSystem=""
                    />
                </Skeleton>
            )),
        []
    );

    return <Slider {...args} children={skeletons} />;
};

export const SliderExample = Template.bind({});
