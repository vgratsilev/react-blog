import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                isInited: false,
            },
        });

        const searchParams = new URLSearchParams();

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4); // pending, fulfilled, setPage, fetchArticlesList
        expect(fetchArticlesList).toBeCalledWith({});
    });

    test('when inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                isInited: true,
            },
        });

        const searchParams = new URLSearchParams();

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2); // pending, fulfilled
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
