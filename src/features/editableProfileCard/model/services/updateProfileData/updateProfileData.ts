import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from '@/app/providers/StoreProvider';
import { IProfile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    const validation = validateProfileData(formData);

    if (!validation.isValid) {
        return rejectWithValue(validation.errors);
    }

    try {
        const response = await extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        // window.console.log(e);
        return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
});
