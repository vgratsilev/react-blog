import { IProfile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) {
        return {
            isValid: false,
            errors: [ValidateProfileError.NO_DATA],
        };
    }

    const { firstname, lastname, age, country } = profile;

    const errors: ValidateProfileError[] = [];

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return {
        isValid: errors.length < 1,
        errors,
    };
};
