import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/list.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import UserIcon from 'shared/assets/icons/user.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
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
    },
];
