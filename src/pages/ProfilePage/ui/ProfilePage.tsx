import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

// import cls from './ProfilePage.module.scss';

interface IProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: IProfilePageProps) => {
    const { t } = useTranslation();
    return <div className={classNames('', {}, [className])}>{t('ProfilePage')}</div>;
};

export default ProfilePage;
