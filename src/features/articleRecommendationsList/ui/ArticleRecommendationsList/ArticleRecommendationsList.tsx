import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList, ArticleView } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';

interface IArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: IArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { data: articles, isLoading, error } = useGetArticleRecommendationsListQuery(3);

    if (isLoading || error) {
        return null;
        // TODO return spinner if loading, return error message if error
    }

    return (
        <VStack
            gap={'8'}
            className={classNames('', {}, [className])}
        >
            <Text
                size={TextSize.L}
                // className={cls.recommendationsTitle}
                title={t('RecommendationsBlockTitle')}
                TitleTag={'h2'}
            />
            <ArticleList
                articles={articles}
                // isLoading={recommendationsIsLoading}
                view={ArticleView.TILE}
                // className={cls.recommendations}
                target={'_blank'}
            />
        </VStack>
    );
});
