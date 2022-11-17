import { useCallback, useRef } from 'react';

type Timer = ReturnType<typeof setTimeout>;

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timer = useRef<Timer>();

    return useCallback(
        (...args: any[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
};
