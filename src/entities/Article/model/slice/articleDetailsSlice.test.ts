import { IArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetailsSlice';
import { ArticleBlockType, ArticleType, IArticle } from '../types/article';

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

describe('articleDetailsSlice.test', () => {
    test('test fetchArticleById pending', () => {
        const state: DeepPartial<IArticleDetailsSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(
            articleDetailsReducer(state as IArticleDetailsSchema, fetchArticleById.pending),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetchArticleById fulfilled', () => {
        const state: DeepPartial<IArticleDetailsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsReducer(
                state as IArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '1', ''),
            ),
        ).toEqual({
            isLoading: false,
            data,
            error: undefined,
        });
    });
});
