import { useCallback, useMemo, useState } from 'react';

interface IUseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, IUseHoverBind];

export const useHover = (): UseHoverResult => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);
    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [
            isHover,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
        [isHover, onMouseEnter, onMouseLeave],
    );
};

/**
 * Using:
 * const [isHover, bindHover] = useHover();
 * console.log(isHover);
 * <div {...bindHover}>...</div>
 */