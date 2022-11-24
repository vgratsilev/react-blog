import { IStateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile } from '../../types/profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return profile object', () => {
        const data: IProfile = {
            username: 'admin',
            firstname: 'FirstN',
            lastname: 'LastN',
            city: 'City',
            country: Country.Russia,
            age: 30,
            currency: Currency.USD,
        };

        const state: DeepPartial<IStateSchema> = {
            profile: { form: data },
        };

        expect(getProfileForm(state as IStateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
    });
});
