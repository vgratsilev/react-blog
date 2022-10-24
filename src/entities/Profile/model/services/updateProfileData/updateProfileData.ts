import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { IProfile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;

        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<IProfile>('/profile', formData);

            return response.data;
        } catch (e) {
            window.console.log(e);
            return rejectWithValue(i18n.t('ProfileErrorMessage'));
        }
    },
);
