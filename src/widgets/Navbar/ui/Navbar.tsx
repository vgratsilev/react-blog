import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo, useCallback, useMemo, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { HStack } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: INavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

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

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    theme={TextTheme.INVERTED}
                    title={t('AppName')}
                    TitleTag={'h1'}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('CreateNewArticleLink')}
                </AppLink>
                <Dropdown
                    className={cls.dropdown}
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
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Login')}
            </Button>
            {isAuthModal && (
                <LoginModal
                    isOpen={isAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
});
