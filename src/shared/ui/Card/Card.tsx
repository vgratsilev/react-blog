import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    maxWidth?: boolean;
}

export const Card = (props: ICardProps) => {
    const { className, children, maxWidth, theme = CardTheme.NORMAL, ...otherProps } = props;
    return (
        <div
            {...otherProps}
            className={classNames(cls.card, { [cls.maxWidth]: maxWidth }, [className, cls[theme]])}
        >
            {children}
        </div>
    );
};
