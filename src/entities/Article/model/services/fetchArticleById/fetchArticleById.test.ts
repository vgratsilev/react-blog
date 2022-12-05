import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleBlockType, ArticleType } from '../../consts/articleConsts';
import { IArticle } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const data: IArticle = {
    id: '1',
    title: 'test title',
    subtitle: 'test subtitle',
    user: {
        id: '1',
        username: 'admin',
    },
    views: 555,
    type: [ArticleType.IT],
    created_dt: '04.11.2022',
    img: 'some link',
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'test title',
            paragraphs: ['123', '456'],
        },
    ],
};

describe('fetchArticleById.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById, { articleDetails: { data } });
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById, { articleDetails: { data } });
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
