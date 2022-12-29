import { classNames } from '@/shared/lib/classNames/classNames';
import { CSSProperties, memo, useMemo } from 'react';
import EmptyAvatar from '@/shared/assets/img/empty-avatar.png';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import cls from './Avatar.module.scss';
import UserIcon from '../../assets/icons/user-avatar-filled.svg';

interface IAvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

export const Avatar = memo((props: IAvatarProps) => {
    const { className, src = EmptyAvatar, size = 100, alt = 'avatar', fallbackInverted } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = (
        <Skeleton
            borderRadius={'50%'}
            width={size}
            height={size}
        />
    );

    const errorFallback = (
        <Icon
            Svg={UserIcon}
            width={size}
            height={size}
            inverted={fallbackInverted}
        />
    );

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, {}, [className])}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
});
