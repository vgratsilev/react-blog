import { IStateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('', () => {
        const state: TDeepPartial<IStateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as IStateSchema)).toEqual(10);
    });
});
