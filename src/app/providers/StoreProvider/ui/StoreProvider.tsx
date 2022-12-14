import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/IStateSchema';

// import { useNavigate } from 'react-router-dom';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: TDeepPartial<IStateSchema>;
    asyncReducers?: TDeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        // navigate,
    );

    return <Provider store={store}>{children}</Provider>;
};
