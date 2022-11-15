import { IStateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getRestoreScroll = (state: IStateSchema) => state.restoreScroll.scroll;

export const getRestoreScrollByPath = createSelector(
    getRestoreScroll,
    (state: IStateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
