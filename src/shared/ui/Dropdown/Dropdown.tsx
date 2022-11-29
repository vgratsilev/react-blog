import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

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
    direction?: DropDownDirection;
}

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top left': cls.optionsTopLeft,
    'top right': cls.optionsTopRight,
};

export const Dropdown = memo((props: IDropdownProps) => {
    const { className, items, trigger, direction = 'bottom right' } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as={'div'}
            className={classNames(cls.dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((menuItem) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            type={'button'}
                            onClick={menuItem.onClick}
                            className={classNames(cls.item, { [cls.active]: active })}
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
