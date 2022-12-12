import { IComment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { IArticleDetailsCommentSchema } from '../types/IArticleDetailsCommentSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';

const data: IArticleDetailsCommentSchema = {
    isLoading: false,
    error: undefined,
    ids: ['1', '2', '3'],
    entities: {
        '1': { id: '1', text: 'comment 1', user: { id: '1', username: 'user 1' } },
        '2': { id: '2', text: 'comment 2', user: { id: '2', username: 'user 2' } },
        '3': { id: '3', text: 'comment 3', user: { id: '1', username: 'user 1' } },
    },
};

describe('articleDetailsCommentSlice.test', () => {
    test('test fetchCommentsByArticleId pending', () => {
        const state: DeepPartial<IArticleDetailsCommentSchema> = {
            isLoading: false,
            error: undefined,
        };
        expect(
            articleDetailsCommentsReducer(
                state as IArticleDetailsCommentSchema,
                fetchCommentsByArticleId.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetchCommentsByArticleId fulfilled', () => {
        const state: DeepPartial<IArticleDetailsCommentSchema> = {
            isLoading: true,
        };

        const comments: IComment[] = [
            {
                id: '1',
                text: 'comment 1',
                user: { id: '1', username: 'user 1' },
            },
            { id: '2', text: 'comment 2', user: { id: '2', username: 'user 2' } },
            {
                id: '3',
                text: 'comment 3',
                user: { id: '1', username: 'user 1' },
            },
        ];

        expect(
            articleDetailsCommentsReducer(
                state as IArticleDetailsCommentSchema,
                fetchCommentsByArticleId.fulfilled(comments, '1', ''),
            ),
        ).toEqual({ ...data });
    });
});
