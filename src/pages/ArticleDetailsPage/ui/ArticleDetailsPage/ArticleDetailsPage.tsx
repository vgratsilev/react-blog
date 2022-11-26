import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { getArticleRecommendationsIsLoading } from '../../module/selectors/recommendations';
import { fetchCommentsByArticleId } from '../../module/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../module/services/addCommentForArticle/addCommentForArticle';
import {
    // articleDetailsCommentsReducer,
    getArticleComments,
} from '../../module/slice/articleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../module/selectors/comments';
import {
    // articleDetailsRecommendationsReducer,
    getArticleRecommendations,
} from '../../module/slice/articleDetailsRecommendationsSlice';
import { fetchArticleRecommendations } from '../../module/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../module/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface IArticleDetailsPageProps {
    className?: string;
    testId?: string;
}

const reducers: ReducersList = {
    // articleDetailsComments: articleDetailsCommentsReducer,
    // articleDetailsRecommendations: articleDetailsRecommendationsReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
    const { className, testId } = props;
    const { t } = useTranslation('article');
    let { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    // const commentsError = useSelector(getArticleCommentsError);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    if (!id && __PROJECT__ === 'storybook') {
        id = testId;
    }

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('ArticleNotFound')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack
                    maxWidth
                    gap={'16'}
                >
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={cls.recommendationsTitle}
                        title={t('RecommendationsBlockTitle')}
                        TitleTag={'h2'}
                    />
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        view={ArticleView.TILE}
                        className={cls.recommendations}
                        target={'_blank'}
                    />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('CommentsBlockTitle')}
                        TitleTag={'h2'}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList
                        comments={comments}
                        isLoading={commentsIsLoading}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
