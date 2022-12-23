import { ILoginSchema } from '../types/ILoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: TDeepPartial<ILoginSchema> = { username: '123' };
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('123123'))).toEqual({
            username: '123123',
        });
    });

    test('test set password', () => {
        const state: TDeepPartial<ILoginSchema> = { password: '123' };
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('123123'))).toEqual({
            password: '123123',
        });
    });
});
