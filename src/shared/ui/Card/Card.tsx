import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
}

export const Card = (props: ICardProps) => {
    const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;
    return (
        <div
            {...otherProps}
            className={classNames(cls.card, {}, [className, cls[theme]])}
        >
            {children}
        </div>
    );
};
