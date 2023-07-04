import { useRef, useLayoutEffect, useCallback } from 'react';

type callbackType<A extends unknown[], R> = (...args: A) => R;

export const useEvent = <A extends unknown[], R>(handler: callbackType<A, R>): callbackType<A, R> => {
    const handlerRef = useRef(handler);

    useLayoutEffect(() => {
        handlerRef.current = handler;
    });

    return useCallback((...args) => {
        const fn = handlerRef.current;
        return fn(...args);
    }, []);
};
