import { IStateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter object', () => {
        const state: TDeepPartial<IStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as IStateSchema)).toEqual({ value: 10 });
    });
});
