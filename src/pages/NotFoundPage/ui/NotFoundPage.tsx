import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: INotFoundPageProps) => {
    const { t } = useTranslation('notFound');
    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>{t('pageNotFound')}</Page>
    );
});
