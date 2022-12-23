import { IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('should return isLoading', () => {
        const state: TDeepPartial<IStateSchema> = {
            profile: { isLoading: true },
        };

        expect(getProfileIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getProfileIsLoading(state as IStateSchema)).toEqual(undefined);
    });
});
