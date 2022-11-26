import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/Page';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface IArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: IArticlePageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    if (error) {
        return (
            <Page className={classNames(cls.articlePage, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('ArticlesLoadingErrorTitle')}
                    text={t('ArticlesLoadingErrorText')}
                    TitleTag={'h1'}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page
                className={classNames(cls.articlePage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                {t('ArticlesPage')}
                <ArticlesPageFilters />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
