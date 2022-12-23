import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text';
import { Dropdown } from '@/shared/ui/Popups';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from '@/shared/const/router';
import cls from './UserAvatarDropdown.module.scss';

interface IUserAvatarDropdownProps {
    className?: string;
}

export const UserAvatarDropdown = memo((props: IUserAvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelVisible = useMemo(() => isAdmin || isManager, [isAdmin, isManager]);

    const dropdownItems = useMemo(() => {
        if (authData) {
            return [
                ...(isAdminPanelVisible
                    ? [
                          {
                              id: '1',
                              content: t('AdminPanelLink'),
                              href: RoutePath.admin_panel,
                          },
                      ]
                    : []),
                {
                    id: '2',
                    content: t('ProfilePageLink'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    id: '3',
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ];
        }
        return [];
    }, [authData, isAdminPanelVisible, onLogout, t]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction={'bottom left'}
            items={dropdownItems}
            trigger={
                <HStack>
                    <Avatar
                        size={30}
                        src={authData.avatar}
                    />
                    <Text
                        theme={TextTheme.INVERTED}
                        size={TextSize.S}
                        title={authData.username}
                        className={cls.loginName}
                    />
                </HStack>
            }
        />
    );
});
