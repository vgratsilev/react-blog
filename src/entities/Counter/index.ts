import type { ICounterSchema } from './model/types/ICounterSchema';
import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/counterSlice';

export { Counter, ICounterSchema, counterReducer };
