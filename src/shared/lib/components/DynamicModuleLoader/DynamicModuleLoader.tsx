import { Reducer } from '@reduxjs/toolkit';
import {
    IReduxStoreWithManager,
    IStateSchema,
    TStateSchemaKey,
} from '@/app/providers/StoreProvider';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type TReducersList = {
    [name in TStateSchemaKey]?: Reducer<NonNullable<IStateSchema[name]>>;
};

interface IDynamicModuleLoaderProps {
    children: ReactNode;
    reducers: TReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: IDynamicModuleLoaderProps) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const dispatch = useDispatch();
    const store = useStore() as IReduxStoreWithManager;

    useEffect(() => {
        const allReducers = store.reducerManager.getReducerMap();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = allReducers[name as TStateSchemaKey];

            // add
            if (!mounted) {
                store.reducerManager.add(name as TStateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as TStateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
