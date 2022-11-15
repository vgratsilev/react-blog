import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { fetchCommentsByArticleId } from '../../module/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../../module/services/addCommentForArticle/addCommentForArticle';
import {
    articleDetailsCommentReducer,
    getArticleComments,
} from '../../module/slice/articleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../module/selectors/comments';

interface IArticleDetailsPageProps {
    className?: string;
    testId?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage = (props: IArticleDetailsPageProps) => {
    const { className, testId } = props;
    const { t } = useTranslation('article');
    let { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    // const commentsError = useSelector(getArticleCommentsError);
    const navigate = useNavigate();

    if (!id && __PROJECT__ === 'storybook') {
        id = testId;
    }

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

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
                <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onBackToList}
                >
                    {t('BackToArticleListBtn')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    className={cls.commentTitle}
                    title={t('CommentsBlockTitle')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
