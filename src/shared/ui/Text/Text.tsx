import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_S',
    M = 'size_M',
    L = 'size_L',
    XL = 'size_XL',
}

type TitleTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    TitleTag?: TitleTagType;
}

export const Text = memo((props: ITextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        TitleTag = 'p',
    } = props;

    return (
        <div
            className={classNames(cls.textContainer, {}, [
                className,
                cls[theme],
                cls[align],
                cls[size],
            ])}
        >
            {title && <TitleTag className={cls.title}>{title}</TitleTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
