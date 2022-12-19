import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import cls from './NotificationItem.module.scss';
import { INotification } from '../../model/types/notification';

interface INotificationItemProps {
    className?: string;
    data: INotification;
}

export const NotificationItem = memo((props: INotificationItemProps) => {
    const { className, data } = props;
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <Text
                title={data.title}
                text={data.description}
            />
        </Card>
    );

    if (data.href) {
        return (
            <a
                className={cls.link}
                target={'_blank'}
                href={data.href}
                rel={'noreferrer'}
            >
                {content}
            </a>
        );
    }

    return content;
});
