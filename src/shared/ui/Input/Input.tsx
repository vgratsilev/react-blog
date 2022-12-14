import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import cls from './Input.module.scss';

type TInputHTMLElement = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly' | 'onKeyDown'
>;

interface IInputProps extends TInputHTMLElement {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    label?: string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        value,
        onChange,
        label,
        type = 'text',
        autofocus,
        readonly,
        ...otherProps
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!autofocus) {
            return;
        }
        inputRef.current?.focus();
    }, [autofocus]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: TMods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {label && <div className={cls.label}>{label}</div>}
            <input
                {...otherProps}
                ref={inputRef}
                type={type}
                value={value}
                readOnly={readonly}
                onChange={onChangeHandler}
                className={cls.input}
            />
        </div>
    );
});
