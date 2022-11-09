import { IStateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('getAddCommentFormText', () => {
    test('should return addCommentForm object', () => {
        const state: DeepPartial<IStateSchema> = {
            addCommentForm: { text: 'test comment' },
        };

        expect(getAddCommentFormText(state as IStateSchema)).toBe('test comment');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getAddCommentFormText(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getAddCommentFormError', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            addCommentForm: { error: '123' },
        };

        expect(getAddCommentFormError(state as IStateSchema)).toBe('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getAddCommentFormError(state as IStateSchema)).toEqual(undefined);
    });
});
