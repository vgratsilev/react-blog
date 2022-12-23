import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';

export interface IArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating = memo((props: IArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');

    const authData = useSelector(getUserAuthData);
    const { data, isLoading } = useGetArticleRatingQuery({ userId: authData?.id ?? '', articleId });

    const [
        rateArticleMutation,
        // {
        //    isLoading,
        //    error
        // }
    ] = useRateArticleMutation();

    const handleRateAricle = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleMutation({
                    articleId,
                    userId: authData?.id ?? '',
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                console.error('Rate article failed', e);
            }
        },
        [articleId, authData?.id, rateArticleMutation],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateAricle(starsCount, feedback);
        },
        [handleRateAricle],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateAricle(starsCount);
        },
        [handleRateAricle],
    );

    if (isLoading) {
        return (
            <Skeleton
                width={'100%'}
                height={120}
            />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            title={t('RateArticleTitle')}
            feedbackTitle={t('FeedbackArticleTitle')}
            rate={rating?.rate}
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});
