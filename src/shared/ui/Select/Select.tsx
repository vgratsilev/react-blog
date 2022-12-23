import { classNames, TMods } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, useMemo, memo } from 'react';
import cls from './Select.module.scss';

const typedMemo: <T>(c: T) => T = memo;

export interface ISelectOption<T extends string> {
    value: T;
    content: string;
}

interface ISelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: ISelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
    labelNoWidth?: boolean;
}

export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {
    const { className, label, options, value, onChange, readonly, labelNoWidth } = props;
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
    const mods: TMods = {
        [cls.readonly]: readonly,
    };

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.selectWrapper, mods, [className])}>
            {label && (
                <div className={classNames(cls.label, { [cls.labelNoWidth]: labelNoWidth }, [])}>
                    {label}
                </div>
            )}
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
