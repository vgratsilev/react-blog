import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { getArticles } from '../../model/slice/articlesPageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface IArticleInfiniteListProps {
    className?: string;
}

// TODO add infinite list with react-virtuoso
export const ArticleInfiniteList = memo((props: IArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('ArticlesLoadingErrorTitle')}
                text={t('ArticlesLoadingErrorText')}
                TitleTag={'h1'}
            />
        );
    }

    return (
        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
            className={className}
        />
    );
});
