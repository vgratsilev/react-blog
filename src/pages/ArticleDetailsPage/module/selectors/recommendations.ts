import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: IStateSchema) =>
    state.articleDetailsRecommendations?.isLoading || false;

export const getArticleRecommendationsError = (state: IStateSchema) =>
    state.articleDetailsRecommendations?.error;
