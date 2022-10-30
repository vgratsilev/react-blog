import { IUser, userActions, userReducer, IUserSchema } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

describe('userSlice', () => {
    const authData: IUser = { id: '1', username: 'test' };
    let state: IUserSchema = { authData, _mounted: false };

    test('initAuthData with empty localStorage', () => {
        expect(userReducer(undefined, userActions.initAuthData)).toEqual({ _mounted: true });
    });

    test('initAuthData with not empty localStorage', () => {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(authData));

        state = { authData: { id: '', username: '' }, _mounted: true };

        expect(userReducer(state, userActions.initAuthData)).toEqual({ authData, _mounted: true });
    });

    test('set auth data', () => {
        expect(userReducer(state, userActions.setAuthData(authData))).toEqual({
            authData,
            _mounted: true,
        });
    });

    test('logout', () => {
        expect(userReducer(state, userActions.logout)).toEqual({
            authData: undefined,
            _mounted: true,
        });

        const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
        expect(userData).toBeNull();
    });

    afterEach(() => {
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    });
});
