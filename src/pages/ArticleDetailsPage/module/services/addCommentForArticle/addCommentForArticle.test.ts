import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
// import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { addCommentForArticle } from './addCommentForArticle';

describe('addCommentForArticle.test', () => {
    // TODO success test is not working
    // test('success', async () => {
    //     const thunk = new TestAsyncThunk(addCommentForArticle, {
    //         user: {
    //             authData: {
    //                 id: '1',
    //                 username: 'admin',
    //             },
    //         },
    //         articleDetails: {
    //             data: {
    //                 id: '1',
    //                 title: 'test title',
    //                 subtitle: 'test subtitle',
    //                 views: 555,
    //                 type: [ArticleType.IT],
    //                 created_dt: '04.11.2022',
    //                 img: 'some link',
    //                 blocks: [
    //                     {
    //                         id: '1',
    //                         type: ArticleBlockType.TEXT,
    //                         title: 'test title',
    //                         paragraphs: ['123', '456'],
    //                     },
    //                 ],
    //             },
    //         },
    //         articleDetailsComments: {
    //             ids: ['1'],
    //             entities: {
    //                 '1': { user: { username: 'admin', id: '1' }, text: 'comment 1', id: '1' },
    //             },
    //         },
    //     });
    //     thunk.api.post.mockReturnValue(Promise.resolve({ text: 'test test' }));
    //     const result = await thunk.callThunk('test test');
    //
    //     expect(thunk.api.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual({ text: 'test test' });
    // });

    test('error', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle, {
            addCommentForm: { text: 'test' },
        });
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('test');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
