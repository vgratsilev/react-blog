import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { IArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data: IArticleDetailsCommentSchema = {
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
        '1': { id: '1', text: 'comment 1', user: { id: '1', username: 'user 1' } },
        '2': { id: '2', text: 'comment 2', user: { id: '2', username: 'user 2' } },
        '3': { id: '3', text: 'comment 3', user: { id: '1', username: 'user 1' } },
    },
};

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {
            articleDetailsPage: {
                comments: data,
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, {
            articleDetailsPage: {
                comments: data,
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
