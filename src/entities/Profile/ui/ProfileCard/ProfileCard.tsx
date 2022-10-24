import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { IProfile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string;
    data?: IProfile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string) => void;
    onChangeLastname?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    // onChangeCountry: (value?: string) => void;
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeUsername,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('ProfileLoadingErrorTitle')}
                    text={t('ProfileLoadingErrorText')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div>
                {data?.avatar && (
                    <img
                        src={data?.avatar}
                        alt={t('AvatarLabel')}
                    />
                )}
                <Input
                    value={data?.firstname}
                    label={t('FirstNameLabel')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeFirstname}
                />
                <Input
                    value={data?.lastname}
                    label={t('LastNameLabel')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeLastname}
                />
                <Input
                    value={data?.username}
                    label={t('UsernameLabel')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeUsername}
                />
                <Input
                    value={data?.age}
                    label={t('AgeLabel')}
                    className={cls.input}
                    readonly={readonly}
                    type={'number'}
                    min={12}
                    max={150}
                    step={1}
                    onChange={onChangeAge}
                />
                <Input
                    value={data?.city}
                    label={t('CityLabel')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeCity}
                />
                <Input
                    value={data?.avatar}
                    label={t('AvatarLabel')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            </div>
        </div>
    );
};
