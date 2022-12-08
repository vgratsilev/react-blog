import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { DropDownDirection } from '../../../../types/ui';

interface IPopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDownDirection;
    children: ReactNode;
}

export const Popover = (props: IPopoverProps) => {
    const { className, trigger, children, direction = 'bottom right' } = props;

    const panelClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, panelClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
