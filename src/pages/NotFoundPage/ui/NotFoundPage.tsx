import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: INotFoundPageProps) => {
    const { t } = useTranslation('notFound');
    return <div className={classNames(cls.notFoundPage, {}, [className])}>{t('pageNotFound')}</div>;
});
