import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: ICardProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <div
            {...otherProps}
            className={classNames(cls.card, {}, [className])}
        >
            {children}
        </div>
    );
});
