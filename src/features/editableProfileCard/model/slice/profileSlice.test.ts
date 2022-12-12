import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { IProfile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/consts';
import { IProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data: IProfile = {
    username: 'admin',
    firstname: 'FirstN',
    lastname: 'LastN',
    city: 'City',
    country: Country.Russia,
    age: 30,
    currency: Currency.USD,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<IProfileSchema> = {};
        expect(profileReducer(state as IProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<IProfileSchema> = {
            data,
            form: { username: '' },
            readonly: false,
        };
        expect(profileReducer(state as IProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            data,
            form: data,
            validateErrors: undefined,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<IProfileSchema> = {
            form: { username: 'test' },
        };
        expect(
            profileReducer(
                state as IProfileSchema,
                profileActions.updateProfile({ username: 'test' }),
            ),
        ).toEqual({
            form: { username: 'test' },
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as IProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
        };
        expect(
            profileReducer(state as IProfileSchema, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            isLoading: false,
            readonly: true,
            data,
            form: data,
            validateErrors: undefined,
        });
    });
});
