import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
    getArticlesPageError,
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
    test('should return isLoading', () => {
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
