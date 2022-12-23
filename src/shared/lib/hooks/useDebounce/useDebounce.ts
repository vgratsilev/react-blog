import { useCallback, useRef } from 'react';

type TTimer = ReturnType<typeof setTimeout>;

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const timer = useRef<TTimer>();

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
