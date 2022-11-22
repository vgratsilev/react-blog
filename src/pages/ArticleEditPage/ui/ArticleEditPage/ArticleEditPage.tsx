import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

export interface IArticleEditPageProps {
    className?: string;
}

// TODO add functionality to edit/create articles
export const ArticleEditPage = memo((props: IArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articleEdit');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('EditArticlePageTitle') + id : t('NewArticlePageTitle')}
        </Page>
    );
});
