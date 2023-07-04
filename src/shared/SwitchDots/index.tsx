import { RadioGroup } from '@mui/material';

import { useEvent } from 'src/hooks/useEvent';

import { Dot } from './Dot';

type SwitchDotsProps = {
    currentIndex: number;
    itemsQuantity: number;
    switchHandler: (index: number) => void;
};

export const SwitchDots = ({ itemsQuantity, currentIndex, switchHandler }: SwitchDotsProps) => {
    const radioChangeHandler = useEvent((event: React.ChangeEvent<HTMLInputElement>) => {
        switchHandler(Number(event.target.value));
    });

    return (
        <RadioGroup row={true}>
            {[...Array(itemsQuantity)].map((_, index) => {
                const checked = currentIndex === index;
                return <Dot key={index} index={index} checked={checked} radioChangeHandler={radioChangeHandler} />;
            })}
        </RadioGroup>
    );
};
