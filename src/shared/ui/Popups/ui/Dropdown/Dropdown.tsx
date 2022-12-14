import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { TDropDownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '../../../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

export interface IDropdownItem {
    id: string;
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface IDropdownProps {
    className?: string;
    items: IDropdownItem[];
    trigger: ReactNode;
    direction?: TDropDownDirection;
}

export const Dropdown = memo((props: IDropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as={'div'}
            className={classNames(popupCls.popup, {}, [className])}
        >
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((menuItem) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            onClick={menuItem.onClick}
                            className={classNames(cls.item, { [popupCls.active]: active })}
                            disabled={menuItem.disabled}
                        >
                            {menuItem.content}
                        </button>
                    );

                    if (menuItem.href) {
                        return (
                            <Menu.Item
                                key={menuItem.id}
                                as={AppLink}
                                to={menuItem.href}
                                refName={'href'}
                                disabled={menuItem.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            key={menuItem.id}
                            as={Fragment}
                            disabled={menuItem.disabled}
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
