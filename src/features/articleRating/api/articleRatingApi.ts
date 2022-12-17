import { rtkApi } from '@/shared/api/rtkApi';
import { IRating } from '@/entities/Rating';

interface IGetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface IRateArticleArg extends IGetArticleRatingArg {
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<IRating[], IGetArticleRatingArg>({
            query: ({ userId, articleId }) => ({
                url: '/articleRatings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, IRateArticleArg>({
            query: (arg) => ({
                url: '/articleRatings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi;
