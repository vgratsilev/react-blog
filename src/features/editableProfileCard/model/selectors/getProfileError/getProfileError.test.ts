import { IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    test('should return error', () => {
        const state: TDeepPartial<IStateSchema> = {
            profile: { error: '123' },
        };

        expect(getProfileError(state as IStateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getProfileError(state as IStateSchema)).toEqual(undefined);
    });
});
