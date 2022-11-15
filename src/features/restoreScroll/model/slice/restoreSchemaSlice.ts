import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRestoreScrollSchema } from '../types/restoreScrollSchema';

export const restoreScrollInitialState: IRestoreScrollSchema = {
    scroll: {},
};

const restoreScrollSlice = createSlice({
    name: 'restoreScroll',
    initialState: restoreScrollInitialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: restoreScrollActions } = restoreScrollSlice;
export const { reducer: restoreScrollReducer } = restoreScrollSlice;
