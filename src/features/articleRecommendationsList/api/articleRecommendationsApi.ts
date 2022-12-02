import { rtkApi } from 'shared/api/rtkApi';
import { IArticle } from 'entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<IArticle[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
});

export const { useGetArticleRecommendationsListQuery } = recommendationsApi;
