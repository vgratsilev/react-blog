import { IStateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return loginForm object', () => {
        const state: TDeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: false,
                username: 'test',
                password: '123',
                error: 'test error',
            },
        };
        expect(getLoginState(state as IStateSchema)).toEqual({
            isLoading: false,
            username: 'test',
            password: '123',
            error: 'test error',
        });
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getLoginState(state as IStateSchema)).toEqual({
            isLoading: false,
            username: '',
            password: '',
            error: '',
        });
    });
});
