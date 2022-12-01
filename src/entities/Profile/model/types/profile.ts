import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export interface IProfile {
    id?: string;
    firstname?: string;
    lastname?: string;
    username?: string;
    avatar?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
}
