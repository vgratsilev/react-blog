import { rtkApi } from '@/shared/api/rtkApi';
import { INotification } from '../model/types/notification';

const notificationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotificationsList: build.query<INotification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const { useGetNotificationsListQuery } = notificationsApi;
