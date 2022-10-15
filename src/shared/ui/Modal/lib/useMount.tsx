import { useEffect, useState } from 'react';

const ANIMATION_TIME = 300;

interface IUseMountProps {
    opened: boolean;
}

export const useMount = ({ opened }: IUseMountProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (opened && !mounted) {
            setMounted(true);
        } else if (!opened && mounted) {
            setTimeout(() => {
                setMounted(false);
            }, ANIMATION_TIME);
        }
    }, [mounted, opened]);

    return {
        mounted,
    };
};
