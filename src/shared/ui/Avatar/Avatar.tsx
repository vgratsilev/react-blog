import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface IAvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: IAvatarProps) => {
    const { className, src, size = 100, alt = 'avatar' } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
});
