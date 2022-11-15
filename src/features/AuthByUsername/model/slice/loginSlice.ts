import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/ILoginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

export const loginInitialState: ILoginSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState: loginInitialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
