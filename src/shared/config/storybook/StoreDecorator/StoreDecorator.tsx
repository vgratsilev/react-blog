/* eslint-disable indent */
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator =
    (
        state: DeepPartial<IStateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>,
    ) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
