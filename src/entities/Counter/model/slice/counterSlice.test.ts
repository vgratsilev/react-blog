import { ICounterSchema } from '../types/ICounterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });

    test('decrement', () => {
        const state: ICounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('increment', () => {
        const state: ICounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
});
