import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListBox } from '@headlessui/react';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { DropDownDirection } from '../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';

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
            className={classNames(cls.listBox, { [popupCls.disabled]: readonly }, [
                className,
                popupCls.popup,
            ])}
            value={value}
            onChange={onChange}
            disabled={readonly}
        >
            {label && <HListBox.Label className={cls.label}>{label}</HListBox.Label>}
            <HListBox.Button as={'div'}>
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
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
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
