import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListBox } from '@headlessui/react';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';
import { DropDownDirection } from '../../types/ui';

export interface IListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface IListBoxProps {
    className?: string;
    label?: string;
    items?: IListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export const ListBox = memo((props: IListBoxProps) => {
    const {
        className,
        label,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HListBox
            as={'div'}
            className={classNames(cls.listbox, { [cls.disabled]: readonly }, [className])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            {label && <HListBox.Label className={cls.label}>{label}</HListBox.Label>}
            <HListBox.Button as={Fragment}>
                <Button className={classNames(cls.button, { [cls.innerButtonDisabled]: readonly })}>
                    {value ?? defaultValue}
                </Button>
            </HListBox.Button>
            <HListBox.Options
                className={classNames(cls.options, { [cls.noLabel]: !label }, optionsClasses)}
            >
                {items?.map((item: IListBoxItem) => (
                    <HListBox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(
                                    cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,
                                    },
                                    [],
                                )}
                            >
                                {selected && '>'}
                                {item.content}
                            </li>
                        )}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
});
