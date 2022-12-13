import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import BellIcon from '@/shared/assets/icons/bell.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { isMobileDevice } from '@/shared/lib/utils/isMobileDevice/isMobileDevice';
import cls from './NotificationButton.module.scss';

interface INotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: INotificationButtonProps) => {
    const { className } = props;
    const [isOpened, setIsOpened] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpened(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpened(false);
    }, []);

    const trigger = (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onOpenDrawer}
        >
            <Icon
                Svg={BellIcon}
                inverted
            />
        </Button>
    );
    return (
        <div>
            {isMobileDevice() ? (
                <>
                    {trigger}
                    <Drawer
                        isOpen={isOpened}
                        onClose={onCloseDrawer}
                    >
                        <NotificationList />
                    </Drawer>
                </>
            ) : (
                <Popover
                    className={classNames('', {}, [className])}
                    direction={'bottom left'}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            )}
        </div>
    );
});
