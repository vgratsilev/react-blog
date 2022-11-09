import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface IProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = memo((props: IProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id; // TODO: can be shortened with reselect

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('ProfilePage')} />
            {canEdit && (
                <div className={cls.btnWrapper}>
                    {readonly && (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.editBtn}
                            onClick={onEdit}
                        >
                            {t('ChangeBtn')}
                        </Button>
                    )}
                    {!readonly && (
                        <>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSaveEdit}
                            >
                                {t('SaveBtn')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                className={cls.cancelBtn}
                                onClick={onCancelEdit}
                            >
                                {t('CancelBtn')}
                            </Button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
});
