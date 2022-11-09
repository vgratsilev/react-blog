import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { ISidebarItem } from 'widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface ISidebarItemProps {
    item: ISidebarItem;
    collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <div className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
            <AppLink
                to={item.path}
                className={cls.item}
                theme={AppLinkTheme.SECONDARY}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    );
});
