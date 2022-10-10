import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import cls from './Input.module.scss';

type InputHTMLElement = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface IInputProps extends InputHTMLElement {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    autofocus?: boolean;
}

const InputControl = (props: IInputProps) => {
    const { className, value, onChange, label, type = 'text', autofocus, ...otherProps } = props;
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

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {label && <div className={cls.label}>{label}</div>}
            <input
                {...otherProps}
                ref={inputRef}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
            />
        </div>
    );
};

export const Input = memo(InputControl);
