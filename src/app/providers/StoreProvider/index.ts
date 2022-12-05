import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { IStateSchema, IReduxStoreWithManager, IThunkConfig } from './config/IStateSchema';

export type { IStateSchema, IReduxStoreWithManager, IThunkConfig, AppDispatch };

export { StoreProvider, createReduxStore };
