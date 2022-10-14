import { createSelector } from '@reduxjs/toolkit';
import { ICounterSchema } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: ICounterSchema) => counter.value,
);
