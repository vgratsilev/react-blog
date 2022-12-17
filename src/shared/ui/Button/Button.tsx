import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    maxWidth?: boolean;
}

export const Button = memo((props: IButtonProps) => {
    const {
        children,
        className,
        square,
        maxWidth,
        theme = ButtonTheme.OUTLINE,
        size = ButtonSize.M,
        disabled = false,
        ...otherProps
    } = props;

    return (
        <button
            type={'button'}
            className={classNames(
                cls.button,
                {
                    [cls.square]: square,
                    [cls.disabled]: disabled,
                    [cls.maxWidth]: maxWidth,
                },
                [className, cls[theme], cls[size]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
