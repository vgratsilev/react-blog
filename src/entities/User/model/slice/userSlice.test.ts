import { IUser, userActions, userReducer, IUserSchema } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

describe('userSlice', () => {
    const authData: IUser = { id: '1', username: 'test' };
    let state: IUserSchema = { authData };

    test('initAuthData with empty localStorage', () => {
        expect(userReducer(undefined, userActions.initAuthData)).toEqual({});
    });

    test('initAuthData with not empty localStorage', () => {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(authData));

        state = { authData: { id: undefined, username: undefined } };

        expect(userReducer(state, userActions.initAuthData)).toEqual({ authData });
    });

    test('set auth data', () => {
        expect(userReducer(state, userActions.setAuthData(authData))).toEqual({ authData });
    });

    test('logout', () => {
        expect(userReducer(state, userActions.logout)).toEqual({ authData: undefined });

        const userData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
        expect(userData).toBeNull();
    });

    afterEach(() => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    });
});
