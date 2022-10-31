import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/list.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: ISidebarItem[] = [
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
    {
        path: RoutePath.profile,
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
];
