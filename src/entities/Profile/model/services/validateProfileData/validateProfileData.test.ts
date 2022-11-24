import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { IProfile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

const data: IProfile = {
    username: 'admin',
    firstname: 'FirstN',
    lastname: 'LastN',
    city: 'City',
    country: Country.Russia,
    age: 30,
    currency: Currency.USD,
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result.errors).toEqual([]);
    });

    test('without firstname and lastname', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: undefined });

        expect(result.errors).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: 30.3 });

        expect(result.errors).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result.errors).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result.errors).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
