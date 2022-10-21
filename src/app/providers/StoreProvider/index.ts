import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { IStateSchema, IReduxStoreWithManager, IThunkConfig } from './config/IStateSchema';

export {
    StoreProvider,
    createReduxStore,
    IStateSchema,
    IReduxStoreWithManager,
    IThunkConfig,
    AppDispatch,
};
