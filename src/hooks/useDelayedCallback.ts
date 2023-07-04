import { useState } from 'react';

//Will execute callback with delay, which will increase after each call, and then will rerender component
export const useDelayedCallback = (callback: Function, maxTries = 20, step = 4) => {
    const [count, setCount] = useState(0);

    return (): number | undefined => {
        if (count === maxTries) return undefined;
        return setTimeout(() => {
            callback();
            setCount((value) => value + 1);
        }, count * step) as unknown as number; //fixing typescript default nodejs timeout reference
    };
};
