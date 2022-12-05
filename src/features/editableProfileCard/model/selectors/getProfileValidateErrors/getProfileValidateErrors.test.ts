import { IStateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return validateErrors', () => {
        const errors: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ];

        const state: DeepPartial<IStateSchema> = {
            profile: { validateErrors: errors },
        };

        expect(getProfileValidateErrors(state as IStateSchema)).toEqual(errors);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileValidateErrors(state as IStateSchema)).toEqual(undefined);
    });
});
