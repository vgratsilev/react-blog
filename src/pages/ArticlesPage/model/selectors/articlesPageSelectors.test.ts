import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
    getArticlesPageError,
    getArticlesPageNum,
    getArticlesPageHasMore,
    getArticlesPageLimit,
} from './articlesPageSelectors';

describe('getArticlesPageError', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            articlesPage: { error: '123' },
        };

        expect(getArticlesPageError(state as IStateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticlesPageError(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getArticlesPageIsLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<IStateSchema> = {
            articlesPage: { isLoading: true },
        };

        expect(getArticlesPageIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticlesPageIsLoading(state as IStateSchema)).toEqual(false);
    });
});

describe('getArticlesPageView', () => {
    test('should return view', () => {
        const state: DeepPartial<IStateSchema> = {
            articlesPage: { view: ArticleView.LIST },
        };

        expect(getArticlesPageView(state as IStateSchema)).toEqual(ArticleView.LIST);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticlesPageView(state as IStateSchema)).toEqual(ArticleView.TILE);
    });
});

describe('getArticlesPageNum', () => {
    test('should return page number', () => {
        const state: DeepPartial<IStateSchema> = {
            articlesPage: { page: 4 },
        };

        expect(getArticlesPageNum(state as IStateSchema)).toBe(4);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticlesPageNum(state as IStateSchema)).toBe(1);
    });
});

describe('getArticlesPageHasMore', () => {
    test('should return hasMore', () => {
        const state: DeepPartial<IStateSchema> = {
            articlesPage: { hasMore: false },
        };

        expect(getArticlesPageHasMore(state as IStateSchema)).toBeFalsy();
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticlesPageHasMore(state as IStateSchema)).toBeUndefined();
    });
});

describe('getArticlesPageLimit', () => {
    test('should return limit', () => {
        const state: DeepPartial<IStateSchema> = {
            articlesPage: { limit: 5 },
        };

        expect(getArticlesPageLimit(state as IStateSchema)).toBe(5);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticlesPageLimit(state as IStateSchema)).toBe(9);
    });
});
