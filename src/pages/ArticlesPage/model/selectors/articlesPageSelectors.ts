import { IStateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleView, ArticleType } from '@/entities/Article';

export const getArticlesPageIsLoading = (state: IStateSchema) =>
    state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: IStateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: IStateSchema) =>
    state.articlesPage?.view || ArticleView.TILE;
export const getArticlesPageNum = (state: IStateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageIsInited = (state: IStateSchema) => state.articlesPage?.isInited;
export const getArticlesPageSort = (state: IStateSchema) =>
    state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageOrder = (state: IStateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSearch = (state: IStateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: IStateSchema) =>
    state.articlesPage?.type ?? ArticleType.ALL;
