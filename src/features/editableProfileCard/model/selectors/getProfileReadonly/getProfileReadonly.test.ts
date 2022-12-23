import { IStateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return readonly', () => {
        const state: TDeepPartial<IStateSchema> = {
            profile: { readonly: true },
        };

        expect(getProfileReadonly(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getProfileReadonly(state as IStateSchema)).toEqual(undefined);
    });
});
