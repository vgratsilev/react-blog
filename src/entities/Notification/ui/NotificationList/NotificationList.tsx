import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useGetNotificationsListQuery } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface INotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useGetNotificationsListQuery(null, { pollingInterval: 10000 });

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                maxWidth
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton
                    width={'100%'}
                    height={'80px'}
                    borderRadius={'8px'}
                />
                <Skeleton
                    width={'100%'}
                    height={'80px'}
                    borderRadius={'8px'}
                />
                <Skeleton
                    width={'100%'}
                    height={'80px'}
                    borderRadius={'8px'}
                />
            </VStack>
        );
    }

    return (
        <VStack
            gap={'16'}
            maxWidth
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    data={notification}
                />
            ))}
        </VStack>
    );
});
