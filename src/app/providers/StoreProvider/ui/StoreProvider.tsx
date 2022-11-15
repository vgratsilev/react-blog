import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore, IStateSchema } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

// import { useNavigate } from 'react-router-dom';

interface IStoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
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
