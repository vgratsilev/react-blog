import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface IProfile {
    firstname?: string;
    lastname?: string;
    username?: string;
    avatar?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
