import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            // window.console.log(e);
            return rejectWithValue('error');
        }
    },
);
