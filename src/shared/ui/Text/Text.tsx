import { classNames } from '@/shared/lib/classNames/classNames';
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

type TTitleTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    TitleTag?: TTitleTagType;

    'data-testid'?: string;
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
        'data-testid': dataTestId = 'Text',
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
            {title && (
                <TitleTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Title`}
                >
                    {title}
                </TitleTag>
            )}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Text`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
