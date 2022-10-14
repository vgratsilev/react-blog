import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface ILoginByUsernameProps {
    username: string;
    password: string;
}

// enum LoginErrors {
//     INCORRECT_DATA = '',
//     SERVER_ERROR=
// }

export const loginByUsername = createAsyncThunk<
    IUser,
    ILoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<IUser>('http://localhost:8000/login', authData);
        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        window.console.log(e);
        return thunkAPI.rejectWithValue(i18n.t('LoginErrorMessage'));
    }
});
