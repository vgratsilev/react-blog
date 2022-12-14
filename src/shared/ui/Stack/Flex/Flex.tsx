import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './Flex.module.scss';

export type TFlexJustify = 'start' | 'center' | 'end' | 'between';
export type TFlexAlign = 'start' | 'center' | 'end';
export type TFlexDirection = 'row' | 'column';
export type TFlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<TFlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<TFlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
};

const directionsClasses: Record<TFlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<TFlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
};

export interface IFlexProps {
    className?: string;
    children: ReactNode;
    justify?: TFlexJustify;
    align?: TFlexAlign;
    direction?: TFlexDirection;
    gap?: TFlexGap;
    maxWidth?: boolean;
    Tag?: keyof HTMLElementTagNameMap;
}

export const Flex = (props: IFlexProps) => {
    const {
        className,
        children,
        gap,
        maxWidth,
        justify = 'start',
        align = 'center',
        direction = 'row',
        Tag = 'div',
        ...otherProps
    } = props;

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionsClasses[direction],
        gap && gapClasses[gap],
    ];

    const mods = {
        [cls.maxWidth]: maxWidth,
    };

    return (
        <Tag
            className={classNames(cls.flex, mods, classes)}
            {...otherProps}
        >
            {children}
        </Tag>
    );
};
