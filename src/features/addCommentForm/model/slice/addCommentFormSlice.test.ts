import { IAddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormReducer, addCommentFormActions } from './addCommentFormSlice';

describe('loginSlice.test', () => {
    test('test set text', () => {
        const state: TDeepPartial<IAddCommentFormSchema> = { text: '123' };
        expect(
            addCommentFormReducer(
                state as IAddCommentFormSchema,
                addCommentFormActions.setText('test test'),
            ),
        ).toEqual({
            text: 'test test',
        });
    });
});
