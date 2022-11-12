import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {
    articlesPageActions,
    articlesPageReducer,
    getArticles,
} from '../../model/slice/articlesPageSlice';
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

    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({ page: 1 }));
    });

    const onChangeView = useCallback(
        (newView: ArticleView) => {
            dispatch(articlesPageActions.setView(newView));
        },
        [dispatch],
    );

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    if (error) {
        return (
            <Page className={classNames(cls.articlePage, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                    title={t('ArticlesLoadingErrorTitle')}
                    text={t('ArticlesLoadingErrorText')}
                />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.articlePage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                {t('ArticlesPage')}
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    articles={articles}
                    view={view}
                    isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
