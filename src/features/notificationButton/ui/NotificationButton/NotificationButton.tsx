import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import BellIcon from 'shared/assets/icons/bell.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            className={classNames('', {}, [className])}
            direction={'bottom left'}
            trigger={
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon
                        Svg={BellIcon}
                        inverted
                    />
                </Button>
            }
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
