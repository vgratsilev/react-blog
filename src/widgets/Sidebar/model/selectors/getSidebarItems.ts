import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/list.svg';
import UserIcon from '@/shared/assets/icons/user.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import { RoutePath } from '@/shared/const/router';
import { ISidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: ISidebarItem[] = [
        {
            path: RoutePath.main,
            text: 'MainPageLink',
            Icon: MainIcon,
        },
        {
            path: RoutePath.about,
            text: 'AboutPageLink',
            Icon: AboutIcon,
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                text: 'ProfilePageLink',
                Icon: UserIcon,
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                text: 'ArticlesPageLink',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
});
