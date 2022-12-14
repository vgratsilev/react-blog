import { IStateSchema } from '@/app/providers/StoreProvider';
import { getArticleCommentsIsLoading, getArticleCommentsError } from './comments';

describe('getArticleCommentsError', () => {
    test('should return error', () => {
        const state: TDeepPartial<IStateSchema> = {
            articleDetailsPage: {
                comments: { error: '123' },
            },
        };

        expect(getArticleCommentsError(state as IStateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticleCommentsError(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getArticleCommentsIsLoading', () => {
    test('should return isLoading', () => {
        const state: TDeepPartial<IStateSchema> = {
            articleDetailsPage: {
                comments: { isLoading: true },
            },
        };

        expect(getArticleCommentsIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticleCommentsIsLoading(state as IStateSchema)).toEqual(false);
    });
});
