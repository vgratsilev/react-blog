import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface ISelectOption {
    value: string;
    content: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: ISelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: ISelectProps) => {
    const { className, label, options, value, onChange, readonly } = props;
    const optionsList = useMemo(
        () =>
            options?.map((item) => (
                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.content}
                </option>
            )),
        [options],
    );
    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {label && <div className={cls.label}>{label}</div>}
            <select
                data-testid={'selectBox'}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
});
