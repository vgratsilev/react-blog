import { HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ArticleView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
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
    const { className, articles, isLoading, target, view = ArticleView.LIST } = props;
    const { t } = useTranslation('article');

    const renderArticle = useCallback(
        (article: IArticle) => (
            <ArticleListItem
                key={article.id}
                article={article}
                view={view}
                className={cls.card}
                target={target}
            />
        ),
        [target, view],
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text
                    title={t('NoArticlesFoundText')}
                    size={TextSize.L}
                />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});
