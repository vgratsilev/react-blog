import { CSSProperties, memo, useMemo } from 'react';
import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    borderRadius?: string;
    noAnimation?: boolean;
}

export const Skeleton = memo((props: ISkeletonProps) => {
    const { className, height, width, borderRadius, noAnimation = false } = props;

    const styles: CSSProperties = useMemo(
        () => ({
            height,
            width,
            borderRadius,
        }),
        [borderRadius, height, width],
    );

    const mods: TMods = {
        [cls.noAnimation]: noAnimation,
    };

    return (
        <div
            className={classNames(cls.skeleton, mods, [className])}
            style={styles}
        />
    );
});
