import { createSelector } from '@reduxjs/toolkit';
// import { buildSelector } from '@/shared/lib/store';
import { ICounterSchema } from '../../types/ICounterSchema';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: ICounterSchema) => counter.value,
);

// export const [useCounterValue, getCounterValue] = buildSelector((state) => state.counter);
