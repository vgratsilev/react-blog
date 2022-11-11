import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ArticleView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.LIST ? 3 : 9).fill(0).map((item, index) => (
        <ArticleListItemSkeleton
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            view={view}
            className={cls.card}
        />
    ));

export const ArticleList = memo((props: IArticleListProps) => {
    const { className, articles, isLoading, view = ArticleView.LIST } = props;

    const renderArticle = useCallback(
        (article: IArticle) => (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                className={cls.card}
            />
        ),
        [view],
    );

    if (isLoading) {
        return <div className={cls[view]}>{getSkeletons(view)}</div>;
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
