import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
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
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
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
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack
                className={classNames(cls.profileCard, {}, [className, cls.loading])}
                maxWidth
                justify={'center'}
            >
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <VStack
                className={classNames(cls.profileCard, {}, [className, cls.error])}
                maxWidth
            >
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('ProfileLoadingErrorTitle')}
                    text={t('ProfileLoadingErrorText')}
                    TitleTag={'h1'}
                />
            </VStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            className={classNames(cls.profileCard, mods, [className])}
            maxWidth
            gap={'8'}
        >
            {data?.avatar && (
                <HStack
                    maxWidth
                    justify={'center'}
                >
                    <Avatar
                        src={data?.avatar}
                        alt={t('AvatarLabel')}
                        size={150}
                    />
                </HStack>
            )}
            <Input
                value={data?.firstname}
                label={t('FirstNameLabel')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid={'ProfileCard.firstname'}
            />
            <Input
                value={data?.lastname}
                label={t('LastNameLabel')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid={'ProfileCard.lastname'}
            />
            <Input
                value={data?.username}
                label={t('UsernameLabel')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeUsername}
                data-testid={'ProfileCard.username'}
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
                data-testid={'ProfileCard.age'}
            />
            <Input
                value={data?.city}
                label={t('CityLabel')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCity}
                data-testid={'ProfileCard.city'}
            />
            <Input
                value={__PROJECT__ !== 'storybook' ? data?.avatar : 'stub'}
                label={t('AvatarLabel')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAvatar}
                data-testid={'ProfileCard.avatar'}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />

            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
