import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, IProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProdileData/fetchProfileData';

const initialState: IProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
