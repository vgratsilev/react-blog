import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface IEditableProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: IEditableProfilePageHeaderProps) => {
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
        <HStack
            maxWidth
            justify={'between'}
            className={classNames('', {}, [className])}
        >
            <Text
                title={t('ProfilePage')}
                TitleTag={'h1'}
            />
            {canEdit && (
                <>
                    {readonly && (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                            data-testid={'EditableProfileCardHeader.EditBtn'}
                        >
                            {t('ChangeBtn')}
                        </Button>
                    )}
                    {!readonly && (
                        <HStack gap={'8'}>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSaveEdit}
                                data-testid={'EditableProfileCardHeader.SaveBtn'}
                            >
                                {t('SaveBtn')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                                data-testid={'EditableProfileCardHeader.CancelBtn'}
                            >
                                {t('CancelBtn')}
                            </Button>
                        </HStack>
                    )}
                </>
            )}
        </HStack>
    );
});
