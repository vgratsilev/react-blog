import { IStateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
    getArticlesPageError,
    getArticlesPageNum,
    getArticlesPageHasMore,
    getArticlesPageLimit,
    getArticlesPageIsInited,
    getArticlesPageSort,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageType,
} from './articlesPageSelectors';

describe('getArticlesPageError', () => {
    test('should return error', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { error: '123' },
        };

        expect(getArticlesPageError(state as IStateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageError(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getArticlesPageIsLoading', () => {
    test('should return isLoading', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { isLoading: true },
        };

        expect(getArticlesPageIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageIsLoading(state as IStateSchema)).toEqual(false);
    });
});

describe('getArticlesPageView', () => {
    test('should return view', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { view: ArticleView.LIST },
        };

        expect(getArticlesPageView(state as IStateSchema)).toEqual(ArticleView.LIST);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageView(state as IStateSchema)).toEqual(ArticleView.TILE);
    });
});

describe('getArticlesPageNum', () => {
    test('should return page number', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { page: 4 },
        };

        expect(getArticlesPageNum(state as IStateSchema)).toBe(4);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageNum(state as IStateSchema)).toBe(1);
    });
});

describe('getArticlesPageHasMore', () => {
    test('should return hasMore', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { hasMore: false },
        };

        expect(getArticlesPageHasMore(state as IStateSchema)).toBeFalsy();
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageHasMore(state as IStateSchema)).toBeUndefined();
    });
});

describe('getArticlesPageLimit', () => {
    test('should return limit', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { limit: 5 },
        };

        expect(getArticlesPageLimit(state as IStateSchema)).toBe(5);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageLimit(state as IStateSchema)).toBe(9);
    });
});

describe('getArticlesPageIsInited', () => {
    test('should return isInited', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { isInited: true },
        };

        expect(getArticlesPageIsInited(state as IStateSchema)).toBeTruthy();
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageIsInited(state as IStateSchema)).toBeFalsy();
    });
});

describe('getArticlesPageSort', () => {
    test('should return sort', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { sort: ArticleSortField.TITLE },
        };

        expect(getArticlesPageSort(state as IStateSchema)).toBe(ArticleSortField.TITLE);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageSort(state as IStateSchema)).toBe(ArticleSortField.CREATED);
    });
});

describe('getArticlesPageOrder', () => {
    test('should return order', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { order: 'desc' },
        };

        expect(getArticlesPageOrder(state as IStateSchema)).toBe('desc');
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageOrder(state as IStateSchema)).toBe('asc');
    });
});

describe('getArticlesPageSearch', () => {
    test('should return search', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { search: 'test' },
        };

        expect(getArticlesPageSearch(state as IStateSchema)).toBe('test');
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageSearch(state as IStateSchema)).toBe('');
    });
});

describe('getArticlesPageType', () => {
    test('should return type', () => {
        const state: TDeepPartial<IStateSchema> = {
            articlesPage: { type: ArticleType.FOOD },
        };

        expect(getArticlesPageType(state as IStateSchema)).toBe(ArticleType.FOOD);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticlesPageType(state as IStateSchema)).toBe(ArticleType.ALL);
    });
});
