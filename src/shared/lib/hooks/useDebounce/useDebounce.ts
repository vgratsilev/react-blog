import { useCallback, useRef } from 'react';

type TTimer = ReturnType<typeof setTimeout>;

/**
 * This hook allows you to debounce any fast changing value. It canceled previous callback while delay is over.
 * @param callback - function
 * @param delay - in ms
 */
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
